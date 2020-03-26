(function() {
  var video = document.getElementsByClassName("video");

  // Get access to the camera!

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      //video.src = window.URL.createObjectURL(stream);
      for (var i = 0; i < video.length; i++) {
        video[i].srcObject = stream;
        video[i].play();
      }
    });
  }
})();
