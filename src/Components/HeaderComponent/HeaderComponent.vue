<template>
  <div class="header">
    <div class="top-banner">
      <router-link to="/">
        <img src="@/assets/banner.png" alt="Mừng Xuân Ất Tỵ 2025" />
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    name: "HeaderComponent",
};
</script>
<style scoped>
.header {
    background: white;
}

.top-banner img {
    width: 100%;
}
</style>
