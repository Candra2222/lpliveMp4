var video = document.getElementById("myVideo");
var popup = document.getElementById("popup");

video.addEventListener("timeupdate", function() {
  if (video.currentTime >= 5) {
    popup.style.display = "block";
  }
});
