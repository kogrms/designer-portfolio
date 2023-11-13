<template>
  <div class="main">
    <!-- <section class="banner">{{ msg }}</section> -->
    <section class="section">
      <nav class="navbar">
        <button class="nav-button" @click="scrollToSection('works')">
          Works
        </button>
        <button class="nav-button" @click="scrollToSection('experience')">
          Experience
        </button>
        <button class="nav-button" @click="scrollToSection('contacts')">
          Contacts
        </button>
      </nav>
      <img
        class="section-title"
        src="../assets/images/daria_fedorenko.svg"
        alt="Daria Fedorenko"
      />
      <img
        class="star-big"
        src="../assets/images/star_big_pink.svg"
        alt="Daria Fedorenko"
      />
      <img
        class="star-small"
        src="../assets/images/star_small_gray.svg"
        alt="Daria Fedorenko"
      />
    </section>
    <section class="section" id="works">
      <img class="section-title" src="../assets/images/works.svg" alt="Works" />
      <div class="tabs">
        <button
          class="tab"
          :class="{ active: selectedTab === 'product' }"
          @click="selectTab('product')"
        >
          Продуктовые кейсы
        </button>
        <button
          class="tab"
          :class="{ active: selectedTab === 'web' }"
          @click="selectTab('web')"
        >
          ВЕБ дизайн
        </button>
        <button
          class="tab"
          :class="{ active: selectedTab === 'communication' }"
          @click="selectTab('communication')"
        >
          коммуникационный дизайн
        </button>
        <button
          class="tab"
          :class="{ active: selectedTab === 'graphic' }"
          @click="selectTab('graphic')"
        >
          графический дизайн
        </button>
        <button
          class="tab"
          :class="{ active: selectedTab === 'motion' }"
          @click="selectTab('motion')"
        >
          motion
        </button>
        <button
          class="tab"
          :class="{ active: selectedTab === 'presentation' }"
          @click="selectTab('presentation')"
        >
          дизайн презентаций
        </button>
      </div>
      <div class="cards">
        <!-- <router-link
        :to="{ name: 'works', params: { card: card } }" -->
        <div
          class="card"
          v-for="(cardData, card) in tabsCards[selectedTab]"
          :key="card"
          @mouseover="hoveredCard = card"
          @mouseout="hoveredCard = null"
          @click="navigateToCard(card)"
        >
          <div class="card-year">{{ cardData.year }}</div>
          <div class="card-image-wrap">
            <img
              class="card-image"
              :class="{ hovered: hoveredCard === card }"
              :src="require(`../assets/images/cards/${cardData.image}.png`)"
            />
          </div>
          <div class="card-title-row">
            <p class="card-title">{{ cardData.title }}</p>
            <div
              class="card-arrow"
              :class="{ hovered: hoveredCard === card }"
            ></div>
          </div>
        </div>
        <!-- </router-link> -->
      </div>
    </section>
    <section class="section" id="experience">
      <img
        class="section-title"
        src="../assets/images/experience.svg"
        alt="Experience"
      />
    </section>
    <section class="section" id="contacts">
      <img
        class="section-title"
        src="../assets/images/contacts.svg"
        alt="Contacts"
      />
    </section>
    <!-- <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul> -->
  </div>
</template>

<script>
// import { debounce } from "lodash";
import { tabsCards } from "./../config/config";
import router from "./../router.js";

export default {
  name: "MainPage",
  data() {
    return {
      selectedTab: "product",
      tabsCards: tabsCards,
      hoveredCard: null,
    };
  },
  // props: {
  //   msg: String,
  // },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
    navigateToCard(card) {
      router.push({
        name: "card",
        params: { tab: this.selectedTab, card: card },
      });
    },
  },
  mounted() {
    // console.log(this.tabsCards);
    if (this.$route.params.section) {
      this.scrollToSection(this.$route.params.section);
      console.log(this.$route.params.section);
    }
    if (this.$route.params.tab) {
      this.selectTab(this.$route.params.tab);
      console.log(this.$route.params.tab);
    }
  },
};
</script>
