<script setup lang="ts">
import Header from "./component/Header.vue";
import HomeView from "./component/HomeView.vue";
import Footer from "./component/Footer.vue";
</script>

<template>
  <Header />

  <main class="main-content">
    <router-view />
  </main>

  <Footer />
</template>

<style>
/* Reset chuẩn */
body {
  margin: 0;
  padding: 0;
  background-color: #fff;
  overflow-x: hidden; /* Tránh bị vỡ layout ngang */
}

.main-content {
  /* Tăng lên 140px để không bị Header "Big Boss" đè lên chữ Bích Huệ */
  padding-top: 140px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  transition: padding 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Hiệu ứng cuộn mượt */
html {
  scroll-behavior: smooth;
}

/* Fix cho Mobile: Header mobile thường nhỏ hơn nên giảm padding lại */
@media (max-width: 991px) {
  .main-content {
    padding-top: 100px;
  }
}
</style>
