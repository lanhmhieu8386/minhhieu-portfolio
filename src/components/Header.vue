<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar">
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand" href="#home">
        <span class="brand-text">HieuDev</span>
      </a>

      <!-- Menu -->
      <div class="navbar-menu">
        <a href="#home" class="nav-item">Home</a>
        <a href="#about" class="nav-item">About</a>
        <a href="#skills" class="nav-item">Skills</a>
        <a href="#education" class="nav-item">Education</a>
        <a href="#contact" class="nav-item">Contact</a>
      </div>
    </div>
  </nav>
</template>

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

.navbar-menu {
  display: flex;
  align-items: center;
}

.nav-item {
  margin-left: 24px;
  font-weight: 500;
  color: #0f172a;
  text-decoration: none;
  position: relative;
  transition: 0.3s;
}

/* underline hover */
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
  color: #0d6efd;
}

.nav-item:hover::after {
  width: 100%;
}
</style>
