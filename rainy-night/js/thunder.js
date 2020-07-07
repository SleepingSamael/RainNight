let thunder_clock;

$(function () {

    thunder(100,2000)

    thunder_clock = setInterval(rainy_main, Math.floor(randomRange(10000, 30000)));

});

function thunder(db,delay) {
    let rate_of_lighting;
    if (db >=100) {
        rate_of_lighting = 1
        delay = 2000
    }
    else{
        rate_of_lighting = db/100
    }
    lights_up(rate_of_lighting,delay)
}

function slowClock() {
    clearInterval(thunder_clock);
    thunder_clock = setInterval(sunny_main, Math.floor(randomRange(10000, 30000)));
}
function fastClock() {
    clearInterval(thunder_clock);
    thunder_clock = setInterval(rainy_main, Math.floor(randomRange(10000, 30000)));

}
function rainy_main() {
    thunder(randomRange(60,120),3000)
}

function sunny_main() {
    thunder(randomRange(10,40),5000)

}
