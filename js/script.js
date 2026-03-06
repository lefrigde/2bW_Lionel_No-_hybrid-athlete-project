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
// Supabase Verbindung
const supabaseUrl = "https://swensdexmakrolenkxcs.supabase.co";
const supabaseKey = "sb_publishable_pV-jHdq6Qzex6JtKFCAgNQ_O9yA6w58";
const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);

const goalForm = document.getElementById("goalForm");

if (goalForm) {
  goalForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("goalName").value;
    const goal = document.getElementById("goalType").value;
    const level = document.getElementById("goalLevel").value;
    const message = document.getElementById("goalMessage");

    const { error } = await supabase
      .from("training_goals")
      .insert([{ name, goal, level }]);

    if (error) {
      message.textContent = "Fehler beim Speichern.";
      console.log(error);
    } else {
      message.textContent = "Ziel erfolgreich gespeichert.";
      goalForm.reset();
    }
  });
}
    const maxHr = 220 - age;
    result.textContent = `Geschätzter Maximalpuls: ${maxHr} bpm`;
  });
}
