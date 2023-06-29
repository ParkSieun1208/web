const container = document.querySelector('.slideWrap'),
slides = document.querySelectorAll('.slide'),
slidecounter = slides.length;
let currentIndex = 0;



// var lele = 0;
// var i = 0;
// function moveleft() {
//     if (i < slidecounter - 1) {
//         lele += 100;
//         i++;
//         container.style.transition = '.3s'
//         setTimeout('movetop()', 3000);
//     } else {
//         container.style.transition = '0s'
//         lele = 0;
//         i = 0;
//         setTimeout('movetop()', 0);
//     }

//     container.style.left = "-" + lele + "%";

// }
// moveleft();


let a = 0;

setInterval(function(){
    a -= 1200;
    container.style.margintop = a + "px";
}, 3000);


