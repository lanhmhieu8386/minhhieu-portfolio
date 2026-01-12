<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand" href="#home">
        <span class="brand-text">HieuDev</span>
      </a>

      <!-- Toggle button (mobile) -->
      <button class="navbar-toggler" type="button" @click="isOpen = !isOpen">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Menu -->
      <div class="collapse navbar-collapse" :class="{ show: isOpen }">
        <div class="navbar-nav ms-auto">
          <a href="#home" class="nav-item nav-link" @click="close">Home</a>
          <a href="#about" class="nav-item nav-link" @click="close">About</a>
          <a href="#skills" class="nav-item nav-link" @click="close">Skills</a>
          <a href="#education" class="nav-item nav-link" @click="close"
            >Education</a
          >
          <a href="#contact" class="nav-item nav-link" @click="close"
            >Contact</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const close = () => (isOpen.value = false);
</script>
<style scoped>
.custom-navbar {
  background: linear-gradient(90deg, #f8fbff, #eef6ff);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  padding: 14px 0;
}

.brand-text {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 1px;
  color: #0f172a;
}

/* nav item */
.nav-item {
  margin-left: 24px;
  font-weight: 500;
  color: #0f172a !important;
  text-decoration: none;
  position: relative;
}

.nav-item::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #0d6efd, #38bdf8);
  left: 0;
  bottom: -6px;
  transition: 0.3s;
}

.nav-item:hover {
  color: #0d6efd !important;
}

.nav-item:hover::after {
  width: 100%;
}

/* mobile */
@media (max-width: 991px) {
  .nav-item {
    margin: 12px 0;
  }
}
</style>
