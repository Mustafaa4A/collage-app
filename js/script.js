document.addEventListener("DOMContentLoaded", function () {
  let nav = document.querySelector(".nav-container");

  window.onscroll = function () {
    if (window.scrollY > 50) {
      nav.style.position = "fixed";
      nav.style.background = "#995";
      nav.style.color = "black";
      nav.querySelectorAll("a").forEach((a) => (a.style.color = "black"));
      nav.style.padding = "0.5em 5%";
      document.querySelector(".hamburger div").style.background = "#333";
    } else {
      nav.style.position = "";
      nav.style.background = "";
      nav.style.color = "";
      nav.querySelectorAll("a").forEach((a) => (a.style.color = ""));
      nav.style.padding = "";
      document.querySelector(".hamburger div").style.background = "";
    }
  };
});
