<script setup>
import anh1 from "@/assets/anh1.jpg";
import anh2 from "@/assets/anh2.jpg";
import anh3 from "@/assets/anh3.jpg";
import anh4 from "@/assets/anh4.jpg";
import anh5 from "@/assets/anh5.jpg";
import anh6 from "@/assets/anh6.jpg";
import anh7 from "@/assets/anh7.jpg";
import anh8 from "@/assets/anh8.jpg";
import anh9 from "@/assets/anh9.jpg";
import anh10 from "@/assets/anh10.jpg";
import anh11 from "@/assets/anh11.jpg";
import anh12 from "@/assets/anh12.jpg";
import anh13 from "@/assets/anh13.jpg";
import anh14 from "@/assets/anh14.jpg";
import anh15 from "@/assets/anh15.jpg";
import anh16 from "@/assets/anh16.jpg";
import anh17 from "@/assets/anh17.jpg";
import anh18 from "@/assets/anh18.jpg";
import anh19 from "@/assets/anh19.jpg";
import anh20 from "@/assets/anh20.jpg";
import anh21 from "@/assets/anh21.jpg";
import anh22 from "@/assets/anh22.jpg";
import anh23 from "@/assets/anh23.jpg";
import { onMounted, onUnmounted, ref } from "vue";

const currentIndex = ref(0);
let interval = null;
const images = [
  { src: anh1, pos: "center 100%" },
  { src: anh13, pos: "center 45%" },
  { src: anh14, pos: "center 80%" },
];
onMounted(() => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 2000); // đổi mỗi 3s
});

onUnmounted(() => {
  clearInterval(interval);
});

const interests = [
  {
    title: "Code & Build",
    desc: "Xây dựng hệ thống và phát triển kỹ năng lập trình mỗi ngày.",
  },
  {
    title: "Connect & Network",
    desc: "Giao lưu, mở rộng mối quan hệ và học hỏi từ những người xung quanh.",
  },
  {
    title: "Balance Lifestyle",
    desc: "Cân bằng giữa công việc và cuộc sống — trải nghiệm, khám phá và tận hưởng.",
  },
];
</script>

<template>
  <main class="life-page">
    <section class="life-hero">
      <div class="hero-bg-wrapper">
        <img
          :src="images[currentIndex].src"
          class="hero-bg-img"
          :style="{ objectPosition: images[currentIndex].pos }"
        />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="location-tag"
          ><i class="bi bi-geo-alt"></i> HaNoi, VietNam</span
        >
        <h1 class="life-title">Chân Dung <br />Sự Tinh Tế</h1>
        <p class="life-subtitle">
          Sống không chỉ là tồn tại, mà là thưởng thức từng chuyển động của thời
          gian.
        </p>
      </div>
    </section>

    <section class="lifestyle-journal py-10">
      <div class="container">
        <div class="row align-items-center mb-10">
          <div class="col-lg-7">
            <div class="journal-img-large">
              <img :src="anh1" alt="Style" />
              <div class="img-label">Tay Yen Tu, Bac Giang '26</div>
            </div>
          </div>
          <div class="col-lg-5 ps-lg-5">
            <div class="journal-text">
              <span class="chapter-num">01</span>
              <h2 class="serif-title">Gu Công Nghệ <br />Độc Bản</h2>
              <p>
                Mỗi sản phẩm tôi xây dựng không chỉ là code, mà là sự kết hợp
                giữa logic, tối ưu và trải nghiệm. Ưu tiên sự tối giản trong
                giao diện nhưng chặt chẽ trong kiến trúc và bảo mật hệ thống.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center flex-row-reverse mb-10">
          <div class="col-lg-7">
            <div class="journal-img-large2">
              <img :src="anh10" alt="Taipei Cafe" />
              <div class="img-label">I Love Myself '2004</div>
            </div>
          </div>
          <div class="col-lg-5 pe-lg-5 text-lg-end">
            <div class="journal-text">
              <span class="chapter-num">02</span>
              <h2 class="serif-title">Nhịp Sống <br />Developer</h2>
              <p>
                Từ những buổi tối debug đến khoảnh khắc hệ thống vận hành ổn
                định. Một hành trình cân bằng giữa áp lực, sáng tạo và sự hoàn
                thiện trong từng dòng code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mega-gallery bg-black py-10">
      <div class="container-fluid px-0">
        <div class="marquee">
          <div class="marquee-track">
            <span
              >BACKEND • RESTFUL API • SPRING BOOT • SECURITY • SYSTEM DESIGN
              •</span
            >
            <span
              >BACKEND • RESTFUL API • SPRING BOOT • SECURITY • SYSTEM DESIGN
              •</span
            >
          </div>
        </div>

        <div class="grid-layout-complex mt-5">
          <div class="grid-item item-1 pos-1"><img :src="anh8" /></div>
          <div class="grid-item item-2 pos-2"><img :src="anh12" /></div>
          <div class="grid-item item-3 pos-3"><img :src="anh11" /></div>
          <div class="grid-item item-4 pos-4"><img :src="anh2" /></div>
          <div class="grid-item item-5 pos-5"><img :src="anh22" /></div>
          <div class="grid-item item-6 pos-6"><img :src="anh13" /></div>
        </div>
      </div>
    </section>

    <section class="interests py-10">
      <div class="container">
        <div class="text-center mb-5">
          <span class="sub-gold">Curated Interests</span>
          <h2 class="serif-title">Đam Mê & Cảm Hứng</h2>
        </div>
        <div class="row g-4">
          <div class="col-md-4" v-for="(item, index) in interests" :key="index">
            <div class="interest-card">
              <div class="card-num">0{{ index + 1 }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 1s ease-in-out;
}
.life-page {
  background: #fff;
  overflow-x: hidden;
}

