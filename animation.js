  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // se oculta al salir
          }
        });
      },
      { threshold: 0.2 } // visible al 20%
    );

    elements.forEach(el => observer.observe(el));
  });