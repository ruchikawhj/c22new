const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
 var ground;
 var tower,bg,towerImg;


function preload() {
 bg=loadImage("assets/background.gif");
 towerImg=loadImage("assets/tower.png");
}
function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

 
 ground= new Ground(0,height-1,width*2,1);

  var options={isStatic:true}
 tower=Bodies.rectangle(160,350,170,310,options);
World.add(world,tower);
 
}

function draw() {
  background(189);
  image(bg,0,0,1200,600)
  Engine.update(engine);
  push();
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,170,310);
  pop();
 ground.display();
  
   
}
