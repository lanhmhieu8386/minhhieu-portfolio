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
import anh24 from "@/assets/anh24.jpg";
import anh25 from "@/assets/anh25.jpg";
import anh26 from "@/assets/anh26.jpg";
import anh27 from "@/assets/anh27.jpg";
import anh28 from "@/assets/anh28.jpg";
</script>

<template>
  <main class="bich-hue-main">
    <section id="home" class="hero-minimal">
      <div class="container-fluid px-lg-5">
        <div class="row align-items-center min-vh-100">
          <div class="col-lg-6 order-2 order-lg-1">
            <div class="hero-text-box">
              <span class="top-label">Actual Journey</span>
              <h1 class="display-title">Minh Hiếu</h1>
              <p class="hero-intro">
                Khám phá hành trình trở thành Developer, nơi kiến thức công
                nghệ, tư duy logic và trải nghiệm thực tế hòa quyện để tạo nên
                giá trị khác biệt.
              </p>

              <div class="hero-cta">
                <a href="#about" class="btn-explore">
                  <span>Khám phá ngay</span>
                  <i class="bi bi-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 order-1 order-lg-2">
            <div class="hero-image-wrapper">
              <div class="image-overlay-card">
                <img :src="anh1" alt="Bích Huệ" class="main-hero-img" />
                <div class="experience-tag">HaNoi '26</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="about-editorial py-10">
      <div class="container">
        <div class="row align-items-center mb-10">
          <div class="col-md-5">
            <div class="editorial-img-box">
              <img :src="anh8" alt="About" class="editorial-img" />
            </div>
          </div>
          <div class="col-md-6 offset-md-1">
            <div class="editorial-content">
              <span class="section-tag">01. About Me</span>
              <h2 class="section-title">
                Hành trình <br />trở thành Developer
              </h2>
              <p class="section-desc">
                Không chỉ là học tập, đây là hành trình rèn luyện tư duy lập
                trình, xây dựng nền tảng công nghệ và phát triển bản thân trong
                thế giới số không ngừng thay đổi.
              </p>
              <p class="section-desc">
                Backend Developer chuyên xây dựng RESTful API theo kiến trúc
                Layered Architecture & MVC, tối ưu bảo mật với JWT và OAuth2.0,
                áp dụng Design Patterns, phát triển hệ thống hiệu năng cao bằng
                Java Spring Boot.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="projects-grid-section py-10">
      <div class="container-fluid px-lg-5">
        <div
          class="gallery-header d-flex justify-content-between align-items-end mb-5"
        >
          <div>
            <span class="section-tag">02. Repository</span>
            <h2 class="section-title">Dự án tiêu biểu</h2>
          </div>
          <div class="status-log d-none d-md-block">
            System_Ready: Displaying_Log
          </div>
        </div>

        <div class="row g-4">
          <div class="col-lg-4">
            <div class="tech-card">
              <div class="card-img-box">
                <img :src="anh28" alt="FourSpice" class="project-img" />
                <div class="card-number">01</div>
                <div class="project-view-overlay">
                  <a href="/project#01" class="btn-view-detail"
                    >View Detail <i class="bi bi-arrow-up-right"></i
                  ></a>
                </div>
              </div>
              <div class="card-body-tech">
                <div class="tech-icons">
                  <i class="devicon-spring-original colored" title="Spring"></i>
                  <i class="devicon-vuejs-plain colored" title="VueJS"></i>
                  <i class="devicon-docker-plain colored" title="Docker"></i>
                  <i
                    class="devicon-microsoftsqlserver-plain colored"
                    title="SQL Server"
                  ></i>
                  <i class="devicon-github-original colored" title="Github"></i>
                </div>
                <h4 class="project-display-title">FourSpice Hotpot</h4>
                <p class="project-desc">
                  Hệ thống đặt bàn nhà hàng cao cấp, triển khai trên nền tảng
                  Docker với kiến trúc Full-stack (Spring Boot & Vue 3).
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="tech-card mt-lg-5">
              <div class="card-img-box">
                <img :src="anh27" alt="MHS Store" class="project-img" />
                <div class="card-number">02</div>
                <div class="project-view-overlay">
                  <a href="/project#02" class="btn-view-detail"
                    >View Detail <i class="bi bi-arrow-up-right"></i
                  ></a>
                </div>
              </div>
              <div class="card-body-tech">
                <div class="tech-icons">
                  <i class="devicon-spring-original colored" title="Spring"></i>
                  <i class="devicon-html5-plain colored" title="HTML5"></i>
                  <i
                    class="devicon-microsoftsqlserver-plain colored"
                    title="SQL Server"
                  ></i>
                  <i class="devicon-github-original colored" title="Github"></i>
                </div>
                <h4 class="project-display-title">MHS Shorts Store</h4>
                <p class="project-desc">
                  Nền tảng thương mại điện tử chuyên biệt cho ngành may mặc, tối
                  ưu hóa quy trình đặt hàng theo mô hình MVC.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="tech-card">
              <div class="card-img-box">
                <img :src="anh26" alt="WearZone" class="project-img" />
                <div class="card-number">03</div>
                <div class="project-view-overlay">
                  <a href="/project#03" class="btn-view-detail"
                    >View Detail <i class="bi bi-arrow-up-right"></i
                  ></a>
                </div>
              </div>
              <div class="card-body-tech">
                <div class="tech-icons">
                  <i class="devicon-java-plain colored" title="Java"></i>
                  <i
                    class="devicon-windows8-original colored"
                    title="Swing"
                  ></i>
                  <i
                    class="devicon-microsoftsqlserver-plain colored"
                    title="SQL Server"
                  ></i>
                  <i class="devicon-github-original colored" title="Github"></i>
                </div>
                <h4 class="project-display-title">WearZone Software</h4>
                <p class="project-desc">
                  Phần mềm quản lý bán hàng T-shirt tích hợp POS và kiểm kê kho
                  hàng thời gian thực cho chuỗi cửa hàng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Container cho nút View Detail */
