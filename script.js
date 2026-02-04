// === UBAH DATA KONTAK DI SINI ===
const WHATSAPP_NUMBER = "62812XXXXXXXX"; // format internasional, tanpa +
const EMAIL = "rifkibimantarasaputra@gmail.com";
const BRAND = "Rifdev";

const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const waBtn = document.getElementById("waBtn");
const emailBtn = document.getElementById("emailBtn");

function buildWaLink(text) {
  const msg = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}

waBtn.href = buildWaLink(`Halo ${BRAND}, saya mau bikin website. Bisa konsultasi?`);
emailBtn.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Konsultasi Website — ${BRAND}`)}`;

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const need = data.get("need");
  const msg = data.get("msg");

  const text =
`Halo ${BRAND}, saya ${name}.
Kebutuhan: ${need}
Pesan: ${msg}

Boleh minta estimasi harga dan timeline?`;

  window.open(buildWaLink(text), "_blank");
});

// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
let open = false;

menuBtn.addEventListener("click", () => {
  open = !open;
  mobileNav.style.display = open ? "block" : "none";
  mobileNav.setAttribute("aria-hidden", open ? "false" : "true");
});

mobileNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    open = false;
    mobileNav.style.display = "none";
    mobileNav.setAttribute("aria-hidden", "true");
  }
});
