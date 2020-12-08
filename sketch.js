const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine;
var world;

var ground ;

var ball;

function setup() {
  createCanvas(400,400);

  engine= Engine.create();
  world= engine.world; 
var ballOpt={
  restitution: 1
}
  
  
  var groundOptions= {
    isStatic :true
  }
  ground= Bodies.rectangle(200,380,400,30,groundOptions );
  World.add (world,ground);

  
ball=Bodies.circle(200,200,15,ballOpt);
World.add(world,ball);

ball1=Bodies.circle(100,100,15,ballOpt);
World.add(world,ball1);

ball2=Bodies.circle(250,140,15,ballOpt);
World.add(world,ball2);

ball3=Bodies.circle(300,200,15,ballOpt);
World.add(world,ball3);

console.log(ball);
  
 
}

function draw() {
  background(0); 
  
  Engine.update(engine);
  ellipseMode(RADIUS);
fill("aqua")
ellipse(ball.position.x,ball.position.y,15);
fill("lime")
ellipse(ball1.position.x,ball1.position.y,15);
fill("yellow")
ellipse(ball2.position.x,ball2.position.y,15);
fill("red")
ellipse(ball3.position.x,ball3.position.y,15);

  fill("orange")
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,30);

  

}

































