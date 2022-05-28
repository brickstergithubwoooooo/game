
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground 
var wall
var otherwall
var ball
var engine, world
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ground_options = {
		isStatic: true
	  }
	  ground = Bodies.rectangle(0,500,800,700, ground_options);
	  World.add(world, ground);
	  
	  var optionwall = {
		isStatic: true
	  }

	  otherwall = Bodies.rectangle(400,300,800,700, optionwall);
	  World.add(world, otherwall);
	  
	 var wall_option = {
		isStatic: true
	  }
 
	  wall = Bodies.rectangle(650,300,8,70, wall_option);
	  World.add(world, wall);
	  
	  var ball_options = {
		  isStatic: false,
		  restitution: 0.3,
		  friction: 0,
		  density: 1.2
	  }
	  ball = Matter.Bodies.circle(600,300,30);
Matter.World.add(world, ball)


	
  
}


function draw() {
  rectMode(CORNER);
  ellipseMode(RADIUS);

  background(0);

  fill("gold");
  rect(ground.position.x,ground.position.y,800, 35)
  rect(wall.position.x,wall.position.y,30, 500)
  rect(otherwall.position.x,otherwall.position.y,30, 300)
  fill("white"); 
  ellipse(ball.position.x,ball.position.y,30);

Engine.update(engine)

}



