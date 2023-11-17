<template>
  <div class="work">
    <div class="sidebar">
      <button class="sidebar-button" @click="returnToMain()">&lt; назад</button>
      <div class="sidebar-heading">
        {{ pageData.title }}
      </div>
      <div class="sidebar-year">
        {{ pageData.year }}
      </div>
      <nav class="navbar navbar-sidebar">
        <button
          class="nav-button sidebar-button"
          @click="toMainAndScroll('works')"
        >
          Works
        </button>
        <button
          class="nav-button sidebar-button"
          @click="toMainAndScroll('experience')"
        >
          Experience
        </button>
        <button
          class="nav-button sidebar-button"
          @click="toMainAndScroll('contacts')"
        >
          Contacts
        </button>
      </nav>
    </div>
    <div class="content">
      <div
        class=""
        v-for="(work, index) in pageData.workData"
        :key="index"
        @click="() => {}"
      >
        <div
          v-if="work.type === 'video'"
          class="video-container"
          :style="{ width: `calc(${work.width} * 100vw)` }"
        >
          <video autoplay loop muted playsinline>
            <source
              :src="`../../assets/works/graphic/tiger/${work.content}`"
              type="video/mp4"
            />
          </video>
        </div>
        <div
          v-else-if="work.type === 'image'"
          class=""
          :style="{ width: `calc(${work.width} * 100vw)` }"
        >
          <!-- <img
            class="card-image"
            :class="{ hovered: hoveredCard === card }"
            :src="require(`${work.content}`)"
          /> -->
          <img :src="`./../assets/works/graphic/tiger/${work.content}`" />
        </div>
        <!-- <div
          class=""
          style="
             {
              width: calc();
            }
          "
        >
          {{ work[index].content }}
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { debounce } from "lodash";
import { tabsCards } from "./../config/config";
import router from "./../router.js";

export default {
  name: "WorkPage",
  data() {
    return {
      pageName: this.$route.params.card,
      tabName: this.$route.params.tab,
      tabsCards: tabsCards,
    };
  },
  computed: {
    pageData() {
      return tabsCards[this.tabName][this.pageName];
    },
  },
  methods: {
    returnToMain() {
      router.push({
        name: "home",
        params: { tab: this.tabName },
      });
    },
    toMainAndScroll(section) {
      router.push({
        name: "home",
        params: { tab: this.tabName, section: section },
      });
    },
  },
  mounted() {
    // console.log(this.tabsCards);
  },
};
</script>
