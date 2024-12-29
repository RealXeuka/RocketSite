function toggleNavbar() {
  const navbar = document.getElementById("navbar");
  if (navbar.style.transform === "translateY(0%)") {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0%)";
  }
}
