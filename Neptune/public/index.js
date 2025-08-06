const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const slidePanel = document.getElementById("slidePanel");

openBtn.addEventListener("click", () => {
    slidePanel.style.right = "0";  // Show panel
});

closeBtn.addEventListener("click", () => {
slidePanel.style.right = "-300px";  // Hide panel
});
