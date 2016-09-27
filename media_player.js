(function() {
   var video = document.getElementById('video');
   var screen_pause = document.getElementById('screen_pause');
   var play = document.getElementById('play');
   var pause = document.getElementById('pause');
   pause.onclick = function () {
       screen_pause.style.display = "none";
       play.style.display = "block";
       pause.style.display = "none";
       video.play();

   }
   play.onclick = function () {
       screen_pause.style.display = "block";       
       play.style.display = "none";
       pause.style.display = "block";
       video.pause();

   }
   screen_pause.onclick = function () {
   	   video.play();
   	   screen_pause.style.display = "none";
   }
}(window))
