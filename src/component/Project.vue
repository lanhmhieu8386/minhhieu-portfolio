<template>
  <section class="project-showcase">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
    />

    <div class="container-fluid px-lg-5">
      <div class="showcase-header mb-10">
        <span class="tech-label">// SELECTED_WORKS.LOG</span>
        <h2 class="display-title-luxury">Dự Án <br />Tiêu Biểu</h2>
      </div>

      <div class="projects-stack">
        <div v-for="pj in projects" :key="pj.id" class="project-item">
          <div class="row align-items-center g-0">
            <div class="col-lg-7" :class="pj.id % 2 === 0 ? 'order-lg-2' : ''">
              <div class="pj-image-container">
                <img :src="pj.image" :alt="pj.name" class="pj-bg-img" />
                <div class="pj-overlay-glass"></div>
                <div class="pj-number-back">{{ pj.id }}</div>
              </div>
            </div>

            <div class="col-lg-5" :class="pj.id % 2 === 0 ? 'order-lg-1' : ''">
              <div
                class="pj-details-box"
                :class="pj.id % 2 === 0 ? 'pe-lg-5' : 'ps-lg-5'"
              >
                <div class="status-tag">
                  <span class="dot"></span> {{ pj.status }}
                </div>
                <span class="pj-category">{{ pj.type }}</span>
                <h3 class="pj-name">{{ pj.name }}</h3>
                <p class="pj-description">{{ pj.desc }}</p>
                <p class="pj-description" v-if="pj.desc2">{{ pj.desc2 }}</p>

                <div class="pj-tech-icons">
                  <div v-for="t in pj.tech" :key="t.name" class="icon-wrapper">
                    <i :class="t.iconClass" :title="t.name"></i>
                    <span class="icon-name">{{ t.name }}</span>
                  </div>
                </div>

                <div class="pj-actions">
                  <a :href="pj.github" target="_blank" class="github-link">
                    <span class="link-text">VIEW SOURCE CODE</span>
                    <i class="devicon-github-original"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import anh28 from "@/assets/anh28.jpg";
import anh27 from "@/assets/anh27.jpg";
import anh26 from "@/assets/anh26.jpg";

const projects = ref([
  {
    id: "01",
    anchorId: "01",
    name: "FourSpice Hotpot",
    type: "Enterprise Full-stack System",
    desc: "Dẫn dắt phát triển hệ thống quản lý nhà hàng, xây dựng kiến trúcLayered Architecture, RESTful API và giao diện quản trị hiện đại.",
    desc2:
      "Áp dụng Spring Security (JWT, OAuth2) và Docker để đảm bảo bảo mật, hiệu năng và khả năng mở rộng hệ thống.",
    // Đã đổi sang object để chứa class icon
    tech: [
      { name: "Spring", iconClass: "devicon-spring-original colored" },
      { name: "Vue 3", iconClass: "devicon-vuejs-plain colored" },
      { name: "Docker", iconClass: "devicon-docker-plain colored" },
      {
        name: "SQL Server",
        iconClass: "devicon-microsoftsqlserver-plain colored",
      },
      { name: "Auth", iconClass: "devicon-azuresqldatabase-plain colored" },
    ],
    image: anh28,
    github: "https://github.com/lanhmhieu8386/FourSpiceHotpot",
    status: "PRODUCTION_READY",
  },
  {
    id: "02",
    anchorId: "02",
    name: "MHS Shorts Store",
    type: "E-commerce Platform",
    desc: "Xây dựng nền tảng thương mại điện tử với Spring MVC và Thymeleaf, áp dụng MVC & Design Patterns để tối ưu luồng xử lý giao dịch. Tích hợp GitHub quản lý source code và bảo mật hệ thống bằng Session-based Authentication.",
    tech: [
      { name: "Java", iconClass: "devicon-java-plain colored" },
      { name: "Spring", iconClass: "devicon-spring-original colored" },
      { name: "HTML5", iconClass: "devicon-html5-plain colored" },
      {
        name: "SQL Server",
        iconClass: "devicon-microsoftsqlserver-plain colored",
      },
    ],
    image: anh27,
    github: "https://github.com/lanhmhieu8386/BanQuanShortMHS",
    status: "STABLE",
  },
  {
    id: "03",
    anchorId: "01",
    name: "WearZone Software",
    type: "POS & Inventory Management",
    desc: "Phần mềm quản lý kho và bán hàng thời gian thực. Giải pháp tối ưu cho các chuỗi cửa hàng bán lẻ thời trang.",
    tech: [
      { name: "Java", iconClass: "devicon-java-plain colored" },
      { name: "Swing", iconClass: "devicon-windows8-original colored" },
      { name: "JDBC", iconClass: "devicon-oracle-original colored" },
      { name: "GitHub", iconClass: "devicon-github-original" },
    ],
    image: anh26,
    github: "https://github.com/lanhmhieu8386/BanAoPhongWearZone",
    status: "LEGACY_MAINTAIN",
  },
]);
</script>

<style scoped>
/* Giữ nguyên các style cũ của tao, chỉ thêm/sửa đoạn này cho icon: */

.pj-tech-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 50px;
}

