document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const cursorGlow = document.getElementById("cursorGlow");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }

  if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", (event) => {
      cursorGlow.style.left = `${event.clientX}px`;
      cursorGlow.style.top = `${event.clientY}px`;
      cursorGlow.style.opacity = "1";
    });

    window.addEventListener("mouseleave", () => {
      cursorGlow.style.opacity = "0";
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  } else {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
  }

  const interactiveCards = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card, .timeline-card, .publication-card, .contact-card"
  );

  interactiveCards.forEach((card) => {
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      card.style.background = `
        radial-gradient(circle at ${x}px ${y}px, rgba(252, 9, 135, 0.16), transparent 36%),
        linear-gradient(145deg, rgba(255, 255, 255, 0.095), rgba(255, 255, 255, 0.045))
      `;
    });

    card.addEventListener("mouseleave", () => {
      card.style.background = "";
    });
  });
});
