function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

function draw() {
	let size = 500;
	noFill();
	stroke(255, 255, 255);
	circle(
		random(0 - size, width + size),
		random(0 - size, height + size),
		size
	);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	fullscreen(true);
}