(function() {
    var input = document.getElementById('input');
    var btn = document.getElementById('btn');
    add_class.onclick = function() {
        var file = input.files[0];
        var url = URL.createObjectURL(file);
        video.src = url;
    }
    var video = document.getElementById('video');
    var screen_pause = document.getElementById('screen_pause');
    var play = document.getElementById('play');
    var pause = document.getElementById('pause');
    var all = document.getElementById('dilanweizhi');
    var bg = document.getElementById('bg');
    bg.onmouseover = function() {
        all.style.display = "block";
    }
    bg.onmouseout = function() {
        all.style.display = "none";
    }
    video.poster = "img/poster.jpg";
    video.onclick = function() {
        if (video.paused == true) {
            video.play();
            screen_pause.style.display = "none";
        } else {
            video.pause();
            screen_pause.style.display = "block";
        }
    }
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
        jindutiao.style.width = baifenbi * 480 + "px";
        jinduball.style.left = baifenbi * 480 + 130 + "px";

    }

    jindu.onmousedown = function(event) {
        var length = event.clientX - jindutiao.offsetLeft;
        var percent = (length - 10) / jindu.offsetWidth;
        jindutiao.style.width = percent * 480 + "px";
        video.currentTime = percent * video.duration;
    }
    jindutiao.onmousedown = function(event) {
        var length = event.clientX - jindutiao.offsetLeft;
        var percent = (length - 10) / jindu.offsetWidth;
        jindutiao.style.width = percent * 480 - 140 + "px";
        video.currentTime = percent * video.duration;
    }
    jinduball.ondragend = function(event) {
        var length = event.clientX - jindu.offsetLeft;
        var percent = (length - 10) / jindu.offsetWidth;
        jindutiao.style.width = percent * 480 + "px";
        jinduball.style.left = percent * 480 + 140 + "px";
        video.currentTime = percent * video.duration;
    }
    jinduball.ondrag = function(event) {
        var length = event.clientX - jindu.offsetLeft;
        var percent = (length - 10) / jindu.offsetWidth;
        jindutiao.style.width = percent * 480 + "px";
        jinduball.style.left = percent * 480 + 140 + "px";
        video.currentTime = percent * video.duration;
    }
    video.onended = function() {
        play.style.display = "none";
        pause.style.display = "block";
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

    var volume = document.getElementById('volume');
    var volumemove = document.getElementById('volumemove');
    var volumeball = document.getElementById('volumeball');
    volumeball.ondragend = function(event) {
        var length = event.clientX - volumeball.offsetLeft;
        var percent = length / volume.offsetWidth;
        if (percent >= 0 && percent <= 1) {
            volumemove.style.width = percent * 100 + "px";
            volumeball.style.left = percent * 100 + 680 + "px";
            video.volume = percent;
        }
    }
    volumeball.ondrag = function(event) {
        var length = event.clientX - volumeball.offsetLeft;
        var percent = length / volume.offsetWidth;
        if (percent >= 0 && percent <= 1) {
            volumemove.style.width = percent * 100 + "px";
            volumeball.style.left = percent * 100 + 680 + "px";
            video.volume = percent;
        }
    }
    volume.onmousedown = function(event) {
        var length = event.clientX - volumemove.offsetLeft;
        var percent = (length - 10) / volume.offsetWidth;
        volumemove.style.width = percent * 100 + "px";
        volumeball.style.left = percent * 100 + 670 + "px";
        video.volume = percent;
    }
    volumemove.onmousedown = function(event) {
        var length = event.clientX - volumemove.offsetLeft;
        var percent = (length - 10) / volume.offsetWidth;
        volumemove.style.width = percent * 100 + "px";
        volumeball.style.left = percent * 100 + 670 + "px";
        video.volume = percent;
    }
}(window))
