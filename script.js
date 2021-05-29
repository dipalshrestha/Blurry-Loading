const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

var int = setInterval(buffer, 30);
var load = 0;

function buffer(){

    load++;
    loadText.innerHTML = load + "%";
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = "blur(" + scale(load, 0, 100, 30, 0)+"px)";

    if(load>99) {
        clearInterval(int);
    }
    function scale (number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
}