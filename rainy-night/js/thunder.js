$(function () {

    setInterval(rainy_main, Math.floor(randomRange(10000, 30000)));
    function rainy_main() {
        thunder(randomRange(60,120))
    }

    function sunny_main() {
        thunder(randomRange(10,40))

    }

    function thunder(db) {
        let rate_of_lighting;
        if (db >= 90) {
            rate_of_lighting = 1
        }
        else{
            rate_of_lighting = db/90
        }
        lights_up(rate_of_lighting)
    }

    function randomRange(minNum, maxNum) {
        return (Math.random() * (maxNum - minNum + 1) + minNum);
    }


});
