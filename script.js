function scrollsuave() {
  const linksint = document.querySelectorAll('a[href^="#"]');
  console.log(linksint);
  linksint.forEach((item) => {
    item.addEventListener("click", scrollto);
  });
  function scrollto(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}
scrollsuave();

function scrolltoinit() {
  const initfooter = document.querySelectorAll("#toinit");
  initfooter.addEventListener("click", scrolltoinit);
  function scrolltoinit(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}
scrolltoinit();
