<template>
  <div class="nav-container">
    <div class="right-region">
      <img v-if="isZhLang" :class="$isMobile ? 'logo-mobile' : 'logo'" src="https://web.sdk.qcloud.com/trtc/webrtc/assets/trtcio-headlogo.png" />
      <img v-if="isEnLang" :class="$isMobile ? 'logo-mobile' : 'logo'" src="https://web.sdk.qcloud.com/trtc/webrtc/assets/trtcio-headlogo.png" />
    </div>
    <div class="left-region">
      <span class="language" @click="toggleLanguage">
        <svg-icon icon-name="language"></svg-icon>
      </span>
      <span class="github" @click="goToGithub">
        <svg-icon icon-name="github" className="github-svg"></svg-icon>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navContainer',
  data() {
    return  {
    };
  },
  computed: {
    isZhLang() {
      return this.$i18n.locale === 'zh-cn';
    },
    isEnLang() {
      return this.$i18n.locale === 'en';
    },
  },
  methods: {
    toggleLanguage() {
      switch (this.$i18n.locale) {
        case 'en':
          this.$i18n.locale = 'zh-cn';
          localStorage.setItem('trtc-v5-quick-demo-vue2-js', 'zh-cn');
          break;
        case 'zh-cn':
          this.$i18n.locale = 'en';
          localStorage.setItem('trtc-v5-quick-demo-vue2-js', 'en');
          break;
      }
      document.title = this.$i18n.t('title');
    },
    goToGithub() {
      this.$aegis.reportEvent({
        name: 'jumpGithub',
        ext1: 'jumpGithub',
        ext2: this.$DEMOKEY,
        ext3: 0,
      });
      window.open('https://github.com/LiteAVSDK/TRTC_Web', '_blank');
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-container{
  width: 100%;
  height: 60px;
  padding: 10px 10px;
  background-color: #00182F;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  align-items: center;
  .right-region {
    height: 100%;
    display: flex;
    align-items: center;
    .logo {
      height: 100%;
    }
    .logo-mobile {
      height: 30px;
    }
  }
  .left-region {
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    .github {
      margin-left: 20px;
      cursor: pointer;
      .github-svg {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>
