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

window.addEventListener("mousemove", (event) => {
  if (!cursorGlow) return;

  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
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

const cards = document.querySelectorAll(
  ".glass-card, .project-card, .skill-column, .publication-card, .contact-card"
);

cards.forEach((card) => {
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
