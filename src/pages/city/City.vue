<template>
  <div class="city-wrapper">
    <city-header />
    <city-list :hotCities="hotCities" :cities="cities" />
  </div>
</template>

<script>
import aixos from "axios";
import CityHeader from "./components/Header";
import CityList from "./components/List";
export default {
  name: "city",
  components: {
    CityHeader,
    CityList
  },
  data() {
    return {
      cities: [],
      hotCities: []
    };
  },
  mounted() {
    this.getCityIfo();
  },
  methods: {
    getCityIfo() {
      aixos.get("/api/city").then(this.getInfoSuccess);
    },
    getInfoSuccess(res) {
      this.hotCities = res.data.data.hotcities;
      this.cities = res.data.data.cities;
    }
  }
};
</script>

<style scoped>
.city-wrapper {
  background-color: #fff;
}
</style>