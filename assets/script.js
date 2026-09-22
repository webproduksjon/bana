const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  const closeMenu = () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  };
  const toggleMenu = (event) => {
    if (event) event.preventDefault();
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  };
  menuToggle.addEventListener("click", toggleMenu);
  menuToggle.addEventListener(
    "touchend",
    (event) => {
      if (event.cancelable) event.preventDefault();
      toggleMenu();
    },
    { passive: false },
  );
  document.addEventListener("pointerdown", (event) => {
    if (!mainNav.classList.contains("open")) return;
    if (!mainNav.contains(event.target) && !menuToggle.contains(event.target))
      closeMenu();
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });
}

// Use an immediate, explicit anchor jump. Smooth scrolling can race with
// lazy-loaded gallery images and move the contact target while the animation
// is still running, which can leave the first Kontakt click in the gallery.
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const selector = link.getAttribute("href");
    const target = selector ? document.querySelector(selector) : null;
    if (!target) return;
    event.preventDefault();
    if (mainNav && mainNav.classList.contains("open")) {
      mainNav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
    history.replaceState(null, "", selector);
    target.scrollIntoView({ behavior: "auto", block: "start" });
  });
});
