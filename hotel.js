let box1= document.getElementsByClassName('box')[0];
let box2 = document.getElementsByClassName('box')[1];
let box3 = document.getElementsByClassName('box')[2];
let rooms = document.getElementsByClassName('container1')  // REMMEMBER TO TRANSITION THE ROOMS

window.onscroll = function(){
    if (scrollY <= 420) {
        box1.style.animationPlayState = 'paused';
        box2.style.animationPlayState = 'paused';
        box3.style.animationPlayState = 'paused';
    }else{
        box1.style.animationPlayState = 'running';
        box2.style.animationPlayState = 'running';
        box3.style.animationPlayState = 'running';
    }



    
};





