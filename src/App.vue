<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="stylus">
#app {
  width: 100%;
  // height: 300rem;
  background-color: #eee;
}
</style>
