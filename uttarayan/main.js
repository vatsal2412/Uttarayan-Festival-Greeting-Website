const carousel = document.querySelector(".carousel");
const images = document.querySelectorAll(".image");

let index = 0;
setBackground();


setInterval(() => {
    index++;
    if (index >= images.length) {
        index = 0;
    }
    setBackground();
}, 5000);

function setBackground() {
    carousel.style.backgroundImage = images[index].style.background;
}