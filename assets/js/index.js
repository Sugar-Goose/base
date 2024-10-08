// mobile menu
const mobileMenu = document.querySelector(".header-menu");
const Burger = document.querySelector("#burger");
Burger.addEventListener("click", function () {
  if (!Burger.classList.contains("active")) {
    Burger.classList.add("active");
    mobileMenu.classList.add("active");
  } else {
    Burger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});

const mobileMenuLink = mobileMenu.querySelectorAll(".header-menu__option");
if (mobileMenuLink.length > 0) {
  for (let i = 0; i < mobileMenuLink.length; i++) {
    let menuLink = mobileMenuLink[i];
    menuLink.addEventListener("click", function () {
      Burger.classList.remove("active");
      mobileMenu.classList.remove("active");
    });
  }
}

// tab block
const tabBlock = document.querySelectorAll(".question__tab");
for (let i = 0; i < tabBlock.length; i++) {
  tabBlock[i].addEventListener("click", function () {
    if (tabBlock[i].classList.contains("active")) {
      removeActive(tabBlock);
    } else {
      removeActive(tabBlock);
      tabBlock[i].classList.add("active");
    }
  });
}

function removeActive(elem) {
  for (let i = 0; i < elem.length; i++) {
    if (elem[i].classList.contains("active")) {
      elem[i].classList.remove("active");
    }
  }
}

// TOGGLER

const toggler = document.querySelectorAll(".toggler");

for (let i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    var togglerButton = toggler[i].querySelector(".toggler__button");
    var togglerCheck = toggler[i].querySelector(".toggle");
    var togglerLeftText = toggler[i].querySelector(".toggler__text-left");
    var togglerRightText = toggler[i].querySelector(".toggler__text-right");

    if (togglerButton) {
      if (togglerCheck.checked) {
        togglerButton.classList.add("toggler__button-active");
        if (togglerLeftText && togglerRightText) {
          togglerLeftText.style.color = "rgba(1, 7, 13, 0.4)";
          togglerRightText.style.color = "#000000";
        } else {
          return;
        }
      } else if (!togglerCheck.checked) {
        togglerButton.classList.remove("toggler__button-active");
        if (togglerLeftText && togglerRightText) {
          togglerLeftText.style.color = "#000000";
          togglerRightText.style.color = "rgba(1, 7, 13, 0.4)";
        } else {
          return;
        }
      }
    }
  });
}