/* HERO CINE */
.life-hero {
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
}

.hero-bg-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.hero-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.7)
  );
}

.hero-content {
  position: relative;
  z-index: 2;
}

.location-tag {
  font-size: 12px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;
}

.life-title {
  font-family: "DM Serif Display", serif;
  font-size: clamp(3rem, 10vw, 7rem);
  line-height: 1;
}

/* JOURNAL SECTION */
.serif-title {
  font-family: "DM Serif Display", serif;
  font-size: 48px;
  margin-bottom: 25px;
}

.journal-img-large {
  position: relative;
  padding: 20px;
  background: #f8f8f8;
}

.journal-img-large img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center 100%;
  transition: 0.6s ease;
}
.journal-img-large2 img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  object-position: center 60%;
  transition: 0.6s ease;
}

.img-label {
  position: absolute;
  bottom: 40px;
  left: -20px;
  background: #c5a059;
  color: #fff;
  padding: 8px 20px;
  font-size: 11px;
  letter-spacing: 2px;
  transform: rotate(-90deg);
}

.chapter-num {
  font-size: 80px;
  font-family: "DM Serif Display", serif;
  color: #f0f0f0;
  display: block;
  line-height: 1;
}

/* MEGA GALLERY GRID */
.bg-black {
  background: #f00606;
  color: #fff;
}

