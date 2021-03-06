var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var background;


function preload(){
  bgImage=loadImage("bgimg.png")
  bowImage = loadImage("untitled 5.png");
  red_balloonImage = loadImage("zombie.png");
  green_balloonImage = loadImage("untitled 2.png");
  pink_balloonImage = loadImage("untitled.png");
  blue_balloonImage = loadImage("untitled3.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(300,300,600,600);
  
  background.scale = 2.5
  
  // creating bow to shoot arrow
  surivor = createSprite(250,500,20,50);
  surivor.addImage(bowImage); 
  surivor.scale = 0.15;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
  blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {
   background.addImage(bgImage)

  // moving ground
    

    background.scale=1.3
    
  
  //moving bow
  
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  if(keyDown("left")){
    surivor.x=surivor.x-3
  }
  if(keyDown("right")){
    surivor.x=surivor.x+3
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,3));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else  {
      blueBalloon();
    } 
     
  }
  if(World.frameCount%2100===0){
    pinkBalloon()
  }
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+1;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+3;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+2;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+1;
}
  
  
  drawSprites();
    
  text("Score: "+ score, 500,50);
}


function redBalloon() {
  var red = createSprite(Math.round(random(50,580)),Math.round(random(10, 80)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityY= 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(Math.round(random(40,580)),Math.round(random(10, 80)), 10, 10);
          blue.addImage(blue_balloonImage);
  blue.velocityY = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(Math.round(random(40,580)),Math.round(random(10, 80)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityY = 3;
  green.lifetime = 150;
  green.scale = 0.09;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(Math.round(random(50,520)),Math.round(random(10, 80)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityY= 6;
  pink.lifetime = 150;
  pink.scale = 0.15
  pinkB.add(pink);
 
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(250, 500, 60, 10);
  
  
  arrow.x= surivor.x
  
  arrow.velocityY  = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
   
}