.project-view-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0; /* PC mặc định ẩn */
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 5;
}

/* Nút bấm Luxury */
.btn-view-detail {
  background: #fff;
  color: #111;
  padding: 12px 28px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  transform: translateY(30px); /* Hiệu ứng trồi từ dưới lên */
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  border: none;
}

/* Hover hiệu ứng trồi lên */
.tech-card:hover .project-view-overlay {
  opacity: 1;
}

.tech-card:hover .btn-view-detail {
  transform: translateY(0);
}

.btn-view-detail:hover {
  background: #c5a059;
  color: #fff;
}

/* RESPONSIVE CHO MOBILE */
@media (max-width: 991px) {
  /* Mobile: Hiện sẵn nút để người dùng dễ click, không cần hover */
  .project-view-overlay {
    opacity: 1;
    background: transparent;
    align-items: flex-end;
    padding-bottom: 30px;
    pointer-events: none; /* Overlay không chặn tương tác bên dưới */
  }

  .btn-view-detail {
    pointer-events: auto; /* Nút thì vẫn click bình thường */
    transform: translateY(0);
    font-size: 10px;
    padding: 10px 20px;
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
}
/* Tông màu icon mặc định: Đen nhám, hover mới đổi màu */
.tech-icons-minimal {
  display: flex;
  gap: 18px;
  margin-bottom: 20px;
  color: #222; /* Màu mặc định tối, sạch sẽ */
  font-size: 1.1rem;
}

.tech-icons-minimal i {
  transition: 0.3s ease;
  cursor: pointer;
}

.tech-icons-minimal i:hover {
  color: #c5a059; /* Chỉ hover mới lên màu Gold sang chảnh */
  transform: translateY(-3px);
}

/* Card Image Box cải tiến */
.card-img-box {
  position: relative;
  overflow: hidden;
  background: #000; /* Nền đen để bổ trợ cho overlay */
}

.project-img {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
  opacity: 0.9; /* Giảm nhẹ độ sáng ảnh để con số nổi hơn */
  transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}

.tech-card:hover .project-img {
  transform: scale(1.05);
  opacity: 1;
}

/* Card Number: Dùng stroke (viền mảnh) cho sang */
.card-number {
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-family: "DM Serif Display", serif;
  font-size: 4.5rem;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
  z-index: 2;
  pointer-events: none;
}

/* Layout & Text */
.tech-card {
  background: #fff;
  border-bottom: 1px solid #eee; /* Chỉ để lại viền dưới cho tối giản */
  transition: 0.4s;
}

.tech-card:hover {
  border-color: #c5a059;
}

.project-display-title {
  font-family: "DM Serif Display", serif;
  font-size: 24px;
  letter-spacing: -0.5px;
  margin-bottom: 12px;
}

.project-desc {
  font-size: 14px;
  color: #777;
  line-height: 1.7;
  font-weight: 300;
}

.tech-card:hover {
  transform: translateY(-10px);
  border-color: #c5a059;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05);
}

.card-img-box {
  position: relative;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  transition: transform 1.2s ease;
}

.tech-card:hover .project-img {
  transform: scale(1.1);
}

.card-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-family: "DM Serif Display", serif;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.3);
  line-height: 1;
}

/* Phần nội dung Tech bên dưới ảnh */
.card-body-tech {
  padding: 30px;
}

.tech-icons {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  color: #c5a059;
  font-size: 1.2rem;
}

