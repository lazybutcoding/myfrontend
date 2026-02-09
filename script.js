const password = document.getElementById("password");
const strength = document.getElementById("strength");
const message = document.getElementById("message");

password.addEventListener("input", () => {
  const value = password.value;
  let score = 0;

  if (value.length >= 8) score++;
  if (/[A-Z]/.test(value)) score++;
  if (/[0-9]/.test(value)) score++;
  if (/[^A-Za-z0-9]/.test(value)) score++;

  if (value.length === 0) {
    strength.style.width = "0";
    message.textContent = "";
    return;
  }

  if (score <= 1) {
    strength.style.width = "25%";
    strength.style.background = "red";
    message.textContent = "Weak password 😬";
  } else if (score === 2) {
    strength.style.width = "50%";
    strength.style.background = "orange";
    message.textContent = "Medium strength 🙂";
  } else if (score === 3) {
    strength.style.width = "75%";
    strength.style.background = "yellow";
    message.textContent = "Strong password 💪";
  } else {
    strength.style.width = "100%";
    strength.style.background = "lime";
    message.textContent = "Very strong password 🔥";
  }
});
