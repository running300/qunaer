<template>
  <div>
    <home-header />
    <home-swiper :swiperList="swiperList" />
    <home-icons :iconList="iconList" />
    <little-info />
    <home-recommend :recommendList="recommendList" />
    <home-wenkend :weekendList="weekendList" />
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import LittleInfo from "./components/LittleInfo";
import HomeRecommend from "./components/Recommend";
import HomeWenkend from "./components/Weekend";
import axios from "axios";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    LittleInfo,
    HomeRecommend,
    HomeWenkend
  },
  computed: {
    ...mapState({
      curCity: "city"
    })
  },
  data() {
    return {
      lastCity: "", //上一个城市
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: []
    };
  },
  methods: {
    getHomeIfo() {
      axios
        .get("/api/singer?city=" + this.curCity)
        // .get("/api/singer")
        .then(this.getHomeIfoSuccess)
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    getHomeIfoSuccess: function(res) {
      let data = res.data.data.data;
      if (res.data.errno === 0 && data) {
        this.iconList = data.iconList;
        this.swiperList = data.swiperList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted() {
    this.lastCity = this.curCity;
    this.getHomeIfo();
  },
  activated() {
    if (this.lastCity !== this.curCity) {
      this.lastCity = this.curCity;
      this.getHomeIfo();
    }
  }
  // deactivated() {}
};
</script>

<style>
</style>