export default function menuHamburguer() {
  const menuHamb = document.querySelector("#menuHamb");
  const navMenu = document.querySelector("#navMenu");

  menuHamb.addEventListener("click", () => {
    if (navMenu.style.display === "block") {
      navMenu.style.display = "none";
      menuHamb.style.backgroundColor = "";
    } else {
      navMenu.style.display = "block";
      menuHamb.style.backgroundColor = "#d5d5d50f";
    }
  });
}
