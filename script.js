score=0;
cross=true
 var startSound = new Audio('music.mp3');
 var GameOverSound = new Audio('gameover.mp3')
setTimeout(()=>{
    startSound.play();
  
},1000)
document.onkeydown=function(e){
    console.log("key code is:", e.keyCode);
    //spacebarkey code:32=>jump upward
    if(e.keyCode==32){
        nobita=document.querySelector('.nobita')
        nobita.classList.add('animateNobita')
        setTimeout(()=>{
            nobita.classList.remove('animateNobita') 
        },700)
    }
    // forwardkey code:39
    if(e.keyCode==39){
        nobita=document.querySelector('.nobita')
        nobitax=parseInt(window.getComputedStyle(nobita, null).getPropertyValue('left'))
        nobita.style.left=nobitax + 112 +'px'
    }
    // backwardkey code:37
    if(e.keyCode==37){
        nobita=document.querySelector('.nobita')
        nobitax=parseInt(window.getComputedStyle(nobita, null).getPropertyValue('left'))
        nobita.style.left=(nobitax - 112) +'px'
    }
}
//collision of nobita and gian=>game over
setInterval(() => {
    nobita=document.querySelector('.nobita')
    gian=document.querySelector('.gian')
    gameover=document.querySelector('.gameover')
//computing the left value of nobita at x
    nx=parseInt(window.getComputedStyle(nobita, null).getPropertyValue('left'));
//computing the top value of nobita at y
    ny=parseInt(window.getComputedStyle(nobita, null).getPropertyValue('top'));

//computing the left value of gian at x
   gx=parseInt(window.getComputedStyle(gian, null).getPropertyValue('left'));
//computing the top value of gian at y
   gy=parseInt(window.getComputedStyle(gian, null).getPropertyValue('top'));

// absolute value at x 
offsetx=Math.abs(nx-gx)

// absolute value at xy 
offsety=Math.abs(ny-gy)
console.log(offsetx,offsety)

if(offsetx<73 && offsety<52){
    gameover.style.visibility="visible"
    gian.classList.remove('animategian')
    GameOverSound.play();
    setTimeout(()=>{
    startSound.pause();
    GameOverSound.pause();



    
    },1000)
    
   
}
// score increament if collision not happen
else if(offsetx <145 && cross){
    score += 10;
    updatescore(score);
    cross=false;
    setTimeout(()=>{
        cross=true;
    },1000)
    // increasing gian moving speed
    setTimeout(()=>{
        animationDuration=parseFloat(window.getComputedStyle(gian, null).getPropertyValue('animation-duration'));
        newDuration=animationDuration-0.8;
        gian.style.animationDuration=newDuration +'s';
        console.log('New Duration is:', newDuration);
    },500)
  


}




},10);




function updatescore(score){
    // upodating the score without collision
    ScoreContainer.innerHTML="Your Score:" + score;
    
}