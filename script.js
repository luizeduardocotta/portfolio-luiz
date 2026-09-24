/* ==============================================
   INTERAÇÕES & ANIMAÇÕES LEVES DO PORTFÓLIO
============================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Animação suave ao rolar até os links internos
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Efeito de opacidade na Navbar ao rolar a página
  const nav = document.querySelector(".nav");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.background = "rgba(10, 12, 16, 0.95)";
      nav.style.padding = "14px 0";
    } else {
      nav.style.background = "rgba(10, 12, 16, 0.85)";
      nav.style.padding = "18px 0";
    }
  });
});