<template>
  <div>
    <div class="list-item" v-for="(item,index) in categoryList" :key="index">
      <div class="list-item-title">
        <span class="list-item-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :categoryList="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailList",
  props: {
    categoryList: Array
  }
};
</script>

<style scoped>
.list-item-title {
  position: relative;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
  padding: 0 0.2rem;
  text-indent: 0.4rem;
  border-bottom: 1px solid #d3d2d2;
}

.list-item-title .list-item-icon {
  display: inline-block;
  position: absolute;
  width: 0.36rem;
  height: 0.36rem;
  top: 0.26rem;
  left: 0.2rem;
  background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -0.45rem no-repeat;
  margin-right: 0.1rem;
  background-size: 0.4rem 3rem;
}

.list-item .item-children {
  padding: 0 0.2rem;
}
</style>