const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const cookie = document.querySelector("[data-cookie]");
const cookieAccept = document.querySelector("[data-cookie-accept]");
const booking = document.querySelector("#booking");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

navToggle.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-trip]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-trip]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});

document.querySelector("[data-swap]").addEventListener("click", () => {
  const origin = booking.elements.origin;
  const destination = booking.elements.destination;
  [origin.value, destination.value] = [destination.value, origin.value];
});

booking.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = booking.querySelector(".primary-action");
  button.textContent = "Búsqueda preparada";
  window.setTimeout(() => {
    button.textContent = "Buscar";
  }, 1800);
});

if (localStorage.getItem("hispaflyCookies") === "accepted") {
  cookie.classList.add("is-hidden");
}

cookieAccept.addEventListener("click", () => {
  localStorage.setItem("hispaflyCookies", "accepted");
  cookie.classList.add("is-hidden");
});
