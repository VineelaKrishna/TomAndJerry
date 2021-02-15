var backgroundImg;
var mouseImg1, mouseImg2, mouseImg3, mouse;
var catImg1, catImg2, catImg3, cat;
function preload(){
    backgroundImg = loadImage("images/garden.png");
    
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation(catImg1);
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addAnimation(mouseImg1);
    mouse.scale = 0.2;

}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage",catImg2);
        mouse.addAnimation("mouseLastImage", jerryImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage",mouseImg2);
    }  
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }

}
