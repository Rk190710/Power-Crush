var video = document.querySelectorAll('video')

video.forEach(play => play.addEventListener('click', () =>{
    play.classList.toggle('active');

    if(play.paused){
        play.play();
    }else{
        play.paused();
        play.currentTime = 0;
    }
}))

