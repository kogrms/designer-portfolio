<template>
  <div class="app">
    <img alt="Vue logo" src="./assets/images/logo.png" />
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
};
</script>

<!-- <style>
</style> -->
