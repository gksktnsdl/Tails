function setup()
{
	createCanvas(800,600);
	noFill();
	stroke(255,0,0);

}

function draw()
{
	background(0);
	ellipse(mouseX, mouseY, 50, 50);
	var trailX = 0;
    var trailY = 0;

    trailX = (mouseX + trailX) / 2;
    trailY = (mouseY + trailY) / 2;
     
    trailX = (mouseX + trailX * 9) / 10;

    var trailX0 = 0;
    var trailX1 = 0;

    trailX0 = (mouseX + trailX0) / 2;
    trailX1 = (trailX0 + trailX1) / 2;
 
    var trailX0 = 0;
    var trailX1 = 0;

    trailX0 = (mouseX + trailX0) / 2;
    var trailX0 = 0;
    var trailX1 = 0;
    var trailX2 = 0;
    var trailX3 = 0;

    trailX0 = (mouseX + trailX0) / 2;
    trailX1 = (trailX0 + trailX1) / 2;
    trailX2 = (trailX1 + trailX2) / 2;
    trailX3 = (trailX2 + trailX3) / 2;
}