.marquee-text {
  white-space: nowrap;
  font-size: 40px;
  font-weight: 900;
  opacity: 0.15;
  font-family: "Inter", sans-serif;
  overflow: hidden;
}
.marquee {
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.marquee-track {
  display: inline-flex;
  animation: marqueeLoop 20s linear infinite;
}

.marquee-track span {
  font-size: 40px;
  font-weight: 900;
  letter-spacing: 4px;
  color: rgba(255, 255, 255, 0.08);
  margin-right: 50px;
}
@keyframes marqueeLoop {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.grid-layout-complex {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  gap: 15px;
  padding: 0 15px;
}

.grid-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0.8;
  transition: 0.5s;
}

.pos-1 img {
  object-position: center 80%;
}
.pos-2 img {
  object-position: center 50%;
}
.pos-3 img {
  object-position: center 60%;
}
.pos-4 img {
  object-position: center 80%;
}
.pos-5 img {
  object-position: center 50%;
}
.pos-6 img {
  object-position: center 50%;
}
.grid-item:hover img {
  opacity: 1;
  transform: scale(0.98);
}

.item-1 {
  grid-column: span 2;
  grid-row: span 2;
}
.item-2 {
  grid-column: span 1;
  grid-row: span 1;
}
.item-3 {
  grid-column: span 1;
  grid-row: span 2;
}

/* INTEREST CARDS */
.interest-card {
  padding: 50px;
  border: 1px solid #eee;
  height: 100%;
  transition: 0.4s;
}

.interest-card:hover {
  background: #111;
  color: #fff;
  border-color: #111;
}

.card-num {
  font-size: 12px;
  color: #c5a059;
  margin-bottom: 20px;
}

.sub-gold {
  color: #c5a059;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 12px;
}

.py-10 {
  padding: 120px 0;
}
.mb-10 {
  margin-bottom: 120px;
}
@media (max-width: 767px) {
  /* 1. Hero: Thu nhỏ để thấy được phần tiếp theo */
  .life-hero {
    height: 70vh !important; /* Không để tràn 100vh để người dùng biết bên dưới còn nội dung */
  }

  .life-title {
    font-size: 2.8rem !important;
    line-height: 1.1;
  }

  .life-subtitle {
    font-size: 13px !important;
    max-width: 280px;
    margin: 15px auto 0;
  }

  /* 2. Journal: Thu nhỏ ảnh và căn chỉnh lại label */
  .journal-img-large img,
  .journal-img-large2 img {
    height: 300px !important; /* Ép lùn ảnh xuống */
    border-radius: 4px;
  }

  .img-label {
    position: relative !important; /* Đẩy xuống dưới ảnh thay vì đè lên */
    transform: none !important;
    left: 0 !important;
    bottom: 0 !important;
    display: inline-block;
    margin-top: 10px;
    padding: 4px 12px !important;
    font-size: 10px !important;
  }

  .serif-title {
    font-size: 28px !important;
    margin-bottom: 15px;
  }

  .journal-text p {
    font-size: 14px;
    color: #666;
    text-align: justify;
  }

  /* 3. Grid Gallery: Chuyển sang dạng lưới 2 cột đều */
  .grid-layout-complex {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-auto-rows: 140px !important; /* Ô vuông nhỏ xinh */
    gap: 8px !important;
  }

  .item-1,
  .item-2,
  .item-3,
  .item-4,
  .item-5,
  .item-6 {
    grid-column: span 1 !important; /* Tất cả bằng nhau */
    grid-row: span 1 !important;
  }

  /* 4. Marquee: Giảm tốc độ và kích thước */
  .marquee-track span {
    font-size: 24px !important;
  }
}
@media (max-width: 991px) {
  .journal-img-large img {
    height: 400px;
  }
  .grid-layout-complex {
    grid-template-columns: repeat(2, 1fr);
  }
  .life-title {
    font-size: 4rem;
  }
}

/* TỐI ƯU LUXURY MOBILE - PAGE LIFE */
@media (max-width: 991px) {
  /* 1. Hero Section: Thu nhỏ tiêu đề để không che hết ảnh */
  .life-hero {
    height: 80vh; /* Giảm chiều cao một chút để người dùng thấy phần dưới */
  }

  .life-title {
    font-size: clamp(2.5rem, 12vw, 4rem);
    padding: 0 15px;
  }

  .life-subtitle {
    font-size: 14px;
    padding: 0 30px;
    margin-top: 15px;
  }

  /* 2. Journal Section: Sắp xếp lại thứ tự ảnh-chữ */
  .py-10 {
    padding: 60px 0; /* Thu hẹp khoảng cách */
  }

  .mb-10 {
    margin-bottom: 50px;
  }

  .journal-img-large {
    padding: 10px;
    margin-bottom: 30px;
  }

  .journal-img-large img {
    height: 350px; /* Chiều cao ảnh vừa phải trên phone */
  }

  .img-label {
    left: 10px;
    bottom: 20px;
    transform: rotate(0); /* Xoay ngang lại cho dễ đọc */
    font-size: 9px;
  }

  .serif-title {
    font-size: 30px;
    text-align: center;
  }

  .journal-text {
    text-align: center !important;
    padding: 0 10px !important;
  }

  .chapter-num {
    font-size: 50px;
  }

  /* 3. Mega Gallery: Chuyển Grid phức tạp thành 1-2 cột sạch sẽ */
  .marquee-text {
    font-size: 40px; /* Thu nhỏ chữ chạy nền */
  }

  .grid-layout-complex {
    grid-template-columns: repeat(2, 1fr); /* Giữ 2 cột cho gọn */
    grid-auto-rows: 180px; /* Thu hẹp chiều cao ô */
    gap: 10px;
    padding: 0 10px;
  }

  /* Reset lại span để ảnh không bị quá dài hoặc quá bé */
  .item-1 {
    grid-column: span 2;
    grid-row: span 1;
  }
  .item-2 {
    grid-column: span 1;
    grid-row: span 1;
  }
  .item-3 {
    grid-column: span 1;
    grid-row: span 1;
  }
  .item-4,
  .item-5,
  .item-6 {
    grid-column: span 1;
    grid-row: span 1;
  }

  /* 4. Interest Cards: Xếp chồng 1 cột */
  .interest-card {
    padding: 30px;
    text-align: center;
  }
}

/* Fix lỗi tràn lề chung cho trang Life */
.life-page {
  width: 100%;
  overflow-x: hidden;
}
</style>