.project-display-title {
  font-family: "DM Serif Display", serif;
  font-size: 26px;
  margin-bottom: 15px;
  color: #111;
}

.project-desc {
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  font-weight: 300;
}

/* Mobile Responsive */
@media (max-width: 991px) {
  .project-img {
    height: 350px;
  }
  .tech-card.mt-lg-5 {
    margin-top: 0 !important;
  }
}
.project-tech {
  font-size: 10px;
  letter-spacing: 2px;
  color: #c5a059;
  margin-bottom: 5px;
  font-weight: 600;
}

.card-caption {
  margin-top: 15px;
  font-size: 14px; /* tăng nhẹ cho rõ tên dự án */
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #111; /* giữ màu đen cho sang */
}
.bich-hue-main {
  background: #fff;
  color: #111;
  font-family: "Inter", sans-serif;
}

/* HERO */
.hero-minimal {
  background: linear-gradient(to right, #fcfcfc 50%, #f3f3f3 50%);
}

.top-label {
  font-size: 11px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #c5a059;
  display: block;
  margin-bottom: 20px;
}

.display-title {
  font-family: "DM Serif Display", serif;
  font-size: clamp(4rem, 12vw, 9rem);
  line-height: 0.85;
  margin-left: -5px;
  margin-bottom: 30px;
}

.hero-intro {
  font-size: 18px;
  color: #666;
  max-width: 450px;
  line-height: 1.8;
  font-weight: 300;
}

.btn-explore {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: #111;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 40px;
  padding: 10px 0;
  border-bottom: 1px solid #111;
  transition: 0.3s;
}

.btn-explore:hover {
  gap: 25px;
  color: #c5a059;
  border-color: #c5a059;
}

.hero-image-wrapper {
  padding: 50px;
}

.image-overlay-card {
  position: relative;
  box-shadow:
    50px 50px 0px -10px #fff,
    50px 50px 0px 0px #c5a059;
}

.main-hero-img {
  width: 100%;
  height: auto; /* chiều cao theo tỉ lệ ảnh */
  max-height: 60vh; /* hoặc 100vh nếu muốn full màn hình */
  object-fit: contain; /* hiển thị toàn bộ ảnh, giữ tỉ lệ */
  display: block;
}

.experience-tag {
  position: absolute;
  bottom: 30px;
  right: -20px;
  background: #000;
  color: #fff;
  padding: 10px 25px;
  font-size: 12px;
  letter-spacing: 2px;
  transform: rotate(-90deg);
  transform-origin: bottom right;
}

.section-tag {
  color: #c5a059;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: block;
}

.section-title {
  font-family: "DM Serif Display", serif;
  font-size: 56px;
  margin-bottom: 30px;
}

.editorial-img-box {
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%);
  max-height: 400px; /* giảm từ mặc định xuống */
}

.editorial-img {
  width: 100%;
  height: auto; /* giữ tỉ lệ ảnh */
  max-height: 400px; /* match với box */
  object-fit: cover;
  object-position: center 70%; /* giữ ảnh phủ box */
}

.editorial-img-box:hover .editorial-img {
  transform: scale(1.05);
}

.link-luxury {
  text-decoration: none;
  color: #111;
  font-weight: 600;
  font-size: 14px;
  transition: 0.3s;
}

.link-luxury:hover {
  color: #c5a059;
  padding-left: 10px;
}

.gallery-card {
  position: relative;
  overflow: hidden;
}

.gallery-card img {
  width: 100%;
  height: 450px;
  object-fit: cover;
  filter: grayscale(100%);
  object-position: center 60%;
  transition: 0.6s;
}

.gallery-card:hover img {
  filter: grayscale(0%);
}

.card-caption {
  margin-top: 15px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #999;
}

.fpt-logo-minimal {
  filter: grayscale(1) contrast(0.5);
  opacity: 0.5;
}

.py-10 {
  padding: 120px 0;
}
.mb-10 {
  margin-bottom: 120px;
}

