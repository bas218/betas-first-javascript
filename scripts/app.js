var switchImg = function() {
	var img = document.getElementById("imgPlane");

	console.log(img.src);
	if (img.src.indexOf("plane1") >= 0) {
        img.src = "assets/plane2.png";
    }
    else {
        img.src = "assets/plane1.png";
    }
};

var timer;
var isStarted = false;

var startImg = function() {
	timer = window.setInterval(switchImg, 200);
}

var stopImg = function() {
	window.clearInterval(timer);
}

var toggleAnimation = function() {
	if (isStarted == true) {
		stopImg();
		isStarted = false;
	}
	else {
		startImg();
		isStarted = true;
	}
}