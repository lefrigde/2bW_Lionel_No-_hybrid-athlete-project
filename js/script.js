// Mobile nav toggle
const toggleBtn = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

// Max HR form (only on endurance page)
const hrForm = document.getElementById("hrForm");
if (hrForm) {
  hrForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const age = Number(document.getElementById("ageInput").value);
    const result = document.getElementById("hrResult");

    if (!age || age < 10 || age > 90) {
      result.textContent = "Bitte ein gültiges Alter (10–90) eingeben.";
      return;
    }

    const maxHr = 220 - age;
    result.textContent = `Geschätzter Maximalpuls: ${maxHr} bpm`;
  });
}