/* --- TỐI ƯU LUXURY CHO MOBILE (Sửa lỗi & Tăng trải nghiệm) --- */
@media (max-width: 991px) {
  /* 1. Hero Section: Cân đối lại tỉ lệ */
  .hero-minimal {
    padding-top: 80px; /* Chừa chỗ cho navbar mobile */
    padding-bottom: 40px;
    background: #fff;
    min-vh-100: auto; /* Không ép full màn hình để tránh trống trải */
  }

  .display-title {
    font-size: clamp(3rem, 12vw, 4.5rem);
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: -2px;
  }

  .hero-intro {
    font-size: 15px;
    text-align: center;
    margin: 0 auto;
    padding: 0 10px;
  }

  .hero-cta {
    text-align: center;
    margin-bottom: 40px;
  }

  /* 2. Hero Image: Xử lý đổ bóng để không gây tràn màn hình */
  .hero-image-wrapper {
    padding: 10px;
    display: flex;
    justify-content: center;
  }

  .image-overlay-card {
    /* Giảm kích thước bóng gold để không đẩy container ra ngoài */
    box-shadow: 10px 10px 0px 0px #c5a059;
    width: 85%;
    margin-right: 10px; /* Bù trừ cho phần bóng */
  }

  .main-hero-img {
    max-height: 45vh; /* Giới hạn chiều cao ảnh trên mobile */
    width: 100%;
    object-fit: cover;
  }

  .experience-tag {
    transform: rotate(0);
    bottom: -10px;
    right: 10px;
    font-size: 9px;
    padding: 5px 12px;
  }

  /* 3. Editorial Section (About Me) */
  .about-editorial {
    padding: 60px 0;
  }

  .section-title {
    font-size: 32px;
    text-align: left; /* Để canh trái theo chuẩn Editorial */
    line-height: 1.2;
  }

  .editorial-img-box {
    margin-bottom: 40px;
    clip-path: none; /* Bỏ vát góc để tối ưu diện tích ảnh */
    max-height: 300px;
  }

  /* 4. Project Cards: Hiển thị dạng thẻ sạch sẽ */
  .projects-grid-section {
    padding: 60px 0;
  }

  .tech-card {
    margin-bottom: 30px;
  }

  .project-img {
    height: 300px !important;
  }

  .card-number {
    font-size: 3rem;
    bottom: 10px;
    left: 10px;
  }

  .card-body-tech {
    padding: 20px;
  }

  .project-display-title {
    font-size: 22px;
  }

  /* 5. Ngăn chặn tràn lề toàn trang */
  .container,
  .container-fluid {
    padding-left: 20px !important;
    padding-right: 20px !important;
    overflow: hidden;
  }

  .row {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}

/* Thêm hiệu ứng mượt mà khi scroll */
html {
  scroll-behavior: smooth;
}
/* SIÊU TINH CHỈNH MOBILE - LUXURY RESPONSIVE */
@media (max-width: 991px) {
  .editorial-img {
    object-position: center 90%; /* hoặc center 30% nếu muốn lên nhẹ */
  }
  .hero-minimal {
    background: #fff; /* Bỏ gradient chia đôi vì mobile chỉ có 1 cột */
    padding-top: 100px; /* Tránh đè Header */
    padding-bottom: 50px;
  }

  /* Căn giữa chữ cho cân đối trên phone */
  .hero-text-box {
    text-align: center;
    padding: 0 15px;
    margin-bottom: 40px;
  }

  .display-title {
    font-size: clamp(3.5rem, 15vw, 5rem); /* Chữ to nhưng không tràn */
    margin-left: 0;
    line-height: 1;
  }

  .hero-intro {
    margin: 0 auto;
    font-size: 16px;
  }

  .btn-explore {
    justify-content: center;
  }

  /* Xử lý ảnh Hero - Quan trọng nhất */
  .hero-image-wrapper {
    padding: 20px; /* Giảm padding cho đỡ chiếm diện tích */
    margin-top: 0;
  }

  .image-overlay-card {
    /* Bỏ cái bóng trắng khổng lồ gây lỗi tràn lề, chỉ giữ bóng gold nhẹ */
    box-shadow: 15px 15px 0px 0px #c5a059;
    margin: 0 auto;
    max-width: 90%;
  }

  .main-hero-img {
    height: 400px; /* Thu ngắn ảnh cho đỡ cuộn mỏi tay */
  }

  .experience-tag {
    /* Xoay lại tag cho nằm ngang trên mobile cho dễ đọc */
    transform: rotate(0);
    position: absolute;
    bottom: -15px;
    right: 15px;
    font-size: 10px;
    padding: 5px 15px;
  }

  /* Các Section bên dưới */
  .py-10 {
    padding: 60px 0; /* Giảm khoảng cách cho gọn */
  }

  .section-title {
    font-size: 38px;
    text-align: center;
  }

  .section-desc {
    text-align: center;
  }

  .editorial-img-box {
    margin-bottom: 30px;
    clip-path: none; /* Bỏ vát góc trên mobile nhìn cho thoáng */
    border-radius: 10px;
  }

  /* Thư viện ảnh: Mobile nên hiện màu luôn cho đẹp */
  .gallery-card img {
    filter: grayscale(0%);
    height: 350px;
  }

  .gallery-card.mt-md-5 {
    margin-top: 0 !important; /* Bỏ lệch tầng trên mobile */
  }
}

/* Fix lỗi tràn lề ngang cho toàn bộ trang */
:deep(.container-fluid),
:deep(.row) {
  overflow: hidden;
  max-width: 100vw;
  margin: 0;
}
</style>
