<script setup>
import avatar from "@/assets/avatar.jpg";
import school1 from "@/assets/school1.jpg";
import school2 from "@/assets/school2.jpg";
import school3 from "@/assets/school3.jpg";
import fptLogo from "@/assets/fpt-logo.png";
import avatar2 from "@/assets/avatar2.jpg";
</script>

<template>
  <main style="margin-top: 80px">
    <!-- HERO -->
    <section id="home" class="container py-5">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h1 class="fw-bold">Hi 👋, I'm Minh Hiếu</h1>
          <h4 class="text-muted">Backend Developer</h4>
          <p class="mt-3">
            I am a Backend Developer specializing in building robust systems,
            databases, and server-side logic.
          </p>

          <!-- SOCIAL ICONS -->
          <div class="mt-3">
            <a href="https://facebook.com" target="_blank" class="icon">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://zalo.me" target="_blank" class="icon">
              <i class="bi bi-chat-dots"></i>
            </a>
            <a href="https://github.com" target="_blank" class="icon">
              <i class="bi bi-github"></i>
            </a>
          </div>
        </div>

        <div class="col-lg-6 text-center">
          <div class="avatar-wave">
            <img :src="avatar" alt="Minh Hieu" />
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="about-modern py-5">
      <div class="container">
        <h2 class="text-center mb-5">About Me</h2>

        <div class="row align-items-stretch">
          <!-- Image -->
          <div class="col-md-5 mb-4 mb-md-0">
            <div class="about-photo">
              <img :src="avatar2" alt="Profile" />
            </div>
          </div>

          <!-- Projects -->
          <div class="col-md-7 d-flex">
            <div class="about-cards w-100">
              <div class="about-card">
                <h5>WearZone</h5>
                <span>T-Shirt Sales System</span>
                <p>Java · SQL Server</p>
              </div>

              <div class="about-card">
                <h5>MHS</h5>
                <span>Shorts Sales System</span>
                <p>Java · JavaScript · Bootstrap · SQL Server</p>
              </div>

              <div class="about-card">
                <h5>FourPriceHotpot</h5>
                <span>Restaurant Reservation System</span>
                <p>Spring Boot · Vue.js · SQL Server · REST API</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Download CV -->
        <div class="text-center mt-5">
          <a
            href="/LanhMinhHieu_CV.pdf"
            download
            class="btn btn-dark btn-lg cv-btn"
          >
            <i class="bi bi-download me-2"></i> Download CV
          </a>
        </div>
      </div>
    </section>

    <!-- 
