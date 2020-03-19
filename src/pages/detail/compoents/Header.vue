<template>
  <div>
    <router-link to="/" tag="div" class="header-back" v-show="!showHeaderBack">
      <span class="iconfont icon-back">&#xe624;</span>
    </router-link>
    <div class="header" v-show="showHeaderBack" :style="opacityStyle">
      <router-link to="/" class="header-left">
        <span class="iconfont header-left-back">&#xe624;</span>
      </router-link>澳门塔蹦极(笨猪跳)
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showHeaderBack: false,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    handleScroll(e) {
      let top = document.documentElement.scrollTop;
      if (top > 50) {
        var opacity = top / 100;
        if (opacity > 1) {
          opacity = 1;
        }
        this.opacityStyle = {
          opacity: opacity
        };
        this.showHeaderBack = true;
      } else {
        this.showHeaderBack = false;
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style scoped>
.header-back {
  position: absolute;
  top: 0.12rem;
  left: 0.12rem;
  width: 0.8rem;
  height: 0.8rem;
  text-align: center;
  line-height: 0.8rem;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
}

.header-back .icon-back {
  color: #fff;
  font-size: 0.4rem;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  font-size: 0.32rem;
  color: #fff;
  z-index: 4;
  background-color: #00bcd4;
}

.header .header-left {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  width: 0.8rem;
  height: 100%;
  color: #fff;
}
</style>