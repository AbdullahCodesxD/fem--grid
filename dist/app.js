const hamburger = document.querySelector('.hamburger');
const hamImg = document.querySelector('.ham--img');
const str = hamImg.getAttribute('src');
const links = document.querySelector('.links');
const overlay = document.querySelector('.overlay');
const fun = function () {
  if (str == hamImg.getAttribute('src')) {
    hamImg.src = '/assets/images/icon-menu-close.svg';
    links.style.right = '0';
    overlay.classList.toggle('overlay--class');
  } else {
    hamImg.src = '/assets/images/icon-menu.svg';
    links.style.right = '-100%';
    overlay.classList.toggle('overlay--class');
  }
};
hamburger.addEventListener('click', fun);
overlay.addEventListener('click', fun);
