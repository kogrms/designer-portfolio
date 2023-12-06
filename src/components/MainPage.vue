<template>
  <div>
    <div class="mobile-placeholder">
      <div class="placeholder-icon"></div>
      <div class="placeholder-text">
        Пожалуйста,<br />откройте десктопную версию<br /><br />
        Спасибо!
      </div>
    </div>
    <div class="main">
      <section class="section-cover">
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
        <div class="cover-container"></div>
        <img
          class="section-title-cover"
          src="../assets/images/daria_fedorenko.svg"
          alt="Daria Fedorenko"
        />
        <div class="spinner">
          <img
            class="spinner-arrow"
            src="../assets/images/arrow_cover.svg"
            alt="Arrow"
          />
          <a class="" href="https://t.me/ya_monstr_a_sho" target="_blank">
            <img
              class="spinner-text"
              src="../assets/images/spinner_text.svg"
              alt="Arrow"
            />
          </a>
        </div>
      </section>
      <section class="section-works" id="works">
        <img
          class="section-title-works"
          src="../assets/images/works.svg"
          alt="Works"
        />
        <div class="tabs">
          <button
            class="tab"
            :class="{ active: selectedTab === 'communication' }"
            @click="selectTab('communication')"
          >
            коммуникационный дизайн
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
            :class="{ active: selectedTab === 'product' }"
            @click="selectTab('product')"
          >
            Продуктовые кейсы
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
      <section class="section-experience" id="experience">
        <img
          class="section-title-experience"
          src="../assets/images/experience.svg"
          alt="Experience"
        />
        <a
          class="job"
          @mouseover="hoveredJobIndex = 1"
          @mouseleave="hoveredJobIndex = null"
          href="https://multibonus.ru"
          target="_blank"
        >
          <div style="display: flex; justify-content: flex-start">
            <div class="job-title" :class="{ hovered: hoveredJobIndex === 1 }">
              VTB Multibonus
            </div>
            <div
              class="job-position"
              :class="{ hovered: hoveredJobIndex === 1 }"
            >
              Дизайнер generalist
            </div>
          </div>
          <div class="job-time">2021-2023</div>
        </a>
        <a
          class="job"
          @mouseover="hoveredJobIndex = 2"
          @mouseleave="hoveredJobIndex = null"
          href="https://15kop.ru"
          target="_blank"
        >
          <div style="display: flex; justify-content: flex-start">
            <div class="job-title" :class="{ hovered: hoveredJobIndex === 2 }">
              Музей советских игровых автоматов
            </div>
            <div
              class="job-position"
              :class="{ hovered: hoveredJobIndex === 2 }"
            >
              графический дизайнер
            </div>
          </div>
          <div class="job-time">2019-2021</div>
        </a>
        <div class="no-link-job">
          <div style="display: flex; justify-content: flex-start">
            <div class="job-title">фриланс</div>
            <div class="job-position">графический дизайнер</div>
          </div>
          <div class="job-time">2016-2018</div>
        </div>
      </section>
      <section class="section-contacts" id="contacts">
        <img
          class="section-title-contacts"
          src="../assets/images/contacts.svg"
          alt="Contacts"
        />
        <div class="contacts">
          <div
            v-for="(contact, i) in contactCards"
            :key="i"
            class="contact"
            @mouseover="hoveredContactIndex = i"
            @mouseleave="(hoveredContactIndex = null), (isEmailCopied = false)"
            @click="handleContactClick(i)"
            :style="{
              'background-image': `url(${
                hoveredContactIndex === i
                  ? require(`../assets/images/contacts/${contact.hover}`)
                  : require(`../assets/images/contacts/${contact.image}`)
              })`,
            }"
          >
            <div v-if="contact.heading" class="inner-contact">
              <div class="contact-heading">
                {{ contact.heading }}
                <span
                  v-if="contact.email && isEmailCopied"
                  class="email-copied"
                >
                  copied
                </span>
              </div>
              <div
                v-if="contact.email && hoveredContactIndex === i"
                class="email-paste"
                :class="{ copied: isEmailCopied }"
              >
                {{ contact.email }}
              </div>
              <img
                :src="require('../assets/images/contact_arrow.svg')"
                class="contact-icon"
              />
              <img
                v-if="contact.email && hoveredContactIndex === i"
                :src="require('../assets/images/contact_copy.svg')"
                class="contact-icon"
              />
              <img
                v-if="contact.email && isEmailCopied"
                :src="require('../assets/images/contact_arrow_copied.svg')"
                class="contact-icon"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import { debounce } from "lodash";
