
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bob1;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new.Roof(100,400);

bob1 = new.Bob(300,400);
bob2 = new.Bob(350,400);
bob3 = new.Bob(400,400);
bob4 = new.Bob(450,400);
bob5 = new.Bob(500,400);


Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

roof.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


  drawSprites();
 
}



