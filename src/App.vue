<template>
  <div class="app" @scroll="handleScroll">
    <!-- <img alt="Vue logo" src="./assets/images/logo.png" /> -->
    <MainPage msg="Выпускной проект из Яндекс Практикума" />
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
  methods: {
    handleScroll() {
      console.log("scroll");
    },
  },
};
</script>

<style></style>
