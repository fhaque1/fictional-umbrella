var c = document.getElementById("slate");
var ctx = c.getContext('2d');

ctx.fillStyle = "#b4dd11"

var addRect = function(e) {
	ctx.fillRect(e.offsetX,e.offsetY,50,100);
};

var constructCirc = function(e) {
	ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 15, 0, 2*Math.PI);
    ctx.fillStyle = "red";
	ctx.fill();
    ctx.strokeStyle = 'black';
	ctx.stroke();
};

var circExist = false;
var connectCirc = function(e) {
	ctx.lineTo(e.offsetX,e.offsetY);
	ctx.stroke();
	constructCirc(e);
}

//c.addEventListener("click", addRect);
c.addEventListener("click", connectCirc);


var b = document.getElementById("b");

var clear = function(e) {
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.beginPath();
};
b.addEventListener("click", clear);