let modOne =document.getElementsByClassName('mode_1')[0];
let modTow =document.getElementsByClassName('mode_2')[0];
let backGround =document.getElementsByClassName('background')[0];
let mainOutTra = document.getElementsByClassName('main_out_tra')[0];
let maonIn =document.getElementsByClassName('main_in')[0];
let mainInTra =document.getElementsByClassName('main_in_tra')[0];
let mainOut =document.getElementsByClassName('main_out')[0];
let stop =document.getElementsByClassName('stop')[0];
modTow.onclick =function(){
    one();

}
modOne.onclick=function(){
    tow()
}
function one(){
    backGround.setAttribute('class','background back_right_50');
    mainOutTra.setAttribute('class','main_out_tra back_right_050');
    maonIn.setAttribute('class', 'main_in back_left_50 opacity_one zIndex3');
    mainInTra.setAttribute('class', 'main_in_tra back_left_zero');
    mainOut.setAttribute('class', 'main_out back_right_zero opacity_zero zIndex2');
};
function tow(){
    backGround.setAttribute('class','background back_right_zero');
    mainOutTra.setAttribute('class','main_out_tra back_right_zero');
    maonIn.setAttribute('class', 'main_in back_left_050 opacity_zero zIndex2');
    mainInTra.setAttribute('class', 'main_in_tra back_left_050 ');
    mainOut.setAttribute('class', 'main_out back_right_50 opacity_one zIndex3');
};
let peauseOne = setInterval(function(){
    one();
}
    ,5000);
let peauseTow = setInterval(function(){
    tow()
}
    ,10000);

// function timerOne(){
//     ;
// }
// function timertow(){
//     let peauseTow = setTimeout (function(){
//         tow()
//         timerOne();
//     }
//         ,5000);
// };
// timerOne();
stop.onclick = function(){
    clearTimeout(peauseOne);
    clearTimeout(peauseTow);
};