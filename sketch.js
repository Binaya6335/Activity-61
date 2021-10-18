var bg,bgImg;
var player, PlayerImg,heartImg ;


function preload(){
  
  PlayerImg = loadAnimation("assets/Imported Piskel.gif")
  heartImg = loadImage("assets/heart_3.png")
  bgImg = loadImage("assets/bg.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
  

//creating the player sprite
player = createSprite(windowWidth/2-450, windowHeight-50 , 50, 50);
 player.addAnimation("player",PlayerImg)

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

drawSprites();

}
