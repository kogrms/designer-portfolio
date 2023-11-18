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
      <div class="inner-content">
        <div
          v-for="(work, index) in pageData.workData"
          :key="index"
          @click="() => {}"
          :class="{
            'video-container': work.type === 'video',
            'br-8px': work.type === 'video' && work?.style === 'br-8px',
            'image-container': work.type === 'image',
            'text-container': work.type === 'text',
          }"
          :style="{ width: `calc(${work.width} * 100%)` }"
        >
          <video v-if="work.type === 'video'" autoplay loop muted playsinline>
            <source
              :src="
                require(`../assets/works/${tabName}/${pageName}/${work.content}.mp4`)
              "
              type="video/mp4"
            />
          </video>
          <img
            v-else-if="work.type === 'image'"
            :src="
              require(`../assets/works/${tabName}/${pageName}/${work.content}.png`)
            "
            class="work-image"
          />
          <p
            v-else-if="work.type === 'text'"
            class="work-text"
            :class="{
              'text-heading': work?.style === 'heading',
              'text-heading mt-40px': work?.style === 'heading-mt40',
              'mt-24px': work?.style === 'below-heading',
              'text-caption': work?.style === 'caption',
              'text-caption last': work?.style === 'caption-last',
            }"
            v-html="work.content"
          ></p>
          <div v-else-if="work.type === 'container'" class="nest-container">
            <div
              v-for="(block, i) in work.content"
              :key="i"
              :class="{
                'video-container': block.type === 'video',
                'image-container': block.type === 'image',
              }"
              :style="{ width: `calc(${block.width} * 100%)` }"
            >
              <video
                v-if="block.type === 'video'"
                autoplay
                loop
                muted
                playsinline
              >
                <source
                  :src="
                    require(`../assets/works/${tabName}/${pageName}/${block.content}.mp4`)
                  "
                  type="video/mp4"
                />
              </video>
              <img
                v-else-if="block.type === 'image'"
                :src="
                  require(`../assets/works/${tabName}/${pageName}/${block.content}.png`)
                "
                class="work-image"
              />
            </div>
          </div>
        </div>
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
        params: { tab: this.tabName, section: "works" },
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
    window.scrollTo(0, 0);
  },
};
</script>
