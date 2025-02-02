const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const header = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
  sideMenu.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.left = "-700px";
});

document.addEventListener("click", (event) => {
  if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    sideMenu.style.left = "-700px";
  }
});


//to make the header stick to the top when scrolling up and not when we are scrolling down
navbar.addEventListener("mouseup", () => {
  navbar.style.down = "50px";
});
