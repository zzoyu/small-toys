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
    particles.value.push(new Particle(width.value / 2, height.value / 2));
  }
};

// update canvas
const update = () => {
  ctx.value?.clearRect(0, 0, width.value, height.value);
  particles.value.forEach((particle) => {
    if (!particle.update(ctx.value!)) {
      particles.value.splice(particles.value.indexOf(particle), 1);
    }
    particle.draw(ctx.value!);
  });
  requestAnimationFrame(update);
};

onMounted(() => {
  console.log("mounted");
  init();
  update();
  popRandom();
});

const pop = (event: MouseEvent) => {
  for (let i = 0; i < particleCount.value; i++) {
    particles.value.push(new Particle(event.clientX, event.clientY));
  }
};

const popRandom = () => {
  console.log("random pop");
  const x = Math.random() * (width.value * 0.8) + width.value * 0.1;
  const y = Math.random() * (height.value * 0.8) + height.value * 0.1;
  for (let i = 0; i < particleCount.value; i++) {
    particles.value.push(new Particle(x, y));
  }

  setTimeout(() => popRandom(), Math.random() * 3000);
};

const donate = () => {
  alert("토스 링크로 이동합니다. 관심 가져주셔서 대단히 감사드립니다.");
};
</script>

<template>
  <!-- <h1></h1> -->
  <div class="conffeti" ref="wrapper">
    <div
      class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col justify-center items-center"
    >
      <h1 class="text-2xl">그저 하늘에서 돈이 쏟아지는 페이지입니다.</h1>
      <h2 class="mb-8">화면을 클릭해보세요.</h2>

      <hr class="w-full p-4" />
    </div>

    <h2
      class="absolute z-50 left-1/2 top-2/3 -translate-x-1/2 -translate-y-1/2 text-white text-lg donate"
    >
      <a
        href="https://toss.me/zzoyu/1500"
        target="_blank"
        @click.stop="donate()"
        >유진이에게 기부하기</a
      >
    </h2>
    <canvas class="absolute w-full h-full" ref="canvas" @click="pop"></canvas>
  </div>
</template>

<style scoped>
.conffeti {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
}

.donate {
  -webkit-animation: bounce 1s infinite;
  animation: bounce 1s infinite;
  background: rgb(255 255 255 / 0.7);
  border-radius: 0.5rem;
  padding: 0.2rem;
}
.donate > a {
  font-weight: 700;

  background: linear-gradient(
    90deg,
    #ff0000 0%,
    #ff7f00 14%,
    #ffff00 28%,
    #00ff00 42%,
    #0000ff 56%,
    #4b0082 70%,
    #9400d3 84%,
    #ff0000 100%
  );

  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* outline: auto; */
}

@keyframes bounce {
  0% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, -10px);
  }
  100% {
    transform: translate(-50%, 0);
  }
}
</style>
