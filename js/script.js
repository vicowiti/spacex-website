const menuButton = document.getElementById("menu-btn");
const overLay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

menuButton.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  r;
  menuButton.classList.toggle("open");
  overLay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    resetCounter();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = 0;

    const updateCounter = () => {
      //get target count
      const target = +counter.getAttribute("data-target");
      //   get current counter value
      const c = +counter.innerText;

      //   create an increment
      const increment = target / 100;

      //   if counter is less than target, add increment
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function resetCounter() {
  counters.forEach((counter) => (counter.innerHTML = "0"));
}
