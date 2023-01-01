// ! elements
const zone = document.querySelector(".zone");
const ball = document.querySelector(".ball");
const score = document.querySelector(".score");
const raquette = document.querySelector(".raquette");

// ! consts
const zoneHeight = zone.clientHeight;
const zoneWidth = zone.clientWidth;
const ballHeight = ball.clientHeight;
const ballWidth = ball.clientWidth;
const raquetteHeight = raquette.clientHeight;
const raquetteWidth = raquette.clientWidth;

// ! variables
let rx = 0;
let bx = 0;
let by = 0;
let total = 0;

// ! events
document.addEventListener("keydown", raquetteFunction);
setInterval(ballFunction, 100);

// ! functions
function raquetteFunction(e) {
    if (e.key == "ArrowRight") {
        rx += 10;
    }
    else if (e.key == "ArrowLeft") {
        rx -= 10;
    }
    raquette.style.left = rx + "px";
}
function ballFunction() {
    if (by + ballHeight >= zoneHeight - raquetteHeight && bx <= rx + raquetteWidth && bx + ballWidth >= rx) {
        bx = Math.ceil(Math.random() * (zoneWidth - ballWidth));
        by = 0;
        total++;
        console.log("+1 :)");
    }
    else if (by + ballHeight >= zoneHeight) {
        bx = Math.ceil(Math.random() * (zoneWidth - ballWidth));
        by = 0;
        total = 0;
        console.log("0 :(");
    }
    else {
        by += 10;
    }
    ball.style.top = by + "px";
    ball.style.left = bx + "px";
    score.innerHTML = total;
}