(function() {
    var video = document.getElementById('video');
    var screen_pause = document.getElementById('screen_pause');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    pause.onclick = function() {
        screen_pause.style.display = "none";
        play.style.display = "block";
        pause.style.display = "none";
        video.play();

    }
    play.onclick = function() {
        screen_pause.style.display = "block";
        play.style.display = "none";
        pause.style.display = "block";
        video.pause();

    }
    screen_pause.onclick = function() {
        video.play();
        screen_pause.style.display = "none";
        play.style.display = "block";
        pause.style.display = "none";
    }
    var time = document.getElementById('time');
    video.ontimeupdate = function() {
        var currentTime = parseInt(video.currentTime);
        if (currentTime%60 < 10) {
          currentTime = parseInt(currentTime / 60)+":0"+ currentTime%60;
        } else {
          currentTime = parseInt(currentTime / 60)+":"+ currentTime%60;
        }
        var duration = parseInt(video.duration);
        if (duration%60 < 10) {
            duration = parseInt(duration / 60)+":0"+ duration%60;
            console.log('111')
        } else {
          duration = parseInt(duration / 60)+":"+ duration%60;
        }
        time.innerHTML = currentTime +"/"+ duration; 
    }
}(window))
