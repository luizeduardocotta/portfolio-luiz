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

  video.play().catch(() => {
    console.log("Autoplay bloqueado pelo navegador");
  });
});

/* =========================
   CARROSSEL INFINITO – SEM SALTO
========================= */
const carousel = document.getElementById('carousel');
const track = document.getElementById('carouselTrack');

let speed = 1.2;
let position = 0;
let isPaused = false;

// DUPLICA CONTEÚDO UMA VEZ
track.innerHTML += track.innerHTML;

const phones = document.querySelectorAll('.phone');
const totalWidth = track.scrollWidth / 2;

function animate() {
  if (!isPaused) {
    position -= speed;

    if (Math.abs(position) >= totalWidth) {
      position += totalWidth;
    }

    track.style.transform = `translateX(${position}px)`;
    updateActive();
  }

  requestAnimationFrame(animate);
}

function updateActive() {
  const center = carousel.offsetWidth / 2;

  phones.forEach(phone => {
    const rect = phone.getBoundingClientRect();
    const phoneCenter = rect.left + rect.width / 2;

    if (Math.abs(center - phoneCenter) < rect.width * 0.6) {
      phone.classList.add('active');
    } else {
      phone.classList.remove('active');
    }
  });
}

// PAUSA AO INTERAGIR
carousel.addEventListener('mouseenter', () => isPaused = true);
carousel.addEventListener('mouseleave', () => isPaused = false);
carousel.addEventListener('touchstart', () => isPaused = true);
carousel.addEventListener('touchend', () => isPaused = false);

animate();
