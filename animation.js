
  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries, io) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            io.unobserve(entry.target); // se activa una sola vez
          }
        });
      },
      {
        threshold: 0.1,            // muy bajo → se adapta a pantallas chicas
        rootMargin: "0px 0px -10% 0px" // dispara antes de salir del viewport
      }
    );

    elements.forEach(el => observer.observe(el));
  });


