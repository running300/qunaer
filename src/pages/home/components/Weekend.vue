<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <router-link
        to="/detail"
        tag="li"
        class="list-item"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item-img">
          <img :src="item.imgUrl" alt />
        </div>
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWenkend",
  props: {
    weekendList: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixin.styl';

div {
  box-sizing: border-box;
}

.weekend {
  background-color: #fff;
  width: 100%;
  background: #fff;
}

.weekend .weekend-title {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  padding-left: 0.1rem;
  background-color: #eee;
  font-size: 0.28rem;
}

.weekend .item-img {
  width: 100%;
  height: 2.6rem;
  overflow: hidden;
}

.weekend .item-img img {
  width: 100%;
}

.weekend .item-title {
  width: 100%;
  height: 0.5rem;
  color: #212121;
  font-size: 0.28rem;
  line-height: 0.5rem;
  padding-left: 0.2rem;
}

.weekend .item-desc {
  width: 100%;
  height: 0.56rem;
  line-height: 0.5rem;
  color: #616161;
  font-size: 0.24rem;
  padding-left: 0.2rem;
  padding-right: 2rem;
  ellipsis();
}
</style>