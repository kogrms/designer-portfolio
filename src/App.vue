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

<style>
body {
  margin: 0;
  padding: 0;
}
section {
  margin: 0;
  padding: 0;
}
h1 {
  margin: 0;
  padding: 0;
}
h2 {
  margin: 0;
  padding: 0;
}
h3 {
  margin: 0;
  padding: 0;
}
div {
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 0;
  padding: 0;
}
a {
  margin: 0;
  padding: 0;
  color: #42b983;
}
nav {
  margin: 0;
  padding: 0;
}
.app {
  margin: 0;
  padding: 0;
  font-family: "Roboto Flex", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y: scroll;
}
</style>
