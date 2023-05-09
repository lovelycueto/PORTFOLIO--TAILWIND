const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav ul");
const arjay = document.querySelector(".arjay");
const backg = document.querySelector(".backg");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
  backg.classList.toggle("blurr");
  headerNav.style=("z-index:999;");
  headerNav.style=("transition:.5s ease");
  arjay.classList.toggle("show");

})

var toTopButton = document.getElementById("to-top-button");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            toTopButton.classList.remove("hidden");
        } else {
            toTopButton.classList.add("hidden");
        }
    }

    // When the user clicks on the button, smoothy scroll to the top of the document
    function goToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }