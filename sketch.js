var Zenia, Tourus, Cyclap, wall;

var deformation = 0;
var deformation2 = 0;
var deformation3 = 0;

function setup() {
  createCanvas(1750,1000);

  wall = createSprite(1400, 300, 60, height/2);
  wall.debug = true;

  inv = createSprite(1400, 300, 60, height/2);
  inv.visible = false;

  Zenia = createSprite(200, 100, 100, 50);
  Zenia.velocityX = 12;
  Zenia.debug = true;

  Tourus = createSprite(200, 300, 75, 50);
  Tourus.velocityX = 10;
  Tourus.debug = true;

  Cyclap = createSprite(200, 500, 125, 50);
  Cyclap.velocityX = 9;
  Cyclap.debug = true;
}

function draw() {
  background(255,255,255);  

  createEdgeSprites();

  textSize(20);
  textAlign(CENTER);
  text("Deformation: " + Math.round(deformation), 100, 100);

  textSize(20);
  textAlign(CENTER);
  text("Deformation: " + Math.round(deformation2), 100, 300);

  textSize(20);
  textAlign(CENTER);
  text("Deformation: " + Math.round(deformation3), 100, 500);

  textSize(25);
  textAlign(CENTER);
  fill("blue");
  text("Normal Deformation(green): 30 and below ; " + "Average Deformation(yellow): 30 to 60 ; " + "High Deformation(red): 60 and above", 700, 650);

   textSize(30);
   textAlign(CENTER);
   fill("black");
   text("GO(SCROLL) UP", 700, 300);

  Zenia.collide(inv);
  Tourus.collide(inv);
  Cyclap.collide(inv);

 if(wall.x - Zenia.x < wall.width + Zenia.width){
    deformation = (0.5 * 2260 * 12 * 12)/2500;

    if(deformation > 60){
       Zenia.shapeColor = "red";
    }
 }

 if(wall.x - Tourus.x < wall.width + Tourus.width){
    deformation2 = (0.5 * 1522 * 10 * 10)/2500;

    if(deformation2 < 31){
      Tourus.shapeColor = "green";
   }
 }

 if(wall.x - Cyclap.x < wall.width + Cyclap.width){
    deformation3 = (0.5 * 3000 * 9 * 9)/2500;

    if(deformation3 > 31 && deformation3 < 60){
      Cyclap.shapeColor = "yellow";
   }
 }

 
  drawSprites();
}