document.querySelector(".hamburger").addEventListener("click", function () {
  if (document.querySelector(".drop-nav-links").style.display === "flex") {
    document.querySelector(".drop-nav-links").style.display = "none"
  } else {
    document.querySelector(".drop-nav-links").style.display = "flex"
  }

})

