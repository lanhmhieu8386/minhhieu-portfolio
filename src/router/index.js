import AboutView from "@/component/AboutView.vue";
import HomeView from "@/component/HomeView.vue";
import LifeView from "@/component/LifeView.vue";
import Project from "@/component/Project.vue";
import StudyView from "@/component/StudyView.vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  { path: "/study", name: "study", component: StudyView },
  { path: "/life", name: "life", component: LifeView },
  { path: "/project", name: "project", component: Project },
];

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // 1. Nếu có hash (ví dụ: #01), cuộn đến phần tử đó
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth", // Cuộn mượt mà
        top: 80, // Offset để không bị Header đè lên (chỉnh số này cho khớp độ cao Header của mày)
      };
    }

    // 2. Nếu có vị trí đã lưu (nhấn Back/Forward), quay lại chỗ cũ
    if (savedPosition) {
      return savedPosition;
    }

    // 3. Mặc định nhảy lên đầu trang
    return { top: 0 };
  },
});
export default router;
