const D = document;
const grayscaleButton = D.querySelector(".grayscaleButton");
const container = D.querySelector(".container");
const slider = D.getElementById("slider");

function randomRange(minNum, maxNum) {
    return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

function rain(fall) {
    for (i = 0; i < fall; i++) {

        let drop = D.createElement("div");
        let splash = D.createElement("div");

        let randomLeft = randomRange(0, 1600);

        drop.classList.add("drop");
        drop.style.left = randomLeft + "px";
        drop.style.top = randomRange(-1000, 1400) + "px";

        if (i % 2 === 0) {
            splash.classList.add("splash");
            splash.style.bottom = Math.floor(Math.random() * 100) + "px";
            splash.style.left = randomLeft + "px";
            splash.style.animation = "splashing " + randomRange(.2, .7) + "s linear infinite";
            container.appendChild(splash);
        }


        container.appendChild(drop);

    }
}

grayscaleButton.onclick = function() {
    if (container.classList.contains("filtered")) {
        container.classList.remove("filtered");
        setTimeout(function() {
            grayscaleButton.innerHTML = "grayscale";
        }, 4000);
    } else {
        container.classList.add("filtered");
        setTimeout(function() {
            grayscaleButton.innerHTML = "Colour";
        }, 4000);

    }

}

slider.oninput = function() {

    let rainy = D.getElementsByClassName('drop');
    let splashes = D.getElementsByClassName("splash");
    while (rainy[0]) {
        rainy[0].parentNode.removeChild(rainy[0]);
    }
    while (splashes[0]) {
        splashes[0].parentNode.removeChild(splashes[0]);
    }

    let sliderValue = slider.value;
    rain(sliderValue * 3);
}

rain(150);