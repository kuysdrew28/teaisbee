// footer.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML("beforeend", data);
    })
    .catch(error => console.error("Footer failed to load:", error));
});