.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  transition: 0.3s;
}

.icon-wrapper i {
  font-size: 2.2rem;
  filter: none; /* ✅ hiện màu gốc devicon */
}

.icon-wrapper:hover i {
  filter: grayscale(0%) opacity(1); /* Hover phát lên màu luôn */
  transform: translateY(-8px) scale(1.2);
}

.icon-name {
  font-family: "JetBrains Mono", monospace;
  font-size: 9px;
  color: #666;
  letter-spacing: 1px;
  text-transform: uppercase;
  opacity: 0;
  transition: 0.3s;
}

.icon-wrapper:hover .icon-name {
  opacity: 1;
  color: #c5a059;
}

/* GitHub icon đặc biệt */
.github-link i {
  font-size: 1.5rem;
}

/* Typography & Layout (Giữ nguyên từ file trước của tao) */
.project-showcase {
  background: #d2d6cd;
  color: #fff;
  padding: 150px 0;
  font-family: "Inter", sans-serif;
}
.tech-label {
  font-family: "JetBrains Mono", monospace;
  color: #d39015;
  letter-spacing: 4px;
  font-size: 12px;
}
.display-title-luxury {
  font-family: "DM Serif Display", serif;
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1;
  margin-top: 20px;
}
.projects-stack {
  display: flex;
  flex-direction: column;
  gap: 180px;
}
.pj-image-container {
  position: relative;
  height: 550px;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
  border: 1px solid #1a1a1a;
}
.pj-bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) brightness(0.6);
  transition: 1.2s cubic-bezier(0.19, 1, 0.22, 1);
}
.project-item:hover .pj-bg-img {
  filter: grayscale(20%) brightness(0.8);
  transform: scale(1.05);
}
.pj-name {
  font-family: "DM Serif Display", serif;
  font-size: 3.2rem;
  margin-bottom: 25px;
  color: #fff;
  letter-spacing: -1px;
}
.pj-description {
  font-size: 16px;
  line-height: 1.8;
  color: #242121;
  font-weight: 300;
  margin-bottom: 40px;
  text-align: justify;
}
.github-link {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  font-size: 12px;
  letter-spacing: 2px;
  border-bottom: 1px solid #c5a059;
  padding-bottom: 8px;
  transition: 0.3s;
}
.github-link:hover {
  gap: 25px;
  color: #c5a059;
}
@media (max-width: 767px) {
  /* Giảm khoảng cách toàn bộ các section */
  .py-10 {
    padding: 40px 0 !important; /* Thay vì 120px hay 100px */
  }

  /* Thu nhỏ tiêu đề chính */
  .display-title {
    font-size: 3rem !important; /* Nhỏ lại để không bị tràn dòng */
    margin-bottom: 15px;
  }

  .hero-intro {
    font-size: 14px;
    line-height: 1.6;
    padding: 0 20px;
  }

  /* Thu nhỏ ảnh Hero đáng kể */
  .main-hero-img {
    height: 280px !important; /* Ép xuống dưới 300px cho gọn */
    object-fit: cover;
  }

  .image-overlay-card {
    max-width: 70% !important; /* Thu nhỏ chiều ngang ảnh */
    box-shadow: 10px 10px 0px 0px #c5a059 !important; /* Bóng đổ nhỏ lại */
  }
}
@media (max-width: 767px) {
  /* Timeline: Chữ nhỏ lại cho tinh tế */
  .school-brand h3 {
    font-size: 18px !important;
  }

  .study-desc {
    font-size: 14px !important;
  }

  /* Grid ảnh: Ép ảnh lùn xuống để thấy được nhiều ảnh cùng lúc */
  .study-grid {
    grid-template-columns: 1fr 1fr !important; /* Chia 2 cột cho gọn */
    gap: 10px !important;
  }

  .grid-box,
  .grid-box.tall {
    height: 150px !important; /* Ảnh lùn lại, nhìn như một gallery nhỏ */
  }

  .overlay-text {
    font-size: 8px !important;
    padding: 3px 8px !important;
  }
}
@media (max-width: 767px) {
  .projects-stack {
    gap: 60px !important; /* Giảm khoảng cách giữa các dự án */
  }

  /* Ảnh dự án: Thu nhỏ chiều cao */
  .pj-image-container {
    height: 200px !important; /* Chỉ để 200px để người dùng thấy ngay tiêu đề bên dưới */
    margin-bottom: 20px;
  }

  .pj-name {
    font-size: 1.8rem !important; /* Tiêu đề dự án gọn lại */
    margin-bottom: 10px;
  }

  .pj-description {
    font-size: 13px !important;
    margin-bottom: 20px;
    line-height: 1.5;
  }

  /* Icon công nghệ: Thu nhỏ và dàn hàng */
  .pj-tech-icons {
    gap: 12px !important;
    margin-bottom: 25px !important;
  }

  .icon-wrapper i {
    font-size: 1.5rem !important;
  }

  .icon-name {
    font-size: 7px !important;
  }

  /* Số thứ tự chạy chìm: Thu nhỏ để không lấn át */
  .pj-number-back {
    font-size: 5rem !important;
    top: 0;
    right: 0;
  }
}
</style>
