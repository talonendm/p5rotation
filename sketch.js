var since_shaken = 0


let xOff = 0;
let yOff = 1;
let zOff = 2;


let value = 0;



function preload() {

	myFont = loadFont('assets/Pokemon Solid.ttf');


	since_shaken = frameCount;

}


function deviceShaken() {
	// https://p5js.org/reference/#/p5/setShakeThreshold
	since_shaken = frameCount;

}


function deviceMoved() {
	value = value + 5;
	threshold = threshold + 5;
	if (value > 255) {
	  value = 0;
	  threshold = 30;
	}
	setShakeThreshold(threshold);
  }


function setup() {
	// cnv = createCanvas(windowWidth, windowHeight, WEBGL);

	createCanvas(windowWidth, windowHeight);

	
	textFont(myFont);

	textSize(35);
	textAlign(CENTER, CENTER);

	nollaus();

	angleMode(DEGREES);



	let threshold_shake = 10; // 30 default
	setShakeThreshold(threshold_shake);

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

	text(xOff + "," + yOff + "," + zOff, width / 2, 100);
	text(nfc(rotationX,2) + "," + nfc(rotationY,2) + "," + nfc(rotationZ,2), width / 2, 150);
	text(nfc(pRotationX,2) + "," + nfc(pRotationY,2) + "," + nfc(pRotationZ,2), width / 2, 200);





	text(frameCount , width / 2, height / 2);
	text(frameCount - since_shaken, width / 2, height / 2 + 50);


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

