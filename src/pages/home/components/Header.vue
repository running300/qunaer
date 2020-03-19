<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-middle">
      <span class="iconfont search-icon">&#xe632;</span>
      <div class="kw">输入城市/景点/游玩主题</div>
      <input class="header-input" type="text" />
    </div>
    <router-link to="/city" tag="div">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont">&#xe627;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: mapState([
    // this.$store.state.city
    "city"
  ])
};
</script>

<style lang="stylus" scoped>
// 引入公共的样式 ~@指src路径
@import '~@/assets/styles/variables.styl';

.header {
  display: flex;
  width: 100%;
  height: 0.88rem;
  background-color: $bgColor;
  color: #fff;
}

.header .header-left {
  width: 0.8rem;
  height: 100%;
  text-align: center;
  line-height: 0.88rem;
}

.header .header-middle {
  position: relative;
  flex: 1;
  // 中间的自动适应宽度
  margin: 0.14rem 0;
}

.header .header-middle .search-icon {
  position: absolute;
  top: 0.13rem;
  left: 0.2rem;
  color: #e4e7ea;
}

.header .header-middle .kw {
  position: absolute;
  top: 0.16rem;
  left: 0.65rem;
  color: #e4e7ea;
}

.header .header-middle .header-input {
  width: 100%;
  height: 100%;
  border-radius: 0.06rem;
}

.header .header-right {
  min-width: 1.12rem;
  padding: 0 0.1rem;
  height: 100%;
  text-align: center;
  line-height: 0.88rem;
}
</style>