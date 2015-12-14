var switchClick = function() {
	var img = document.getElementById("imgPlane");

	console.log(img.src);
	if (img.src.indexOf("plane1") >= 0) {
        img.src = "assets/plane2.png";
    }
    else {
        img.src = "assets/plane1.png";
    }
};