SKILL -->
    <section id="skills" class="skills-section py-5">
      <div class="container">
        <h2 class="text-center fw-bold mb-5">My Skills</h2>

        <div class="row skills-box position-relative">
          <!-- Divider -->
          <div class="skills-divider d-none d-md-block"></div>

          <!-- Backend -->
          <div class="col-md-6 mb-4">
            <div class="skills-card">
              <h4 class="text-center mb-4">Backend Development</h4>

              <div class="skill-row">
                <i class="devicon-java-plain colored"></i>
                <div>
                  <h6>Java</h6>
                  <span>Advanced</span>
                </div>
              </div>

              <div class="skill-row">
                <i class="devicon-spring-plain colored"></i>
                <div>
                  <h6>Spring Boot</h6>
                  <span>Intermediate</span>
                </div>
              </div>

              <div class="skill-row">
                <i class="devicon-microsoftsqlserver-plain colored"></i>
                <div>
                  <h6>SQL Server</h6>
                  <span>Advanced</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Frontend -->
          <div class="col-md-6 mb-4">
            <div class="skills-card">
              <h4 class="text-center mb-4">Frontend Development</h4>

              <div class="skill-row">
                <i class="devicon-html5-plain colored"></i>
                <div>
                  <h6>HTML</h6>
                  <span>Advanced</span>
                </div>
              </div>

              <div class="skill-row">
                <i class="devicon-css3-plain colored"></i>
                <div>
                  <h6>CSS</h6>
                  <span>Advanced</span>
                </div>
              </div>

              <div class="skill-row">
                <i class="devicon-javascript-plain colored"></i>
                <div>
                  <h6>JavaScript</h6>
                  <span>Intermediate</span>
                </div>
              </div>

              <div class="skill-row">
                <i class="devicon-bootstrap-plain colored"></i>
                <div>
                  <h6>Bootstrap</h6>
                  <span>Intermediate</span>
                </div>
              </div>

              <div class="skill-row">
                <i class="devicon-vuejs-plain colored"></i>
                <div>
                  <h6>Vue.js</h6>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="bg-light py-5">
      <div class="container text-center">
        <img :src="fptLogo" width="120" class="mb-3" />
        <h2>FPT Polytechnic</h2>

        <div class="row mt-4">
          <div class="col-md-4">
            <img :src="school1" class="edu-img" />
          </div>
          <div class="col-md-4">
            <img :src="school2" class="edu-img" />
          </div>
          <div class="col-md-4">
            <img :src="school3" class="edu-img" />
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="contact-section py-5">
      <div class="container text-center">
        <h2 class="mb-4">Get In Touch</h2>
        <p class="text-muted mb-5">
          Feel free to contact me for work or collaboration
        </p>

        <div class="row justify-content-center g-4">
          <!-- Facebook -->
          <div class="col-6 col-md-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              class="contact-card"
            >
              <i class="bi bi-facebook"></i>
              <h6>Facebook</h6>
              <span>Visit my profile</span>
            </a>
          </div>

          <!-- Zalo -->
          <div class="col-6 col-md-3">
            <a
              href="https://zalo.me/0332654198"
              target="_blank"
              class="contact-card"
            >
              <i class="bi bi-chat-dots"></i>
              <h6>Zalo</h6>
              <span>0332654198</span>
            </a>
          </div>

          <!-- Email -->
          <div class="col-6 col-md-3">
            <a href="mailto:hieulm24@gmail.com" class="contact-card">
              <i class="bi bi-envelope"></i>
              <h6>Email</h6>
              <span>hieulm24@gmail.com</span>
            </a>
          </div>

          <!-- Phone -->
          <div class="col-6 col-md-3">
            <a href="tel:0332654198" class="contact-card">
              <i class="bi bi-telephone"></i>
              <h6>Phone</h6>
              <span>0332654198<br />0329984397</span>
            </a>
          </div>
        </div>

        <!-- Download CV -->
        <div class="mt-5">
          <a
            href="/LanhMinhHieu_CV.pdf"
            download
            class="btn btn-dark btn-lg cv-btn"
          >
            <i class="bi bi-download me-2"></i> Download CV
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.about-modern {
  background: #f8f9fa;
}

.about-photo {
  max-width: 380px; /* GIỚI HẠN NGANG */
  height: 420px; /* CHIỀU CAO CỐ ĐỊNH */
  margin: auto;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}
.about-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
}

/* Cards */
.about-cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(6px);
  padding: 24px;
  border-radius: 18px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
  transition: all 0.35s ease;
  border-left: 4px solid #0d6efd;
}

.about-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
}

.about-card h5 {
  margin: 0;
  font-weight: 700;
}

.about-card span {
  display: block;
  font-size: 14px;
  color: #495057;
  margin: 6px 0;
}

.about-card p {
  margin: 0;
  font-size: 14px;
  color: #6c757d;
}

.contact-section {
  background: #f8f9fa;
}

/* Card */
.contact-card {
  display: block;
  padding: 30px 20px;
  background: #fff;
  border-radius: 20px;
  text-decoration: none;
  color: #000;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s ease;
  height: 100%;
}

.contact-card i {
  font-size: 36px;
  margin-bottom: 15px;
  display: block;
  color: #000;
  transition: 0.3s;
}

.contact-card h6 {
  font-weight: 600;
  margin-bottom: 5px;
}

