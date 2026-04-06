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
  <main class="study-page">
    <section class="study-hero py-10">
      <div class="container-fluid px-lg-5">
        <div class="row align-items-end">
          <div class="col-lg-8">
            <span class="sub-title">Education & Research</span>
            <h1 class="display-title">Tri Thức & <br />Sự Khởi Đầu</h1>
          </div>
          <div class="col-lg-4 text-lg-end">
            <p class="hero-quote">
              "Học tập là con đường ngắn nhất để chạm đến sự tự do và đẳng cấp."
            </p>
          </div>
        </div>
        <div class="header-line mt-5"></div>
      </div>
    </section>

    <section class="academic-timeline py-10">
      <div class="container">
        <div class="timeline-wrapper">
          <!-- Trường 2 -->
          <div class="timeline-item">
            <div class="time-mark">2024 - 2026</div>
            <div class="timeline-content">
              <div class="school-brand">
                <h3>FPT Polytechnic (FPT)</h3>
              </div>
              <p class="study-desc">
                Xây dựng nền tảng chuyên sâu về phát triển phần mềm, tập trung
                vào tư duy lập trình, kiến trúc hệ thống và công nghệ hiện đại,
                trong môi trường đào tạo gắn liền với thực tiễn doanh nghiệp.
              </p>
              <div class="skills-tags">
                <span>Java Spring Boot</span>
                <span>RESTful API</span>
                <span>Layered Architecture</span>
                <span>MVC Pattern</span>
                <span>JWT Security</span>
                <span>OAuth2.0</span>
                <span>Design Patterns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="campus-vibes py-10 bg-light-gold">
      <div class="container-fluid px-lg-5">
        <div class="row mb-5">
          <div class="col-md-6">
            <h2 class="modern-title">Môi trường học tập</h2>
          </div>
          <div class="col-md-6 text-md-end">
            <span class="page-count">03 / Academic Space</span>
          </div>
        </div>

        <div class="study-grid">
          <div class="grid-box tall img-1">
            <img :src="anh20" alt="Library" />
            <div class="overlay-text">The Great Library</div>
          </div>

          <div class="grid-box img-2">
            <img :src="anh21" alt="Classroom" />
            <div class="overlay-text">Innovation Hub</div>
          </div>

          <div class="grid-box img-3">
            <img :src="anh22" alt="Campus" />
            <div class="overlay-text">Taipei Tech Park</div>
          </div>
        </div>
      </div>
    </section>

    <section class="certifications py-10">
      <div class="container">
        <h2 class="section-title-small">Achievements & Leadership</h2>

        <div class="cert-row mt-5">
          <div class="cert-name">Top 100 sinh viên xuất sắc</div>
          <div class="cert-org">Academic Excellence</div>
          <div class="cert-link"><i class="bi bi-award-fill"></i> Verified</div>
        </div>

        <div class="cert-row mt-5">
          <div class="cert-name">Học bổng toàn phần</div>
          <div class="cert-org">Full Scholarship</div>
          <div class="cert-link">
            <i class="bi bi-patch-check-fill"></i> Verified
          </div>
        </div>

        <div class="cert-row mt-5">
          <div class="cert-name">Giải Nhất cuộc thi Giải mã & Mã hóa</div>
          <div class="cert-org">Cryptography Competition</div>
          <div class="cert-link"><i class="bi bi-trophy-fill"></i> Winner</div>
        </div>

        <div class="cert-row mt-5">
          <div class="cert-name">Kinh nghiệm Leader & Team Management</div>
          <div class="cert-org">Leadership & Teamwork</div>
          <div class="cert-link"><i class="bi bi-people-fill"></i> Strong</div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.study-page {
  background: #fff;
  color: #1a1a1a;
  font-family: "Inter", sans-serif;
  padding-top: 80px;
}

/* HERO */
.sub-title {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #c5a059;
  font-weight: 600;
}

.display-title {
  font-family: "DM Serif Display", serif;
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1.1;
  margin-top: 15px;
}

.hero-quote {
  font-style: italic;
  color: #888;
  border-left: 2px solid #eee;
  padding-left: 20px;
  max-width: 300px;
}

.header-line {
  width: 100%;
  height: 1px;
  background: #eee;
}

/* TIMELINE */
.timeline-wrapper {
  position: relative;
  padding-left: 40px;
  border-left: 1px solid #ddd;
}

.timeline-item {
  position: relative;
  margin-bottom: 80px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -46px;
  top: 5px;
  width: 11px;
  height: 11px;
  background: #c5a059;
  border-radius: 50%;
}

.time-mark {
  font-weight: 600;
  color: #c5a059;
  margin-bottom: 10px;
  font-size: 14px;
}

