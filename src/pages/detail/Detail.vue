<template>
  <div class="detail">
    <detail-banner
      :sightName="sightName"
      :bannerImage="bannerImage"
      :galleryImages="galleryImages"
    />
    <detail-header />
    <detail-list :categoryList="categoryList" />
  </div>
</template>

<script>
import axios from "axios";
import Banner from "./compoents/Banner";
import Header from "./compoents/Header";
import DetailList from "./compoents/List";
export default {
  name: "Detail",
  components: {
    "detail-banner": Banner,
    "detail-header": Header,
    "detail-list": DetailList
  },
  data() {
    return {
      sightName: "",
      bannerImage: "",
      galleryImages: [],
      categoryList: []
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get("/api/detail", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(this.getDetailInfoSuccess);
    },
    getDetailInfoSuccess(res) {
      let errno = res.data.errno,
        data = res.data.data.data;
      if (errno === 0 && data) {
        this.sightName = data.sightName;
        this.bannerImage = data.bannerImage;
        this.galleryImages = data.galleryImages;
        this.categoryList = data.categoryList;
      }
    }
  },
  mounted() {
    this.getDetailInfo();
  }
};
</script>

<style lang='stylus' scoped>
.box {
  height: 120rem;
}
</style>