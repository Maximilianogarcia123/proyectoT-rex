//pantalla de Maximiliano
var ground;
var trex ,trex_running;
var nubeImg;




function preload(){
  trex_running= loadAnimation("trex1.png","trex3.png","trex4.png");
groundImage = loadImage("ground2.png")
nubeImg=loadImage("cloud.png");
}




function setup(){
  createCanvas(windowWidth,windowHeight);
  //crear sprite de Trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running",trex_running);
  trex.scale=0.5;
  ground=createSprite(200,180,width,20);
  ground.addImage(groundImage);
  ground.velocityX = -3
}






function draw(){
  background("white");
 if(keyDown("space") && trex.y>140){
  trex.velocityY= -12;
 }
 trex.velocityY=trex.velocityY+0.8
if (ground.x<0){
  ground.x =width/2;
}

  trex.collide(ground);
  spawnClouds();
  spawnCactus();
  drawSprites();
}




  //nubestrex
  function spawnClouds(){
    if(frameCount % 60 === 0){
      nube=createSprite(width,160,40,10);
      nube.velocityX=-3
      nube.y=Math.round(random(5,100));
      nube.addImage(nubeImg)
      nube.scale=0.5
      nube.depth=trex.depth;
      trex.depth=trex.depth+2;
    }

  }


  //cactus
  function spawnCactus(){
    if(frameCount % 60 === 0){
      cactus=createSprite(width,160,10,40)
      cactus.velocityX=-6;
    }
  

  }
  
  
