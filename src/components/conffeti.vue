<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { Particle } from "../classes/particle";

const wrapper = ref<HTMLDivElement | null>(null);
const canvas = ref<HTMLCanvasElement | null>(null);
const ctx = ref<CanvasRenderingContext2D | null>(null);
const width = ref(0);
const height = ref(0);

const particles = ref<Particle[]>([]);
const particleCount = ref(10);

// init canvas
const init = () => {
  width.value = wrapper.value?.clientWidth || 0;
  height.value = wrapper.value?.clientHeight || 0;
  canvas.value!.width = width.value;
  canvas.value!.height = height.value;
  ctx.value = canvas.value?.getContext("2d") || null;

  for (let i = 0; i < particleCount.value; i++) {
    particles.value.push(new Particle(width.value / 2, height.value / 2, 20));
  }
};

// update canvas
const update = () => {
  ctx.value?.clearRect(0, 0, width.value, height.value);
  particles.value.forEach((particle) => {
    particle.update();
    particle.draw(ctx.value!);
  });
  requestAnimationFrame(update);
};

onMounted(() => {
  console.log("mounted");
  init();
  update();
});
</script>

<template>
  <!-- <h1></h1> -->
  <div class="conffeti" ref="wrapper">
    <canvas class="conffeti__canvas" ref="canvas"></canvas>
  </div>
</template>

<style scoped>
.conffeti {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}
</style>
