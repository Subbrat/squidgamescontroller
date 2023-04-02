var music = document.getElementById("music");
var redSound = document.getElementById("redSound");
var greenSound = document.getElementById("greenSound");
var independentRedSound = document.getElementById("independentRedSound");
var independentGreenSound = document.getElementById("independentGreenSound");
var playBtn = document.getElementById("playBtn");
var redBtn = document.getElementById("redBtn");
var greenBtn = document.getElementById("greenBtn");
var redSoundBtn = document.getElementById("redSoundBtn");
var greenSoundBtn = document.getElementById("greenSoundBtn");
var isPlaying = false;
var isRedLight = false;
playBtn.addEventListener("click", function() {
	if (!isPlaying) {
		music.play();
		isPlaying = true;
	}
});
redBtn.addEventListener("click", function() {
	if (isPlaying) {
		music.pause();
		redSound.play();
		isPlaying = false;
		isRedLight = true;
	}
});
greenBtn.addEventListener("click", function() {
	if (isRedLight) {
		greenSound.play();
		setTimeout(function() {
			music.play();
			isPlaying = true;
			isRedLight = false;
		}, 1000);
	}
});
redSoundBtn.addEventListener("click", function() {
	independentRedSound.play();
});
greenSoundBtn.addEventListener("click", function() {
	independentGreenSound.play();
});
