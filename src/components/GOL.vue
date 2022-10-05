<!-- conway's Game of life -->
<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";

const wrapper = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const width = ref(0);
const height = ref(0);
const cellSize = ref(10);
const cols = ref(0);
const rows = ref(0);
const grid = ref<boolean[][]>();
const next = ref<boolean[][]>();
const running = ref(false);
const interval = ref(0);
const intervalTime = ref(120);

const randomizeCount = ref(10);

// init canvas
const init = () => {
  randomizeCount.value = 10;
  width.value = wrapper.value?.clientWidth || 0;
  height.value = wrapper.value?.clientHeight || 0;
  canvas.value!.width = width.value;
  canvas.value!.height = height.value;
  cols.value = Math.floor(width.value / cellSize.value);
  rows.value = Math.floor(height.value / cellSize.value);
  ctx.value = canvas.value?.getContext("2d") || null;

  grid.value = Array.from({ length: rows.value }, () =>
    Array.from({ length: cols.value }, () => false)
  );

  randomize();
};

// randomize grid
const randomize = () => {
  if (randomizeCount.value === 0) {
    update();
    return;
  }
  randomizeCount.value--;
  grid.value?.forEach((row) =>
    row.forEach(
      (cell, index, row) => (row[index] = cell || Math.random() < 0.01)
    )
  );

  setTimeout(() => {
    randomize();
  }, intervalTime.value);
};

const update = () => {
  running.value = true;
  interval.value = window.setInterval(() => {
    next.value = Array.from({ length: rows.value }, () =>
      Array.from({ length: cols.value }, () => false)
    );

    grid.value?.forEach((row, y) =>
      row.forEach((cell, x) => {
        const neighbors = getNeighbors(grid.value!, x, y);
        if (cell) {
          if (neighbors < 2 || neighbors > 3) {
            next.value![y][x] = false;
          } else {
            next.value![y][x] = true;
          }
        } else {
          if (neighbors === 3) {
            next.value![y][x] = true;
          }
        }
      })
    );

    grid.value = next.value;
  }, intervalTime.value);
};

// draw grid
const draw = () => {
  if (!ctx.value) return;
  ctx.value.clearRect(0, 0, width.value, height.value);

  // draw squre
  for (let i = 0; i < rows.value; i++) {
    for (let j = 0; j < cols.value; j++) {
      if (grid.value?.[i][j]) {
        ctx.value.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.value.fillRect(j * cellSize.value, i * cellSize.value, 10, 10);
      }
    }
  }

  requestAnimationFrame(draw);
};

// get count of neighbors
const getNeighbors = (grid: boolean[][], x: number, y: number) => {
  let count = 0;

  for (let i = -1; i < 2; i++) {
    if (i + y < 0 || i + y >= grid.length) continue;

    for (let j = -1; j < 2; j++) {
      if (j + x < 0 || j + x >= grid[0].length) continue;
      if (i === 0 && j === 0) continue;

      if (grid?.[i + y][j + x]) count++;
    }
  }

  // console.log(count);

  return count;
};

// create board when on mounted
onMounted(() => {
  init();
  draw();

  window.addEventListener("resize", init);
});

// clear board when on unmounted
onUnmounted(() => {
  window.removeEventListener("resize", init);
  clearInterval(interval.value);
});
</script>

<template>
  <div ref="wrapper" class="w-full h-full">
    <h1
      v-if="!running"
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-white"
    >
      randomizing...
    </h1>
    <canvas ref="canvas"></canvas>
  </div>
</template>
