<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div class="place-self-center">
    <div class="business-card text-black">
      <div class="business-card__header">
        <div class="business-card__header__logo">
          <img src="../assets/vue.svg" alt="logo" />
        </div>
        <div class="business-card__header__title">
          <h1>Vue 3</h1>
          <h2>Toy projects</h2>
        </div>
        <div class="business-card__header__author">
          <h3>Author</h3>
          <h4>Yujin</h4>
        </div>
      </div>
    </div>
  </div>
  <article>
    <h1>Vue 3 토이 프로젝트들</h1>
    <p>Vue 3 기반 자잘한 프로젝트들을 만들어보는 공간입니다.</p>
    <p>
      콘웨이의 생명 게임, 콘페티, 미니 게임 등을 만들어보며 Vue 3의 기능을
      익히고 있습니다.
    </p>
    <hr />
    <ul>
      <li>콘웨이의 생명 게임</li>

      <li>콘페티</li>
    </ul>
  </article>
</template>

<style scoped>
.business-card {
  width: 400px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
}

.business-card__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.business-card__header__logo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.business-card__header__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.business-card__body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.business-card__body__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
