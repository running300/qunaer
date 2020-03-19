<template>
  <transition>
    <!-- 插槽的运用 -->
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: "Fide"
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 1s linear;
}
</style>