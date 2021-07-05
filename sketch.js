
function preload(){
seaImage = loadImage("sea.png")
shipAnimation = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}
var ship
var sea
function setup(){
  createCanvas(400,400);
  sea = createSprite(1,100, 200, 100)
  sea.addImage(seaImage)
  ship = createSprite(100, 200, 100, 100)
  ship.addAnimation("floating", shipAnimation )
  ship.scale = 0.2
}

function draw() {
  background("blue");
  sea.velocityX = -5
  if (sea.x < 0){
    sea.x = sea.width/2
  }
  drawSprites()
 
}