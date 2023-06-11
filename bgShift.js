const header = document.querySelector("header");
const span = document.querySelectorAll("span");

span.forEach((el) => {
  el.addEventListener("mouseover", () => {
    let bg = el.getAttribute("data-bg");
    body.style.background = `url(${bg}) no-repeat center /cover`;
  });
});