.contact-card span {
  font-size: 14px;
  color: #6c757d;
}

/* Hover effect */
.contact-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.contact-card:hover i {
  color: #0d6efd;
}

/* Download CV button */
.cv-btn {
  padding: 14px 40px;
  border-radius: 50px;
  transition: 0.3s;
}

.cv-btn:hover {
  transform: scale(1.05);
}

/* About wrapper */
.about-wrapper {
  max-width: 1100px;
}

/* Box ảnh */
.about-image-box {
  height: 100%;
  min-height: 360px;
  max-height: 420px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
}

/* Ảnh */
.about-image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Projects */
.about-projects {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-item {
  display: flex;
  gap: 16px;
  padding: 18px 20px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.project-item p {
  margin: 4px 0 0;
  color: #6c757d;
}

/* Index */
.project-item .index {
  font-size: 28px;
  font-weight: 700;
  color: #0d6efd;
}

/* Project card */
.project-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: all 0.35s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.15);
}

/* Index number */
.project-index {
  position: absolute;
  top: -14px;
  left: -14px;
  background: #000;
  color: #fff;
  font-weight: bold;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar {
  width: 260px;
  border-radius: 50%;
}

.about-img {
  width: 220px;
  border-radius: 20px;
}

.edu-img {
  width: 100%;
  border-radius: 15px;
}

.icon {
  font-size: 28px;
  margin-right: 16px;
  color: #000;
  transition: all 0.3s ease;
}

.icon:hover {
  color: #0d6efd;
  transform: translateY(-6px) scale(1.2);
}
.avatar-wave {
  width: 280px;
  height: 280px;
  background: #0d6efd;
  padding: 8px;

  /* QUAN TRỌNG */
  overflow: hidden;

  animation: wave 4s ease-in-out infinite;

  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);
}

.avatar-wave img {
  width: 100%;
  height: 100%;
  object-fit: cover;

  /* KHÔNG TRÒN ĐỀU */
  border-radius: 50%;
}

/* LƯỢN RÕ – BIÊN ĐỘ LỚN */
@keyframes wave {
  0% {
    border-radius: 60% 40% 55% 45% / 60% 45% 55% 40%;
  }
  33% {
    border-radius: 45% 55% 40% 60% / 50% 60% 40% 55%;
  }
  66% {
    border-radius: 55% 45% 60% 40% / 40% 55% 60% 45%;
  }
  100% {
    border-radius: 60% 40% 55% 45% / 60% 45% 55% 40%;
  }
}

.skills-section {
  background: #f8f9fa;
}

.skills-box {
  margin-top: 40px;
}

/* Divider */
.skills-divider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #ccc, transparent);
  transform: translateX(-50%);
}

/* Card */
.skills-card {
  background: #fff;
  padding: 30px;
  border-radius: 22px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.35s ease;
}

.skills-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
}

/* Skill row */
.skill-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 18px;
  border-radius: 14px;
  transition: all 0.3s ease;
}

.skill-row:hover {
  background: #f1f3f5;
  transform: translateX(6px);
}

.skill-row i {
  font-size: 42px;
}

.skill-row h6 {
  margin: 0;
  font-weight: 600;
}

.skill-row span {
  font-size: 14px;
  color: #6c757d;
}

/* Colors */
.java {
  color: #ff6b6b;
  width: 85%;
}
.sql {
  color: #4dabf7;
  width: 80%;
}
.spring {
  color: #51cf66;
  width: 70%;
}
.html {
  color: #ff922b;
  width: 90%;
}
.css {
  color: #339af0;
  width: 85%;
}
.js {
  color: #fcc419;
  width: 80%;
}
.bs {
  color: #7950f2;
  width: 75%;
}
.vue {
  color: #20c997;
  width: 78%;
}

@keyframes loadSkill {
  from {
    width: 0;
  }
}
#home {
  display: flex;
  justify-content: center; /* căn giữa ngang */
}
</style>