.school-brand {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.school-brand h3 {
  font-family: "DM Serif Display", serif;
  font-size: 28px;
  margin: 0;
}

.fpt-logo-small {
  height: 30px;
  filter: grayscale(1);
}

.study-desc {
  font-size: 17px;
  line-height: 1.8;
  color: #555;
  max-width: 700px;
}

.achievements-list {
  margin-top: 20px;
  list-style: none;
  padding: 0;
}

.achievements-list li::before {
  content: "—";
  margin-right: 10px;
  color: #c5a059;
}

.skills-tags {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.skills-tags span {
  padding: 5px 15px;
  border: 1px solid #eee;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* STUDY GRID */
.bg-light-gold {
  background: #fdfaf4;
}

.study-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 300px 300px;
  gap: 20px;
}

.grid-box {
  position: relative;
  overflow: hidden;
}

.grid-box.tall {
  grid-row: span 2;
}

.grid-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
}

.img-1 img {
  object-position: center 60%;
}

.img-2 img {
  object-position: center 70%;
}

.img-3 img {
  object-position: center 70%;
}

.overlay-text {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: #fff;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: rgba(0, 0, 0, 0.5);
  padding: 5px 15px;
  opacity: 0;
  transition: 0.5s;
}

.grid-box:hover .overlay-text {
  opacity: 1;
}
.grid-box:hover img {
  transform: scale(1.03);
}

/* CERTIFICATIONS */
.cert-row {
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
  border-bottom: 1px solid #eee;
  transition: 0.3s;
}

.cert-row:hover {
  padding-left: 15px;
  background: #fafafa;
}

.cert-name {
  font-weight: 600;
  flex: 1;
}
.cert-org {
  color: #888;
  flex: 1;
}
.cert-link {
  color: #c5a059;
  font-size: 13px;
  font-weight: 600;
}

.py-10 {
  padding: 100px 0;
}

@media (max-width: 768px) {
  .study-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .grid-box.tall {
    grid-row: span 1;
    height: 300px;
  }
}
/* TỐI ƯU LUXURY MOBILE - PAGE STUDY */
@media (max-width: 991px) {
  .study-page {
    padding-top: 60px;
  }

  /* 1. Hero Section: Căn giữa và thu gọn */
  .study-hero {
    padding: 60px 0 30px;
    text-align: center;
  }

  .display-title {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
    margin-bottom: 20px;
  }

  .hero-quote {
    border-left: none;
    border-top: 1px solid #eee;
    padding: 20px 0 0;
    margin: 20px auto 0;
    max-width: 100%;
    font-size: 14px;
  }

  /* 2. Timeline: Thu hẹp lề để tối ưu không gian đọc */
  .academic-timeline {
    padding: 60px 0;
  }

  .timeline-wrapper {
    padding-left: 25px; /* Giảm lề trái */
  }

  .timeline-item::before {
    left: -31px; /* Căn chỉnh lại chấm tròn timeline */
  }

  .school-brand h3 {
    font-size: 22px; /* Thu nhỏ tên trường cho vừa 1 dòng phone */
    line-height: 1.3;
  }

  .study-desc {
    font-size: 15px;
    text-align: justify;
  }

  .skills-tags {
    flex-wrap: wrap; /* Cho phép các tag kỹ năng xuống dòng */
    gap: 8px;
  }

  .skills-tags span {
    font-size: 10px;
    padding: 4px 10px;
  }

  /* 3. Study Grid: Chuyển sang dạng trượt hoặc xếp chồng */
  .campus-vibes {
    padding: 60px 0;
  }

  .modern-title {
    font-size: 28px;
    text-align: center;
    margin-bottom: 10px;
  }

  .page-count {
    display: block;
    text-align: center;
    font-size: 11px;
    margin-bottom: 30px;
  }

  .study-grid {
    grid-template-columns: 1fr; /* 1 cột duy nhất */
    grid-template-rows: auto;
    gap: 15px;
  }

  .grid-box,
  .grid-box.tall {
    grid-row: span 1;
    height: 250px; /* Chiều cao cố định cho ảnh trên mobile */
  }

  .overlay-text {
    opacity: 1; /* Luôn hiện text trên mobile vì không có hover */
    font-size: 10px;
    bottom: 15px;
    left: 15px;
  }

  /* 4. Certifications: Chuyển sang dạng list dọc */
  .certifications {
    padding: 60px 0;
  }

  .cert-row {
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
    text-align: left;
  }

  .cert-name {
    font-size: 15px;
  }

  .cert-org {
    font-size: 13px;
    margin-bottom: 5px;
  }

  .cert-link {
    font-size: 12px;
  }
}
</style>
