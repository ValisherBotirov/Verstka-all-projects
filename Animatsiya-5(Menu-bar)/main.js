var container = document.getElementById("box");
var stick = document.getElementById("stick");

let menuOpen = false;
box.onclick = function () {
  if (!menuOpen) {
    stick.classList.add("open");
    menuOpen = true;
  } else {
    stick.classList.remove("open");
    menuOpen = false;
  }
};
