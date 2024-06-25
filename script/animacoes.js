export function scrollsuave() {
  const linksint = document.querySelectorAll('a[href^="#"]');
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

export function scrolltoinit() {
  const initfooter = document.querySelectorAll("#toinit");
  initfooter.forEach((item) => {
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
