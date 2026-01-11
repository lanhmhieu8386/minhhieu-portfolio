<template>
  <main>
    <!-- HERO -->
    <section class="bg-light py-5 text-center">
      <div class="container">
        <h1 class="fw-bold">Xin chào 👋, tôi là Minh Hiếu</h1>
        <h4 class="text-muted mb-3">Frontend Developer</h4>
        <p class="lead">
          Sinh viên CNTT, yêu thích lập trình web và xây dựng ứng dụng thực tế.
        </p>

        <a href="/cv-minh-hieu.pdf" download class="btn btn-dark btn-lg mt-3">
          Download CV
        </a>
      </div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="container py-5">
      <h2 class="text-center mb-4">About Me</h2>
      <p class="text-center">
        Tôi từng làm các project Java Swing, SQL Server và VueJS. Mục tiêu là
        Fresher / Intern Frontend Developer.
      </p>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">Skills</h2>

        <div class="row text-center">
          <div class="col-md-3 mb-3" v-for="skill in skills" :key="skill">
            <div class="card shadow-sm">
              <div class="card-body fw-bold">{{ skill }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="container py-5">
      <h2 class="text-center mb-4">Projects</h2>

      <div class="row">
        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">Hệ thống bán áo phông</h5>
              <p class="card-text">
                Java Swing + SQL Server, quản lý sản phẩm, hóa đơn, khách hàng.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6 mb-4">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">Portfolio cá nhân</h5>
              <p class="card-text">
                VueJS + Vue Router + Bootstrap, deploy Vercel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section id="contact" class="bg-dark text-white py-5">
      <div class="container text-center">
        <h2 class="mb-3">Contact</h2>
        <p>Email: hieu@gmail.com</p>
        <p>GitHub: github.com/your-username</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "VueJS",
        "Vue Router",
        "Bootstrap",
        "Java",
        "SQL Server",
      ],
    };
  },
};
</script>
