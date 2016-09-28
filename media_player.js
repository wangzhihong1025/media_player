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
        if (currentTime % 60 < 10) {
            currentTime = parseInt(currentTime / 60) + ":0" + currentTime % 60;
        } else {
            currentTime = parseInt(currentTime / 60) + ":" + currentTime % 60;
        }
        var duration = parseInt(video.duration);
        if (duration % 60 < 10) {
            duration = parseInt(duration / 60) + ":0" + duration % 60;
        } else {
            duration = parseInt(duration / 60) + ":" + duration % 60;
        }
        time.innerHTML = currentTime + "/" + duration;
        var baifenbi = video.currentTime / video.duration;
        var jinduball = document.getElementById('jinduball');
        var jindutiao = document.getElementById('jindutiao');
        jindutiao.style.width = baifenbi * 480 +"px";
        jinduball.style.left = baifenbi * 480 + 120 +"px";

    }
    var sound = document.getElementById('sound');
    var mute = document.getElementById('mute');
    sound.onclick = function() {
        video.muted = true;
        sound.style.display = "none";
        mute.style.display = "block";
    }
    mute.onclick = function() {
        video.muted = false;
        sound.style.display = "block";
        mute.style.display = "none";
    }
    

}(window))
