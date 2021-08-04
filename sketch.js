function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)
}

var wall,thickness;
var bullet,speed,weight;


bullet = createSprite(50,200,50,50)
wall = createSprite(1500,200,60,height/2)

bullet.velocityX = speed;

function draw() {
  background(255,255,255);  
  wall.shapeColor(80,80,80)
  thickness = random(22,83)
  drawSprites();
}