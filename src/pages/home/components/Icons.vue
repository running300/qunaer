<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon-box" v-for="item in page" :key="item.id">
          <div class="icon-img-box">
            <img class="icon-img" :src="item.iconImg" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true
      }
    };
  },
  computed: {
    pages() {
      var pages = [];
      this.iconList.forEach((item, idx) => {
        var page = Math.floor(idx / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/variables.styl';
@import '~@/assets/styles/mixin.styl';

.icons-wrapper {
  background-color: #fff;
  margin-top: 0.2rem 0;
  width: 100%;
  height: 0;
  padding-bottom: 50%;
}

.icons-wrapper .icon-box {
  position: relative;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
}

.icons-wrapper .icon-box .icon-img-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
}

.icons-wrapper .icon-box .icon-img-box img {
  display: block;
  margin: 0 auto;
  height: 100%;
}

.icons-wrapper .icon-box .icon-desc {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkTxtColor;
  ellipsis();
}
</style>