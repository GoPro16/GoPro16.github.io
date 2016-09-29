//https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Finishing_up
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var paddleHeight= 10;
var paddleWidth=75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
document.addEventListener("keydown",keyDownHandler, false);
document.addEventListener("keyup",keyUpHandler, false);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPadde();
    if(y+dy > canvas.height || y + dy < 0){
    	dy = -dy;
    }
    if(x+dx > canvas.width || x + dx < 0){
    	dx = -dx;
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth){
    	paddleX+=7;
    }else if(leftPressed && paddleX > 0){
    	paddleX-=7;
    }
    x+=dx;
    y+=dy;
}

function drawPadde(){
	ctx.beginPath();
	ctx.rect(paddleX,canvas.height-paddleHeight,paddleWidth,paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function keyDownHandler(e){
	if(e.keyCode == 39){
		rightPressed = true;
	}else if(e.keyCode == 37){
		leftPressed = true;
	}
}

function keyUpHandler(e){
	if(e.keyCode == 39){
		rightPressed = false;
	}else if(e.keyCode == 37){
		leftPressed = false;
	}
}

setInterval(draw, 10);