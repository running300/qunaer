<template>
  <div class="list" ref="listWrapper">
    <div>
      <div class="hot-cities">
        <div class="hot-cts-title">热门城市</div>
        <ul class="clearfix">
          <li
            v-for="item in computedHotCities"
            :key="item.name"
            :class="item.borderType"
            @click="handleCityClick(item.name)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="alphabet-menu">
        <div class="alphabet-menu-title">字母排序</div>
        <ul class="clearfix">
          <li v-for="item in cities" :key="item.title" @click="handleLetterClick">{{item.title}}</li>
        </ul>
      </div>
      <div class="alphabet-list" v-for="item in computedCities" :key="item.title" :ref="item.title">
        <div class="alphabet-list-title">{{item.title}}</div>
        <ul class="clearfix">
          <li
            v-for="(itemcity, index) in item.city"
            :key="index"
            :class="itemcity.borderType"
            @click="handleCityClick(itemcity.name)"
          >{{itemcity.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    cities: Array,
    hotCities: Array
  },
  computed: {
    computedHotCities() {
      let result = [],
        len = this.hotCities.length,
        item;
      for (let i = 0; i < len; i++) {
        let resObj = {};
        item = this.hotCities[i];
        resObj.name = item.name;
        if (i === 0) {
          resObj.borderType = "";
        } else if (i === 1 || i === 2) {
          resObj.borderType = "border-left";
        } else if (i + (1 % 3) === 1) {
          resObj.borderType = "border-top";
        } else {
          resObj.borderType = "border-topleft";
        }
        result.push(resObj);
      }
      return result;
    },
    computedCities() {
      let result = [],
        len = this.cities.length,
        item;
      for (let i = 0; i < len; i++) {
        let resObj = {};
        item = this.cities[i];
        resObj.title = item.title;
        resObj.city = [];

        for (let j = 0; j < item.lists.length; j++) {
          let cityObj = {};
          cityObj.name = item.lists[j];
          if ((i + 1) % 4 === 0) {
            cityObj.borderType = "border-bottom";
          } else {
            cityObj.borderType = "border-rightbottom";
          }
          resObj.city.push(cityObj);
        }

        result.push(resObj);
      }
      return result;
    }
    // [{title: A, city: [{bordeType: '', list: []}]}]
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.listWrapper, {
      click: true
    });
  },
  methods: {
    handleLetterClick(e) {
      this.letter = e.target.innerText;
    },
    handleCityClick(city) {
      // 1.派发->action
      this.$store.dispatch("changeCityName", city);
      this.changeCityName(city);
      // console.log(city);
      // vue-router-路由跳转页面
      this.$router.push("/");
    },
    ...mapMutations({
      changeCityName: "changeCityName"
    })
  },
  // 跳到某个文字区域(监听)
  watch: {
    letter() {
      // 点击的元素
      let elem = this.$refs[this.letter][0];
      this.scroll.scrollToElement(elem, 300);
    }
  },
  data() {
    return {
      letter: "",
      scroll: ""
    };
  }
};
</script>

<style lang='stylus' scoped>
@import '~@/assets/styles/variables.styl';

div {
  box-sizing: border-box;
}

.clearfix::after {
  display: block;
  content: '';
  clear: both;
}

.list {
  position: absolute;
  top: 0.88rem;
  right: 0;
  left: 0;
  bottom: 0;
  overflow: hidden;
}

.hot-cities {
  width: 100%;
  height: 4.32rem;
}

.hot-cities .hot-cts-title, .alphabet-menu-title, .alphabet-list-title {
  width: 100%;
  height: 0.72rem;
  line-height: 0.72rem;
  font-size: 0.26rem;
  color: $darkTxtColor;
  padding-left: 0.3rem;
  background-color: #f5f5f5;
}

.hot-cities ul li {
  float: left;
  width: 33.33%;
  height: 0.9rem;
  text-align: center;
  line-height: 0.9rem;
}

.alphabet-menu ul {
  height: 3.6rem;
  margin: 0.3rem 0;
}

.alphabet-menu ul li {
  float: left;
  width: 16.67%;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
}

.alphabet-list ul li {
  float: left;
  width: 25%;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
}
</style>