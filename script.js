/* =========================
   ANIMAÇÃO DOS PROJETOS
========================= */
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));


/* =========================
   HERO VIDEO - MOBILE
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".hero-video");

  if (!video) return;

  const isMobile = window.innerWidth < 768;

  video.src = isMobile
    ? "video/hero-mobile.mp4"
    : "video/hero-desktop.mp4";

  video.load();

  // tenta forçar play (necessário em alguns navegadores)
  video.play().catch(() => {
    console.log("Autoplay bloqueado pelo navegador");
  });
});
