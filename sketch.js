var iss,backgroundImage,spaceCraft1;
var issImage,background,spaceCraft1Image,spaceCraft2Image,spaceCraft3Image,spacecraft4Image;
var hasDocked=false
function preload(){
backgroundImage=loadImage("spacebg.png")
issImage=loadImage("iss.png")
spaceCraft1Image=loadImage("spacecraft1.png")
spaceCraft2Image=loadImage("spacecraft2.png")
spaceCraft3Image=loadImage("spacecraft3.png")
spaceCraft4Image=loadImage("spacecraft4.png")
}                                                            
function setup() {
  createCanvas(1300,580);
  spaceCraft1=createSprite(400,400,20,20)
  spaceCraft1.addImage(spaceCraft1Image)
  iss=createSprite(400,200,20,20)
  iss.addImage(issImage)

  spaceCraft1.scale=0.3
 
 
}

function draw() {
  background(backgroundImage);  
  drawSprites();
 if(!hasDocked){
   spaceCraft1.x=spaceCraft1.x+random(-1,1)
 
   if(keyDown(LEFT_ARROW)){
     spaceCraft1.x=spaceCraft1.x-3
     spaceCraft1.addImage(spaceCraft4Image)
   }

   if(keyDown(RIGHT_ARROW)){
     spaceCraft1.x=spaceCraft1.x+3
     spaceCraft1.addImage(spaceCraft3Image)
   }
   if(keyDown(UP_ARROW)){
     spaceCraft1.y=spaceCraft1.y-3
     spaceCraft1.addImage(spaceCraft2Image)
   }
 }
 console.log(spaceCraft1.x)
 console.log(spaceCraft1.y)
 if(spaceCraft1.x>330 && spaceCraft1.x<350 && spaceCraft1.y<=331){
hasDocked=true
spaceCraft1.addImage(spaceCraft1Image)
textSize(50)
fill(255)
text("Docking successful",400,400)


  console.log("done")
 }

 
}