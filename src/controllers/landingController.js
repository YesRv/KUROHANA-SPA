// export async function landingController() {
//   const nav = document.getElementById("landing-nav");
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 60) {
//       nav.style.background = "rgba(10, 1, 3, 0.97)";
//     } else {
//       nav.style.background = "rgba(10, 1, 3, 0.85)";
//     }
//   });

//   document.querySelectorAll(".landing-nav__links a").forEach((link) => {
//     link.addEventListener("click", (e) => {
//       const href = link.getAttribute("href");
//       if (
//         ["#sobre", "#tecnologias", "#equipo", "#inicio", "#branding"].includes(
//           href,
//         )
//       ) {
//         e.preventDefault();
//         const target = document.querySelector(href);
//         if (target) target.scrollIntoView({ behavior: "smooth" });
//       }
//     });
//   });

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("landing-visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.15 },
//   );

//   document
//     .querySelectorAll(
//       ".landing-sobre, .landing-tech, .landing-equipo, .landing-footer, .landing-card, .landing-tech__item, .landing-sobre__card",
//     )
//     .forEach((el) => observer.observe(el));

//   // ── Carrusel Branding ──
//   const carrusel = document.getElementById("branding-carrusel");
//   if (carrusel) {
//     document.getElementById("branding-prev")?.addEventListener("click", () => {
//       carrusel.scrollBy({ left: -400, behavior: "smooth" });
//     });
//     document.getElementById("branding-next")?.addEventListener("click", () => {
//       carrusel.scrollBy({ left: 400, behavior: "smooth" });
//     });
//   }
// }

import { initSakura } from "./sakuraController.js";
export async function landingController() {
  initSakura();

  const nav = document.getElementById("landing-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      nav.style.background = "rgba(10, 1, 3, 0.97)";
    } else {
      nav.style.background = "rgba(10, 1, 3, 0.85)";
    }
  });

  document.querySelectorAll(".landing-nav__links a").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (
        ["#sobre", "#tecnologias", "#equipo", "#inicio", "#branding"].includes(
          href,
        )
      ) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("landing-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  document
    .querySelectorAll(
      ".landing-sobre, .landing-tech, .landing-equipo, .landing-footer, .landing-card, .landing-tech__item, .landing-sobre__card",
    )
    .forEach((el) => observer.observe(el));

  // ── Carrusel Branding ──
  const carrusel = document.getElementById("branding-carrusel");
  if (carrusel) {
    document.getElementById("branding-prev")?.addEventListener("click", () => {
      carrusel.scrollBy({ left: -400, behavior: "smooth" });
    });
    document.getElementById("branding-next")?.addEventListener("click", () => {
      carrusel.scrollBy({ left: 400, behavior: "smooth" });
    });
  }
}