var car;
var stone,fire,log;
var carImg;



function preload(){
  carImg = loadImage('carImage.jpg');
}

function setup() {
  createCanvas(1500,750);
  car = createSprite(200,200,10,10);
  car.addImage(carImg);
  stone = createSprite();
  fire = createSprite();
  log = createSprite();
}

function draw() {
  background(0); 
  car.display(); 
  drawSprites();
}