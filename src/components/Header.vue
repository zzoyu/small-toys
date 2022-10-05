<!-- write vue 3 component for header menu UI -->

<template>
  <div class="header w-full flex flex-row items-center absolute z-10">
    <div class="header__menu flex flex-grow flex-row justify-evenly">
      <router-link to="/">Main</router-link>
      <router-link to="/gol">Conway's Game of life</router-link>
      <router-link to="/conffeti">Conffeti</router-link>
      <!-- <div class="header__menu__item"></div> -->
    </div>
  </div>
</template>

<style scoped></style>
