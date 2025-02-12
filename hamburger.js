const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const header = document.getElementById("navbar");

sideMenu.style.left = "-80%";

menuBtn.addEventListener("click", () => {
  sideMenu.style.left = "0%";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.left = "-80%";
});

document.addEventListener("click", (event) => {
  if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) 
    sideMenu.style.left = "-80%";
});