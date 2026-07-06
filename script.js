const header = document.querySelector(".header");
document
  .querySelector(".menu")
  ?.addEventListener("click", () => header.classList.toggle("open"));
window.addEventListener("load", () =>
  document.querySelector(".loader")?.classList.add("hide"),
);
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("show");
    }),
  { threshold: 0.12 },
);
reveals.forEach((el) => io.observe(el));
document.querySelectorAll("[data-count]").forEach((el) => {
  let target = Number(el.dataset.count),
    current = 0,
    step = Math.max(1, Math.ceil(target / 80));
  const tick = () => {
    current += step;
    if (current >= target) current = target;
    el.textContent = current.toLocaleString("de-CH");
    if (current < target) requestAnimationFrame(tick);
  };
  tick();
});
function radar() {
  const c = document.getElementById("radar");
  if (!c) return;
  const ctx = c.getContext("2d"),
    cx = 190,
    cy = 145,
    r = 92,
    labels = ["Pass", "Tempo", "Ausdauer", "Technik", "Defensive", "Mental"],
    vals = [0.92, 0.79, 0.88, 0.86, 0.84, 0.94];
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.strokeStyle = "rgba(255,255,255,.15)";
  ctx.font = "12px Inter";
  ctx.fillStyle = "#ddd";
  for (let ring = 1; ring <= 5; ring++) {
    ctx.beginPath();
    labels.forEach((_, i) => {
      let a = (Math.PI * 2 * i) / labels.length - Math.PI / 2,
        x = cx + (Math.cos(a) * r * ring) / 5,
        y = cy + (Math.sin(a) * r * ring) / 5;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
  }
  ctx.beginPath();
  labels.forEach((l, i) => {
    let a = (Math.PI * 2 * i) / labels.length - Math.PI / 2;
    ctx.fillText(
      l,
      cx + Math.cos(a) * r * 1.18 - 20,
      cy + Math.sin(a) * r * 1.18,
    );
    let x = cx + Math.cos(a) * r * vals[i],
      y = cy + Math.sin(a) * r * vals[i];
    i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(200,168,90,.28)";
  ctx.fill();
  ctx.strokeStyle = "#c8a85a";
  ctx.lineWidth = 2;
  ctx.stroke();
}
radar();

const gameRows = [...document.querySelectorAll(".game-row")];
const gameSearch = document.getElementById("gameSearch");
let activeGameFilter = "alle";
function applyGameFilter() {
  const q = (gameSearch?.value || "").toLowerCase().trim();
  gameRows.forEach((row) => {
    const status = row.dataset.status;
    const side = row.dataset.side;
    const text = row.dataset.text;
    const isSchwam = text.includes("fc schwamendingen");
    let ok = true;
    if (activeGameFilter === "schwamendingen") ok = isSchwam;
    if (activeGameFilter === "heim") ok = side === "heim";
    if (activeGameFilter === "auswärts") ok = side === "auswärts";
    if (["gespielt", "forfait", "nullwertung"].includes(activeGameFilter))
      ok = status === activeGameFilter;
    if (q && !text.includes(q)) ok = false;
    row.style.display = ok ? "" : "none";
  });
}
document.querySelectorAll("[data-game-filter]").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll("[data-game-filter]")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeGameFilter = btn.dataset.gameFilter;
    applyGameFilter();
  });
});
gameSearch?.addEventListener("input", applyGameFilter);

/* === FINAL HAMBURGER JS === */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const menu = document.querySelector(".menu");

  if (header && menu) {
    menu.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
      header.classList.toggle("open");
      header.classList.toggle("nav-open");
      document.body.classList.toggle("menu-open");
    });
  }

  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelector(".header")?.classList.remove("open", "nav-open");
      document.body.classList.remove("menu-open");
    });
  });
});
