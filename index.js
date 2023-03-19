
const btnContainer = document.getElementById("nav");

const btns = btnContainer.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    let currPage = document.querySelectorAll('nav a');

    if (current.length > 0 && currPage.getAttribute('href') === '#') {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}
 