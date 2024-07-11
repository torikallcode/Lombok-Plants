window.addEventListener("scroll", function () {
  const backgroundDiv = document.getElementById("background");
  const navLinks = document.querySelectorAll(".textNav");
  const textLogo = document.querySelector(".textLogo");
  const btnSearch = document.querySelector(".btnSeach");
  const myNavIcon = document.querySelector("#myNavIcon");
  const hamburger = document.querySelector(".hamburger");

  if (window.scrollY > 0) {
    backgroundDiv.classList.add("utama-bg");
    navLinks.forEach(navLink => navLink.classList.add("afterScroll"));
    textLogo.classList.add("afterScroll");
    btnSearch.classList.add("btnSeachAfterScroll");
    myNavIcon.setAttribute("fill", "#eaf6ea");
    hamburger.setAttribute("fill", "#eaf6ea");
  } else {
    backgroundDiv.classList.remove("utama-bg");
    navLinks.forEach(navLink => navLink.classList.remove("afterScroll"));
    textLogo.classList.remove("afterScroll");
    btnSearch.classList.remove("btnSeachAfterScroll");
    myNavIcon.setAttribute("fill", "#537052");
    hamburger.setAttribute("fill", "#222831");
  }
});

