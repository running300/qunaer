<template>
  <ul class="little-info">
    <li class="info info1">
      <div>
        <span class="iconfont icon">&#xe639;</span>
        <span>定位失败</span>
      </div>
    </li>
    <li class="info info2">
      <div>
        <span class="iconfont icon">&#xe844;</span>
        <span>必游乐榜单</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "LittleInfo"
};
</script>

<style lang="stylus" scoped>
.little-info {
  display: flex;
  width: 100%;
  height: 0.98rem;
  background-color: #fff;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  box-sizing: border-box;
  margin-bottom: 0.2rem;
}

.little-info li {
  width: 50%;
  height: 100%;
  text-align: center;
  line-height: 0.98rem;
}

.little-info li.info1 {
  border-right: 1px solid #eee;
}

.little-info li .icon {
  font-size: 18px;
  margin-right: 0.02rem;
}
</style>