import { tabsCards } from "./../config/config";
import router from "./../router.js";
import Clipboard from "clipboard";

export default {
  name: "MainPage",
  data() {
    return {
      selectedTab: "communication",
      tabsCards: tabsCards,
      hoveredCard: null,
      hoveredContactIndex: null,
      hoveredJobIndex: null,
      isEmailCopied: false,
      contactCards: [
        {
          heading: "Telegram",
          image: "1.png",
          hover: "1_hover.gif",
          link: "https://t.me/ya_monstr_a_sho",
        },
        {
          heading: "E-mail",
          email: "darfeddar@gmail.com",
          image: "1.png",
          hover: "2_hover.gif",
        },
        {
          heading: "Linkedin",
          image: "1.png",
          hover: "3_hover.gif",
          link: "https://www.linkedin.com/in/daria-fedorenko-designer/",
        },
        {
          heading: "Резюме",
          image: "1.png",
          hover: "4_hover.gif",
          link: "https://ya-monstr-a-sho.notion.site/Fedorenko-Daria-33e5cc8edc2949fdab89ef533b9343d6?pvs=4",
        },
        {
          image: "5.png",
          hover: "5_hover.png",
        },
      ],
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    jumpToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView();
      }
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
    navigateToCard(card) {
      if (this.tabsCards[this.selectedTab][card].link && card === "opening") {
        window.open("https://www.youtube.com/watch?v=MqFTw3-Mu00", "_blank");
      } else if (
        this.tabsCards[this.selectedTab][card].link &&
        card === "burger"
      ) {
        window.open(
          "https://multibonus.ru/landings/bk?utm_referrer=https%3A%2F%2Fwww.google.com%2F",
          "_blank"
        );
      } else if (
        this.tabsCards[this.selectedTab][card].link &&
        card === "redesign"
      ) {
        window.open(
          "https://ya-monstr-a-sho.notion.site/5ea603c0b0a744d8bb3cdeac3db287b0",
          "_blank"
        );
      } else if (
        this.tabsCards[this.selectedTab][card].link &&
        card === "praktikum"
      ) {
        window.open(
          "https://ya-monstr-a-sho.notion.site/33005043efc84f6095d56e9eec02081a",
          "_blank"
        );
      } else if (
        this.tabsCards[this.selectedTab][card].link &&
        card === "onboarding"
      ) {
        window.open(
          "https://ya-monstr-a-sho.notion.site/4842dabbebb6423f8bba879dd2e096d7",
          "_blank"
        );
      } else {
        router.push({
          name: "card",
          params: { tab: this.selectedTab, card: card },
        });
      }
    },
    handleContactClick(i) {
      const contact = this.contactCards[i];
      if (contact.link) {
        window.open(contact.link, "_blank");
        console.log(contact.link);
      } else if (contact.email) {
        console.log(contact.email);

        // Copy email to clipboard
        const clipboard = new Clipboard(".contact", {
          text: () => contact.email,
        });
        // Show success message on successful copy
        clipboard.on("success", (e) => {
          this.isEmailCopied = true;
          console.log("Email copied to clipboard");
          e.clearSelection();
        });
        // Destroy the clipboard instance after copying
        clipboard.on("error", () => {
          console.error("Failed to copy email to clipboard");
        });
        // Destroy the clipboard instance after a short delay
        setTimeout(() => {
          clipboard.destroy();
          this.isEmailCopied = false;
        }, 2000); // You can adjust the delay as needed
      }
    },
  },
  mounted() {
    // console.log(this.tabsCards);
    if (this.$route.params.section) {
      this.jumpToSection(this.$route.params.section);
      console.log(this.$route.params.section);
    }
    if (this.$route.params.tab) {
      this.selectTab(this.$route.params.tab);
      console.log(this.$route.params.tab);
    }
  },
};
</script>
