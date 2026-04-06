<template>
  <footer class="luxury-footer" id="contact-footer">
    <div class="container-fluid px-lg-5">
      <div class="footer-top">
        <h2 class="massive-text">Lãnh Minh Hiếu Developer</h2>
      </div>

      <div class="footer-main">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6">
            <div class="footer-info">
              <span class="label">Minh Hiếu Dev</span>
              <p class="description">
                Backend Developer chuyên xây dựng hệ thống, API và xử lý dữ
                liệu, tối ưu hiệu suất và đảm bảo vận hành ổn định cho hệ thống.
              </p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="footer-nav">
              <span class="label">Navigation</span>
              <div class="link-grid">
                <router-link to="/about" class="f-link">Về tôi</router-link>
                <router-link to="/study" class="f-link">Học tập</router-link>
                <router-link to="/project" class="f-link">Dự án</router-link>
                <router-link to="/life" class="f-link">Đời sống</router-link>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-12">
            <div class="footer-contact">
              <span class="label">Connect With Me</span>
              <div class="social-row">
                <a href="https://github.com/lanhmhieu8386" class="social-box"
                  ><span>Github</span></a
                >
                <a
                  href="https://www.facebook.com/ProfileHieuMongMo.Developer"
                  class="social-box"
                  ><span>Facebook</span></a
                >
                <a
                  href="https://zalo.me/0332654198"
                  target="_blank"
                  class="social-box"
                >
                  <span>Zalo</span>
                </a>
              </div>
              <div class="contact-detail mt-4">
                <a href="mailto:hello@bichhue.me" class="email-link"
                  >hieulm24@gmail.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div
          class="d-flex justify-content-between align-items-center flex-wrap gap-3"
        >
          <p class="copyright">
            © 2026 LÃNH MINH HIẾU — CODE BY
            <a
              href="https://zalo.me/0332654198"
              target="_blank"
              class="zalo-link"
            >
              HieuDEV </a
            >.
          </p>
          <div class="legal-links">
            <span class="location-stamp">HA NOI / VIET NAM</span>
            <span class="divider-dot"></span>
            <span class="time-stamp">15:28 PM</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.luxury-footer {
  /* Xanh đá nhạt cực sang (Ice Blue) */
  background: #f4f7f9;
  color: #2c3e50;
  padding: 120px 0 40px 0;
  font-family: "Inter", sans-serif;
  overflow: hidden;
  border-top: 1px solid #e1e8ed;
}

/* Chữ chạy lớn làm nền màu Hồng phấn siêu nhạt (Soft Rose) */
.massive-text {
  font-family: "DM Serif Display", serif;
  font-size: clamp(3rem, 12vw, 10rem);
  color: #fce4ec; /* Hồng pastel cực nhẹ */
  white-space: nowrap;
  margin-bottom: 60px;
  line-height: 1;
  pointer-events: none;
  letter-spacing: -2px;
}

.footer-main {
  padding-top: 40px;
  margin-bottom: 80px;
}

.label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 4px;
  /* Màu xanh navy lạnh để cân bằng với nền */
  color: #5d8aa8;
  margin-bottom: 25px;
}

.description {
  font-size: 15px;
  line-height: 1.9;
  color: #7f8c8d;
  max-width: 320px;
  font-weight: 300;
}

/* Link Grid */
.link-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.f-link {
  color: #444;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: 0.4s ease;
  width: fit-content;
  position: relative;
}

.f-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: #5d8aa8;
  transition: 0.4s;
}

.f-link:hover {
  color: #5d8aa8;
}

.f-link:hover::after {
  width: 100%;
}

/* Social Boxes - Viền mỏng & Bo nhẹ */
.social-row {
  display: flex;
  gap: 12px;
}

.social-box {
  border: 1px solid rgba(93, 138, 168, 0.2);
  padding: 8px 22px;
  color: #5d8aa8;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.4s;
  background: #fff;
}

.social-box:hover {
  background: #5d8aa8;
  color: #fff;
  border-color: #5d8aa8;
  transform: translateY(-3px);
}

.email-link {
  font-size: 22px;
  font-family: "DM Serif Display", serif;
  color: #2c3e50;
  text-decoration: none;
  border-bottom: 1px solid rgba(44, 62, 80, 0.1);
  transition: 0.3s;
}

.email-link:hover {
  color: #5d8aa8;
  border-color: #5d8aa8;
}

/* Bottom Bar */
.footer-bottom {
  border-top: 1px solid #e1e8ed;
  padding-top: 40px;
}

.copyright {
  font-size: 9px;
  letter-spacing: 2px;
  color: #adb5bd;
}

.location-stamp,
.time-stamp {
  font-size: 9px;
  letter-spacing: 2px;
  color: #5d8aa8;
  font-weight: 700;
}

.divider-dot {
  display: inline-block;
  width: 3px;
  height: 3px;
  background: #ced4da;
  border-radius: 50%;
  margin: 0 15px;
  vertical-align: middle;
}

@media (max-width: 768px) {
  .massive-text {
    margin-bottom: 20px;
  }
  .luxury-footer {
    padding: 60px 0 30px;
  }
}
@media (max-width: 991px) {
  .luxury-footer {
    padding: 60px 0 40px;
    text-align: center; /* Căn giữa toàn bộ trên mobile */
  }

  .massive-text {
    font-size: 50px; /* Thu nhỏ hẳn lại trên mobile cho tinh tế */
    white-space: normal; /* Cho phép ngắt dòng nếu tên quá dài */
    margin-bottom: 40px;
    letter-spacing: -1px;
    opacity: 0.5; /* Làm mờ đi một chút để làm nền đúng nghĩa */
  }

  .footer-main {
    margin-bottom: 40px;
  }

  .description {
    margin: 0 auto 30px; /* Căn giữa đoạn mô tả */
    font-size: 14px;
  }

  .link-grid {
    justify-content: center; /* Căn giữa các link điều hướng */
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .f-link {
    font-size: 12px;
  }

  .social-row {
    justify-content: center; /* Căn giữa các nút social */
    flex-wrap: wrap; /* Tự xuống dòng nếu màn hình quá hẹp */
    gap: 10px;
  }

  .social-box {
    padding: 8px 15px; /* Thu nhỏ nút một chút */
    flex: 1 1 auto; /* Cho phép nút co giãn nhẹ */
    min-width: 100px;
  }

  .email-link {
    font-size: 18px; /* Giảm size email cho đỡ thô */
  }

  /* Phần bản quyền bên dưới */
  .footer-bottom .d-flex {
    flex-direction: column !important; /* Xếp chồng lên nhau */
    gap: 15px !important;
  }

  .legal-links {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.zalo-link {
  color: #c5a059; /* vàng luxury */
  text-decoration: none;
  font-weight: 600;
  position: relative;
  transition: 0.3s;
}

.zalo-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 1px;
  background: #c5a059;
  transition: 0.3s;
}

.zalo-link:hover {
  color: #fff;
}

.zalo-link:hover::after {
  width: 100%;
}
</style>
