<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

// Importing components
import Header from "./components/Header.vue";
</script>

<template>
  <div
    id="app"
    class="w-full h-screen bg-slate-800 text-indigo-200 flex flex-col"
  >
    <Header class="grow-0" />
    <div class="grow grid h-fit">
      <router-view />
    </div>
  </div>
</template>

<style></style>
