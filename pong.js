function setup()
{
createCanvas(1220, 700);
//frameRate(15);
scoreElem = createDiv('Score = 0');
scoreElem.position(50, 20);
scoreElem.id = 'score1';
scoreElem.style('color', 'white')

scoreElem2 = createDiv('Score = 0');
scoreElem2.position(1120, 20);
scoreElem2.id = 'score2';
scoreElem2.style('color', 'white')

puck= new Puck();
slideleft=new Slideleft();
slideright=new Slideright();
}

function draw()
{
	background(0);
	puck.update();
	puck.show();
	slideleft.show();
	slideright.show();
	//slide.showSlideRight();	
	
	//////////////////////////////////////edit 30318
	if(puck.x===slideleft.xl && puck.y===slideleft.yl){
		if(slide.xl=)
	///////////////////////////////////////30318	
   
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log("up");
		slideright.dir(0, -7);
	}
	else if(keyCode===DOWN_ARROW){
		console.log("down");
		slideright.dir(0, 7);
	}
	else if(keyCode===65){
		console.log("down");
		slideleft.dir(0, 7);
	}
	else if(keyCode===81){
		console.log("up");
		slideleft.dir(0, -7);
	}
}



