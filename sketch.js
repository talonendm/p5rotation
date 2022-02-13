var since_shaken = 0;


let xOff = 0;
let yOff = 1;
let zOff = 2;


var h2, w2;

let value = 0;



function preload() {
	myFont = loadFont('assets/Pokemon Solid.ttf');
	since_shaken = frameCount;
}


function deviceShaken() {
	// https://p5js.org/reference/#/p5/setShakeThreshold
	since_shaken = frameCount;

}



function setup() {
	// cnv = createCanvas(windowWidth, windowHeight, WEBGL);

	createCanvas(windowWidth, windowHeight);

	
	textFont(myFont);

	textSize(35);
	textAlign(CENTER, CENTER);


	frameRate(20); // Attempt to refresh at starting 

	nollaus();

	angleMode(DEGREES);

	let threshold_shake = 10; // 30 default
	setShakeThreshold(threshold_shake);


	h2 = height/2;
	w2 = width/2


}







function nollaus() {




}




// auto indect in vscode: shift-alt-f  (and ctrl k f)

function draw() {
	
	background(25);
	fill(100);

	let rotateDirection = 'clockwise';

	// Simple range conversion to make things simpler.
	// This is not absolutely necessary but the logic
	// will be different in that case.

	let rX = rotationX + 180;
	let pRX = pRotationX + 180;

	if ((rX - pRX > 0 && rX - pRX < 270) || rX - pRX < -270) {
		rotateDirection = 'clockwise';
		xOff += 0.1;
	} else if (rX - pRX < 0 || rX - pRX > 270) {
		rotateDirection = 'counter-clockwise';
		xOff -= 0.1;
	}

	
	let rY = rotationY + 180;
	let pRY = pRotationY + 180;

	yOff += (rY - pRY) / 60;


	zOff += 0.000;

	text(round(xOff,2) + "," + round(yOff,2) + "," + round(zOff,2), width / 2, 100);
	text(round(rotationX,2) + "," + round(rotationY,2) + "," + round(rotationZ,2), width / 2, 150);
	text(round(pRotationX,2) + "," + round(pRotationY,2) + "," + round(pRotationZ,2), width / 2, 200);
	text(round(23.34534,2) , width / 2, 250);

	text(frameCount , width / 2, height / 2);
	text(since_shaken, width / 2, height / 2 + 50);

    strokeWeigt(3);

	fill(200,0,0);

	line(w2, h2, w2 + cos(rotationX) * 40.0, h2 + sin(rotationX) * 40.0);

	fill(0,200,0);

	line(w2 + cos(rotationY) * 10.0, h2 + sin(rotationY) * 10.0, w2 + cos(rotationY) * 50.0, h2 + sin(rotationY) * 50.0);

	fill(0,0,200);

	line(w2, h2, w2 + cos(rotationZ) * 40.0, h2 + sin(rotationZ) * 40.0);






}




function touchStarted() {
	let fs = fullscreen();
	if (!fs) {
		fullscreen(true);
	}


	print("kosketus");
	// if (getAudioContext().state !== 'running') {
	// 	getAudioContext().resume();
	// 	mic = new p5.AudioIn();
	// 	mic.start();
	// 	soundrestarted = soundrestarted + 1;
	// }
}

function centerCanvas() {
	// var x = (windowWidth - width) / 2;
	// var y = (windowHeight - height) / 2;
	resizeCanvas(windowWidth, windowHeight);
	// cnv.position(x, y);
	// cnv.position(0, 0);
	// cnv.style('z-index', '-1'); // https://www.youtube.com/watch?v=OIfEHD3KqCg
}

/* full screening will change the size of the canvas */
function windowResized() {
	// resizeCanvas(windowWidth, windowHeight);
	// https://github.com/processing/p5.js/wiki/Positioning-your-canvas
	centerCanvas();
}

