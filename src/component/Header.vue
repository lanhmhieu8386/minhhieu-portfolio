<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const scrolled = ref(false);

const close = () => {
  isOpen.value = false;
  document.body.classList.remove("menu-open");
};

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
};

// Hàm xử lý cuộn xuống Footer (Contact) mượt mà
const scrollToFooter = (e) => {
  e.preventDefault(); // Chặn hành vi mặc định
  close(); // Đóng menu mobile

  const footer = document.getElementById("contact-footer");
  if (footer) {
    // Khoảng offset nhẹ để không bị che mất tiêu đề
    const offset = 80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const footerRect = footer.getBoundingClientRect().top;
    const footerPosition = footerRect - bodyRect;
    const offsetPosition = footerPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 30; // Tăng ngưỡng một chút
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<template>
  <nav :class="['luxury-header', { 'is-scrolled': scrolled }]">
    <div class="container-fluid px-lg-5">
      <div class="nav-wrapper">
        <router-link class="brand" to="/" @click="close">
          <div class="brand-wrapper">
            <div class="brand-top">
              <span class="brand-text">Minh Hiếu</span>
              <span class="tech-dot"></span>
            </div>
            <div class="brand-line-container">
              <div class="brand-line-bg"></div>
              <div class="brand-line-active"></div>
            </div>
            <span class="brand-sub">BACKEND DEVELOPER // 2026</span>
          </div>
        </router-link>

        <button class="menu-toggle" @click="toggleMenu">
          <div class="hamburger" :class="{ 'is-active': isOpen }">
            <span></span>
            <span></span>
          </div>
        </button>

        <div class="nav-links" :class="{ 'is-open': isOpen }">
          <div class="menu-backdrop" @click="close"></div>

          <div class="links-inner">
            <router-link to="/" class="link-item" @click="close">
              Home
            </router-link>
            <router-link to="/about" class="link-item" @click="close">
              About
            </router-link>
            <router-link to="/study" class="link-item" @click="close">
              Study
            </router-link>
            <router-link to="/project" class="link-item" @click="close">
              Project
            </router-link>
            <router-link to="/life" class="link-item" @click="close">
              Life
            </router-link>

            <div class="divider-tech"></div>

            <a href="#contact-footer" class="tech-btn" @click="scrollToFooter">
              <span class="btn-text">Connect_</span>
              <div class="btn-icon">
                <i class="bi bi-terminal"></i>
              </div>
              <div class="btn-hover-fill"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Toàn bộ Header - Tăng chiều cao ban đầu */
/* THE TECH BUTTON: Điểm nhấn của Developer - Big & Bold */
.tech-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 16px; /* Rộng hơn tý cho thoáng */
  padding: 18px 0; /* Xóa bỏ padding ngang, chỉ giữ padding dọc */

  /* Xóa bỏ khung viền đen cứng nhắc */
  border: none;
  background: transparent;

  /* Cân bằng màu sắc */
  color: #1a1a1a;

  font-family: "JetBrains Mono", monospace; /* Font IT */
  text-decoration: none;
  font-size: 15px; /* To hơn hẳn */
  font-weight: 700;
  letter-spacing: 3px; /* Rộng chữ cho sang */
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
}

.is-scrolled .tech-btn {
  color: #aaa;
}

/* Nâng cấp hiệu ứng Hover: Dải màu vàng gold lướt bên dưới cực êm */
.tech-btn::after {
  content: "";
  position: absolute;
  bottom: 10px; /* Nằm sát chữ */
  left: 0;
  width: 0;
  height: 2px; /* Dải vàng mảnh */
  background: #c5a059;
  box-shadow: 0 0 10px rgba(197, 160, 89, 0.4); /* Phát sáng nhẹ */
  transition: width 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.tech-btn:hover::after {
  width: 100%; /* Line chạy dài ra hết tên */
}

.tech-btn:hover {
  color: #000;
  transform: translateY(-2px); /* Nhích nhẹ lên khi hover */
}

.is-scrolled .tech-btn:hover {
  color: #fff;
}

/* Cân chỉnh lại icon */
.btn-icon {
  font-size: 20px; /* To hơn tý */
  color: #c5a059;
  transition: 0.4s;
  opacity: 0.7; /* Làm mờ nhẹ khi mặc định */
}

.tech-btn:hover .btn-icon {
  opacity: 1;
  transform: scale(1.1) rotate(5deg); /* Phóng to nhẹ và xoay tý cho "chất" */
  color: #c5a059;
}

/* Fix lỗi tràn lề cho mobile card */
@media (max-width: 991px) {
  .tech-btn {
    width: 100%;
    justify-content: space-between;
    padding: 15px 0;
    color: #fff;
  }

  .tech-btn::after {
    bottom: 5px;
    background: #c5a059;
  }

  .btn-icon {
    color: #c5a059;
    opacity: 1;
  }
}
/* Trong Header.vue */
.luxury-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 45px 0;
  background: rgba(
    255,
    255,
    255,
    0.95
  ); /* Thêm nền trắng nhẹ để tách biệt với HomeView */
  transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
}
.luxury-header.is-scrolled {
  padding: 18px 0; /* Vừa phải khi cuộn */
  background: rgba(10, 10, 10, 0.9); /* Dark Tech Vibe sâu hơn */
  backdrop-filter: blur(25px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Brand Section - To, Font Bold hơn */
.brand {
  text-decoration: none;
  cursor: pointer;
}
.brand-wrapper {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.brand-top {
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.brand-text {
  /* Font Serif mạnh mẽ, sang trọng hơn */
  font-family: "Playfair Display", serif;
  font-size: 44px; /* To hẳn lên */
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -1.5px;
  line-height: 1;
  transition: 0.5s;
}

.is-scrolled .brand-text {
  color: #fff;
}

.tech-dot {
  width: 8px; /* To hơn */
  height: 8px;
  background: #c5a059;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(197, 160, 89, 0.7);
}

.brand-line-container {
  position: relative;
  width: 50px; /* Dài hơn */
  height: 2px; /* Dày hơn */
  overflow: hidden;
  margin: 6px 0;
}

.brand-line-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
}

.is-scrolled .brand-line-bg {
  background: rgba(255, 255, 255, 0.1);
}

.brand-line-active {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #c5a059;
  transition: 0.7s cubic-bezier(0.19, 1, 0.22, 1); /* Mượt hơn */
}

.brand:hover .brand-line-active {
  left: 0;
}

.brand-sub {
  font-family: "JetBrains Mono", monospace;
  font-size: 10px; /* Tăng nhẹ */
  text-transform: uppercase;
  letter-spacing: 4px; /* Rộng hơn */
  color: #888;
}

/* Nav Links - To, Sạch, Hiệu ứng Coder */
.links-inner {
  display: flex;
  align-items: center;
  gap: 45px; /* Rộng hơn */
}

.link-item {
  text-decoration: none;
  font-family: "JetBrains Mono", monospace; /* Coder Vibe */
  font-size: 15px; /* To hơn */
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #666;
  padding: 5px 0;
  position: relative;
  transition: 0.4s;
}

.is-scrolled .link-item {
  color: #aaa;
}
.link-item:hover {
  color: #000;
}
.is-scrolled .link-item:hover {
  color: #fff;
}

/* Hiệu ứng gạch chân 'Code' lướt êm hơn */
.link-item::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: #c5a059;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.link-item:hover::after {
  width: 100%;
}

.divider-tech {
  width: 1px;
  height: 28px; /* Cao hơn */
  background: rgba(197, 160, 89, 0.25);
}

/* Tech Button: To, Rõ, V vibe Dev mạnh */
.tech-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 15px 35px; /* To, rõ */
  border: 1.5px solid #1a1a1a; /* Dày hơn */
  background: transparent;
  color: #1a1a1a;
  font-family: "JetBrains Mono", monospace;
  text-decoration: none;
  font-size: 13px; /* To hơn */
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
}

.is-scrolled .tech-btn {
  color: #fff;
  border-color: rgba(255, 255, 255, 0.25);
}

.btn-hover-fill {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: #c5a059;
  z-index: -1;
  transition: 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.tech-btn:hover .btn-hover-fill {
  left: 0;
}
.tech-btn:hover {
  color: #000;
  border-color: #c5a059;
}

.btn-icon {
  font-size: 16px;
  transition: 0.4s;
}
.tech-btn:hover .btn-icon {
  color: #000;
  transform: scale(1.1);
}

/* Mobile Menu - Giữ nguyên logic cũ, chỉ tăng cỡ chữ */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger {
  width: 32px; /* To hơn */
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger span {
  width: 100%;
  height: 2px; /* Dày hơn */
  background: #1a1a1a;
  transition: 0.5s;
}

.is-scrolled .hamburger span {
  background: #fff;
}

.hamburger.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.is-active span:nth-child(2) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 991px) {
  .links-inner {
    position: absolute;
    top: 0; /* Cho chạy từ đỉnh */
    right: 0;
    width: 100%; /* Full chiều ngang hoặc 300px tùy Hiếu */
    height: 100vh;
    background: #fff; /* Hoặc #0a0a0a tùy vibe */
    display: flex !important;
    flex-direction: column;
    justify-content: center; /* Căn giữa nội dung theo chiều dọc */
    align-items: center;
    gap: 40px;
  }

  /* Nút Close (X) nằm ở góc phải trên cùng */
  .menu-toggle {
    position: fixed;
    top: 30px;
    right: 30px;
    z-index: 1005;
  }
}
@media (max-width: 991px) {
  .luxury-header {
    padding: 25px 0;
  }
  .luxury-header.is-scrolled {
    padding: 15px 0;
  }
  .menu-toggle {
    display: block;
    z-index: 1002;
  }
  .brand-text {
    font-size: 36px;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    transition: 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .nav-links.is-open {
    right: 0;
  }

  .menu-backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Tối hơn tý cho mobile */
    backdrop-filter: blur(10px);
  }

  .links-inner {
    position: absolute;
    top: 100px; /* Thấp hơn */
    right: 25px;
    width: 300px; /* To hơn */
    background: #0a0a0a;
    border: 1px solid rgba(197, 160, 89, 0.25);
    padding: 60px 50px; /* Rộng hơn */
    flex-direction: column;
    align-items: flex-start;
    gap: 35px;
    box-shadow: 0 50px 120px rgba(0, 0, 0, 0.7);
  }

  .link-item {
    color: #fff;
    font-size: 20px;
  }
  .tech-btn {
    width: 100%;
    justify-content: center;
    border-color: #c5a059;
    color: #fff;
    padding: 12px;
  }
}

/* Disable Scroll khi mở menu */
:global(body.menu-open) {
  overflow: hidden;
}
</style>
