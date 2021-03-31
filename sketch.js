const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hans;
var ground;
var monster;


function preload(){
  backgroundImg=loadImage("background.jpg")
  
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create();
  world = engine.world;
  hans= new Hans(displayWidth/3, displayHeight-80, 40, 145);
  ground= new Ground(displayWidth/2, displayHeight-20, displayWidth*3, 70)
  ground.velocityX=-50
  console.log(ground.x)
  monster= new Enemy(displayWidth-100, displayHeight-80, 40, 145);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  hans.display();
  ground.display();
  monster.display();

}





