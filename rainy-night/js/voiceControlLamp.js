window_dict = {
    "window1": ".small-window-1",
    "window2": ".small-window-2",
    "window3": ".small-window-3",
    "window4": ".small-window-4",
    "window5": ".small-window-5",
    "window6": ".small-window-6",
    "window7": ".small-window-7",
    "window8": ".small-window-8",
    "window9": ".small-window-9",
    "window10": ".small-window-10",
    "window11": ".small-window-11",
    "window12": ".small-window-12",
    "window13": ".small-window-13",
    "window14": ".long-window-1",
    "window15": ".long-window-2",
    "window16": ".long-window-3",
    "window17": ".long-window-4",
    "window18": ".long-window-5",
    "window19": ".long-window-6",
    "window20": ".long-window-7",
    "window21": ".long-window-8",
    "window22": ".long-window-9",
    "window23": ".long-window-10",
    "window24": ".long-window-11",
    "window25": ".long-window-12",
    "window26": ".long-window-13",
    "window27": ".box-2-small-window-left-1",
    "window28": ".box-2-small-window-left-2",
    "window29": ".box-2-small-window-left-3",
    "window30": ".box-2-small-window-left-4",
    "window31": ".box-2-small-window-left-5",
    "window32": ".box-2-small-window-left-6",
    "window33": ".box-2-small-window-left-7",
    "window34": ".box-2-small-window-left-8",
    "window35": ".box-2-small-window-left-9",
    "window36": ".box-2-small-window-left-10",
    "window37": ".box-2-small-window-left-11",
    "window38": ".box-2-small-window-left-12",
    "window39": ".box-2-small-window-left-13",
    "window40": ".box-2-small-window-left-14",
    "window41": ".box-2-small-window-left-15",
    "window42": ".box-2-small-window-left-16",
    "window43": ".box-2-small-window-left-17",
    "window44": ".box-2-small-window-left-18",
    "window45": ".box-2-small-window-left-19",
    "window46": ".box-2-small-window-right-1",
    "window47": ".box-2-small-window-right-2",
    "window48": ".box-2-small-window-right-3",
    "window49": ".box-2-small-window-right-4",
    "window50": ".box-2-small-window-right-5",
    "window51": ".box-2-small-window-right-6",
    "window52": ".box-2-small-window-right-7",
    "window53": ".box-2-small-window-right-8",
    "window54": ".box-2-small-window-right-9",
    "window55": ".box-2-small-window-right-10",
    "window56": ".box-2-small-window-right-11",
    "window57": ".box-2-small-window-right-12",
    "window58": ".box-2-small-window-right-13",
    "window59": ".box-2-small-window-right-14",
    "window60": ".box-2-small-window-right-15",
    "window61": ".box-2-small-window-right-16",
    "window62": ".box-2-small-window-right-17",
    "window63": ".box-2-small-window-right-18",
    "window64": ".box-2-small-window-right-19",
    "window65": ".box-2-long-window-1",
    "window66": ".box-2-long-window-2",
    "window67": ".box-2-long-window-3",
    "window68": ".box-2-long-window-4",
    "window69": ".box-2-long-window-5",
    "window70": ".box-2-long-window-6",
    "window71": ".box-2-long-window-7",
    "window72": ".box-2-long-window-8",
    "window73": ".box-2-long-window-9",
    "window74": ".box-2-long-window-10",
    "window75": ".box-2-long-window-11",
    "window76": ".box-2-long-window-12",
    "window77": ".box-2-long-window-13",
    "window78": ".box-2-long-window-14",
    "window79": ".box-2-long-window-15",
    "window80": ".box-2-long-window-16",
    "window81": ".box-2-long-window-17",
    "window82": ".box-2-long-window-18",
    "window83": ".box-2-long-window-19"
}

function randomRange(minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

// len:生成整数的数量   start:最小值   end:最大值
function getRandomArr(len,minNum,maxNum){
    let arr=[];
    while (arr.length<len){
        let num=randomRange(minNum,maxNum);
        if(arr.indexOf(num)===-1){
            arr.push(num);
        }
    }
    return arr;
}

function lights_up(rate_of_lighting) {
    let num = Math.floor(83 * rate_of_lighting);
    let id_array = getRandomArr(num,1,83)
    for(j = 0,len=id_array.length; j < len; j++) {
        let id = id_array[j];
        let lighting_window;
        lighting_window = window_dict["window" + id]
        if (!$(lighting_window).hasClass("light_on")){
            let time_dlay = randomRange(500,1000)
            setTimeout(function () {
                $(lighting_window).addClass("light_on");
            }, time_dlay);
            setTimeout( function(){ $(lighting_window).removeClass("light_on"); } ,10000 + time_dlay);
        }
    }
}


