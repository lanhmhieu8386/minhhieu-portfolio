<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row align-items-center text-center text-md-start">
        <!-- Left -->
        <div class="col-md-4 mb-3 mb-md-0">
          <h5 class="fw-bold text-white mb-1">Minh Hiếu</h5>
          <p class="footer-role mb-0">Backend Developer</p>
        </div>

        <!-- Center -->
        <div class="col-md-4 text-center mb-3 mb-md-0">
          <a href="#home" class="footer-link">Home</a>
          <a href="#about" class="footer-link">About</a>
          <a href="#skills" class="footer-link">Skills</a>
          <a href="#contact" class="footer-link">Contact</a>
        </div>

        <!-- Right -->
        <div class="col-md-4 text-center text-md-end">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            class="footer-icon"
          >
            <i class="bi bi-facebook"></i>
          </a>
          <a
            href="https://zalo.me/0332654198"
            target="_blank"
            class="footer-icon"
          >
            <i class="bi bi-chat-dots"></i>
          </a>
          <a href="mailto:hieulm24@gmail.com" class="footer-icon">
            <i class="bi bi-envelope"></i>
          </a>
          <a href="https://github.com/" target="_blank" class="footer-icon">
            <i class="bi bi-github"></i>
          </a>
        </div>
      </div>

      <hr class="footer-line" />

      <p class="text-center footer-copy mb-0">
        © 2026 Minh Hiếu. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background: linear-gradient(135deg, #4b5774, #5a77f7);
  padding: 50px 0;
}

.footer-role {
  color: #94a3b8;
}

.footer-link {
  margin: 0 12px;
  color: #e5e7eb;
  text-decoration: none;
  font-weight: 500;
  position: relative;
}

.footer-link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background: #38bdf8;
  left: 0;
  bottom: -5px;
  transition: 0.3s;
}

.footer-link:hover::after {
  width: 100%;
}

.footer-icon {
  margin-left: 16px;
  font-size: 22px;
  color: #e5e7eb;
  transition: 0.3s;
}

.footer-icon:hover {
  color: #38bdf8;
  transform: translateY(-4px);
}

.footer-line {
  border-color: rgba(255, 255, 255, 0.15);
  margin: 30px 0;
}

.footer-copy {
  color: #94a3b8;
  font-size: 14px;
}
</style>
