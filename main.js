const hidden = document.querySelectorAll(".initiallyHidden");

hidden.forEach(h => (h.style.visibility = "hidden"));
window.addEventListener("keyup", e => {
  if (e.key === " ") {
    const el = [...hidden].find(h => h.style.visibility == "hidden");
    if (el) {
      el.style.visibility = "visible";
    }
  }
});
