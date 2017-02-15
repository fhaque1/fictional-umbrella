var c = document.getElementById("slate");
var ctx = c.getContext('2d');

ctx.fillStyle = "#b4dd11"

var addRect = function(e) {
	ctx.fillRect(e.offsetX,e.offsetY,50,100);
};

var conCirc = function(e) {
	ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.strokeStyle = 'black';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
};


//c.addEventListener("click", addRect);
c.addEventListener("click", conCirc);


var b = document.getElementById("b");

var clear = function(e) {
	ctx.clearRect(0, 0, c.width, c.height);
};
b.addEventListener("click", clear);
