<template>
  <div class="gallery-container" @click="handleGalleryClick">
    <div class="img-wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in galleryImages" :key="index">
          <img class="gallery-img" :src="item" />
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonGallery",
  props: {
    galleryImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        loop: true,
        observer: true,
        observeParents: true
      }
    };
  },
  methods: {
    handleGalleryClick() {
      this.$emit("closeGallery"); //发送自定义事件做一个监听
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
}

.gallery-container >>> .swiper-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gallery-container >>> .swiper-slide {
  flex-direction: column;
  justify-content: center;
}

.gallery-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(224, 243, 173);
  z-index: 60;
}

.gallery-container .img-wrapper {
  /* background-color: #fff; */
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}

.gallery-container .img-wrapper .gallery-img {
  width: 100%;
  height: 5.6rem;
}

.gallery-container .img-wrapper .swiper-pagination {
  bottom: 0.48rem;
  justify-content: center;
  color: rgb(9, 138, 177);
}
</style>