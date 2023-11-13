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
      <div class="">1234</div>
      <div class="">1234</div>
      <div class="">1234</div>
      <div class="">1234</div>
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
