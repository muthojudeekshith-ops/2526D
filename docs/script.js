
const CORRECT_PIN = "2525";

const pages = [
  document.getElementById("page1"),
  document.getElementById("page2"),
  document.getElementById("page3")
];

const pinForm = document.getElementById("pinForm");
const pinInput = document.getElementById("pinInput");
const pinError = document.getElementById("pinError");
const restartButton = document.getElementById("restartButton");

function showPage(pageNumber) {
  pages.forEach((page, index) => {
    const isActive = index === pageNumber - 1;

    page.hidden = !isActive;
    page.classList.toggle("active", isActive);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Check the security PIN.
pinForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (pinInput.value === CORRECT_PIN) {
    pinError.textContent = "";
    pinInput.value = "";
    showPage(2);
  } else {
    pinError.textContent = "Incorrect PIN. Please try again.";
    pinInput.value = "";
    pinInput.focus();
  }
});

// Navigate between book pages.
document.querySelectorAll("[data-next]").forEach((button) => {
  button.addEventListener("click", function () {
    showPage(Number(button.dataset.next));
  });
});

document.querySelectorAll("[data-back]").forEach((button) => {
  button.addEventListener("click", function () {
    showPage(Number(button.dataset.back));
  });
});

// Return to the book cover.
restartButton.addEventListener("click", function () {
  showPage(1);
  pinError.textContent = "";
  pinInput.value = "";
});

showPage(1);
