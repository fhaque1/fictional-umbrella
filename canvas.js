var c = document.getElementById("slate");
var ctx = c.getContext('2d');

ctx.fillStyle = "#b4dd11"

var addRect = function(e) {
	ctx.fillRect(e.offsetX,e.offsetY,50,100);
};
c.addEventListener("click", addRect);



var b = document.getElementById("b");

var clear = function(e) {
	ctx.clearRect(0, 0, c.width, c.height);
};
b.addEventListener("click", clear);