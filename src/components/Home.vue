<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="flex h-full w-full flex-col justify-center">
    <h1 class="text-2xl">
      Vue 3 토이 프로젝트들 (<a
        href="https://github.com/zzoyu/small-toys"
        target="_blank"
        >Github</a
      >)
    </h1>
    <p>
      콘웨이의 생명 게임, 폭죽, 미니 게임 등을 만들어보며 연습하는 공간입니다.
    </p>
    <hr class="mt-8 p-4" />
    <ul>
      <li>
        <router-link to="/GOL">콘웨이의 생명 게임</router-link>
        <!-- detailed description -->
        <li>
          콘웨이의 생명 게임은 1970년대에 존 콘웨이가 고안한 것으로, 2차원 격자 위에서
          각각의 생명이 존재하고, 이 생명은 규칙에 따라 살아남거나 죽음을 맞이합니다.
        </li>

      </li>
      <li>
        <router-link to="/conffeti">폭죽</router-link>
        <li>
          캔버스 기반 폭죽 이펙트를 구현하였습니다.
        </li>
      </li>
    </ul>
  </div>
</template>

<style scoped>
/* pretty list */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 0.5rem 0;
}
</style>
