<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImage" />
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont icon">&#xe64f;</span>
          <span>{{this.galleryImages.length}}</span>
        </div>
        <div class="banner-title">{{sightName}}</div>
      </div>
    </div>
    <common-fide>
      <common-gallery
        :galleryImages="galleryImages"
        v-show="isGalleryShow"
        @closeGallery="handleGalleryClose"
      />
    </common-fide>
  </div>
</template>

<script>
import CommonGallery from "@/common/gallery/Gallery.vue";
import CommonFide from "@/common/fide/Fide.vue";
export default {
  name: "Banner",
  props: {
    sightName: String,
    bannerImage: String,
    galleryImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      isGalleryShow: false
    };
  },
  methods: {
    // 切换显示画廊
    handleBannerClick() {
      this.isGalleryShow = true;
    },
    handleGalleryClose() {
      this.isGalleryShow = false;
    }
  },
  components: {
    CommonGallery,
    CommonFide
  }
};
</script>

<style>
.banner {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  background-color: #eee;
}

.banner .banner-img {
  width: 100%;
}

.banner .banner-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  line-height: 0.6rem;
  padding: 0.2rem;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
}

.banner .banner-info .banner-number {
  width: 1.1rem;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  border-radius: 0.2rem;
  font-size: 0.24rem;
  background-color: rgba(0, 0, 0, 0.5);
}
.banner .banner-info .banner-number .icon {
  margin-right: 0.1rem;
}
.banner .banner-info .banner-title {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.36rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
}
</style>