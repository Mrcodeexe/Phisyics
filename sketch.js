
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var lightsaber
var vader1, vader2, vader3, vader4

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	lightsaber=new Lightsaber(400, 350);
	vader1=new Vader(700, 100);
	vader2=new Vader(700, 200);
	vader3=new Vader(700, 300);
	vader4=new Vader(700, 400);
	vader5=new Vader(700, 500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  
  drawSprites();
	lightsaber.display();
	vader1.display();
	vader2.display();
	vader3.display();
	vader4.display();
	vader5.display();
}



