/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

var infant, infant_bg, infant_bg_2
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9
var infant_IMG
var invisibleGround

var health, happiness, wealth, social, knowledge
var checkValue 
var obstaclesGroup

var child_bg, child_bg_2, child, child_IMG
var obstacle_child1, obstacle_child2, obstacle_child3, obstacle_child4, obstacle_child5, obstacle_child6
var obstacle_child7, obstacle_child8, obstacle_child9, obstacle_child10, obstacle_child11, obstacle_child12
var invisibleGround2
var checkValue2
var obstaclesGroup_Child

function preload() {
   infant_bg_2 = loadImage("Infant bg.png")
   infant_IMG = loadImage("Images/Infant/infant.gif")

   obstacle1 = loadImage("Images/Infant/baby food.gif");
   obstacle2 = loadImage("Images/Infant/dirty hands.gif");
   obstacle3 = loadImage("Images/Infant/milk bottle.png");
   obstacle4 = loadImage("Images/Infant/parents.png");
   obstacle5 = loadImage("Images/Infant/rattle.png");
   obstacle6 = loadImage("Images/Infant/stroller.png");
   obstacle7 = loadImage("Images/Infant/toy 1.png");
   obstacle8 = loadImage("Images/Infant/Toy 2.gif");
   obstacle9 = loadImage("Images/Infant/vaccine.png");
   
   child_bg_2 = loadImage("Images/Childhood/Childhood bg.jpg")
   child_IMG = loadImage("Images/Childhood/child.gif")

   obstacle_child1 = loadImage("Images/Childhood/burger.png")
   obstacle_child2 = loadImage("Images/Childhood/coca cola.png")
   obstacle_child3 = loadImage("Images/Childhood/fruits.png")
   obstacle_child4 = loadImage("Images/Childhood/glass of milk.png")
   obstacle_child5 = loadImage("Images/Childhood/good marks.gif")
   obstacle_child6 = loadImage("Images/Childhood/injury.png")
  
   obstacle_child7 = loadImage("Images/Childhood/pizza.png")
   obstacle_child8 = loadImage("Images/Childhood/playing.png")
   obstacle_child9 = loadImage("Images/Childhood/toy areoplane.png")
   obstacle_child10 = loadImage("Images/Childhood/toy car.png")
   obstacle_child11 = loadImage("Images/Childhood/vegetables.gif")
   obstacle_child12 = loadImage("Images/Childhood/video games.png")
}

function setup(){
    var canvas = createCanvas(900,700);
    //engine = Engine.create();
    //world = engine.world;

    infant_bg = createSprite(600, 300);
    infant_bg. addImage(infant_bg_2);
    infant_bg.scale = 3.2;

    infant = createSprite(100, 620, 50, 50)
    infant.addImage(infant_IMG);
    infant.scale = 0.2

    child_bg = createSprite(450, 300);
    child_bg. addImage(child_bg_2);
    child_bg.scale = 2.3;
    child_bg.visible = false;
   
    child = createSprite(100, 600, 50, 50)
    child.addImage(child_IMG);
    child.scale = 0.2
    child.visible = false;


    invisibleGround = createSprite(600, 650, 1200, 20)
    invisibleGround.visible = false;


  

    health = 50
    happiness = 50
    wealth = 0
    social = 50
    checkValue = 0

    obstaclesGroup = new Group();
}

function draw(){
    background(0);
  //  Engine.update(engine);

  if( keyDown("space") && infant.y >= 550) {
   infant.velocityY = -12;
   
 }


 infant.velocityY = infant.velocityY + 0.8

 infant.collide(invisibleGround);
   

     infant_bg.velocityX = -3

     if (infant_bg.x < 0){
        infant_bg.x = infant_bg.width/2;
      }

    
      child_bg.velocityX = -3

      if (child_bg.x < 0){
         child_bg.x = child_bg.width/2;
      }
     
      
     
      spawnObstacles();

      if(infant.isTouching(obstaclesGroup) && checkValue === 1){
          obstaclesGroup.destroyEach();
          health = health + 5
      }

      if(infant.isTouching(obstaclesGroup) && checkValue === 2){
        obstaclesGroup.destroyEach();
        health = health-5
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 3){
        obstaclesGroup.destroyEach();
        health = health + 5
    }
    
    if(infant.isTouching(obstaclesGroup) && checkValue === 4){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       social = social + 5
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 5){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       
    }
    
    if(infant.isTouching(obstaclesGroup) && checkValue === 6){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
      
    }
   
    if(infant.isTouching(obstaclesGroup) && checkValue === 7){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 8){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 9){
        obstaclesGroup.destroyEach();
       happiness = happiness - 5
       health = health + 5
       
    }

    if(frameCount >= 1400){
   
     infant_bg.visible = false;
     infant.visible = false;
      
     child_bg.visible = true
     child.visible = true
    }
 drawSprites();

      textSize(20);
      fill ("black")
      text ("Health: " + health, 100, 100)
      text ("Happiness: " + happiness, 300, 100)
      text ("Wealth: " + wealth, 500, 100)
      text ("Social: " + social, 700, 100)
}

function spawnObstacles() {
   if(frameCount % 150 === 0 && frameCount <= 1400) {
     var obstacle = createSprite(1250,height-200,10,40);
     //obstacle.debug = true;
     obstacle.velocityX = -7;
     
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               checkValue = 1;
               break;
       case 2: obstacle.addImage(obstacle2);
               checkValue = 2;
               break;
       case 3: obstacle.addImage(obstacle3);
               checkValue = 3;
               break;
       case 4: obstacle.addImage(obstacle4);
               checkValue = 4;
               break;
       case 5: obstacle.addImage(obstacle5);
               checkValue = 5;
               break;
       case 6: obstacle.addImage(obstacle6);
               checkValue = 6;
               break;
       case 7: obstacle.addImage(obstacle7);
               checkValue = 7;
               break;   
       case 8: obstacle.addImage(obstacle8);
               checkValue = 8;
               break; 
       case 9: obstacle.addImage(obstacle9);
               checkValue = 9;
               break;    
       default: break;
     }
     
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.2;
    // obstacle.lifetime = 300;
     //add each obstacle to the group
    obstaclesGroup.add(obstacle);
   }
 }

 function spawnObstacles2() {
        if(frameCount % 100 === 0 && frameCount >= 1400) {
          var obstacle_child = createSprite(1250,height-200,10,40);
          //obstacle.debug = true;
          obstacle_child.velocityX = -9;
          
          //generate random obstacles
          var rand2 = Math.round(random(1,6));
          switch(rand2) {
            case 1: obstacle_child.addImage(obstacle1);
                    checkValue = 1;
                    break;
            case 2: obstacle_child.addImage(obstacle2);
                    checkValue = 2;
                    break;
            case 3: obstacle_child.addImage(obstacle3);
                    checkValue = 3;
                    break;
            case 4: obstacle_child.addImage(obstacle4);
                    checkValue = 4;
                    break;
            case 5: obstacle_child.addImage(obstacle5);
                    checkValue = 5;
                    break;
            case 6: obstacle_child.addImage(obstacle6);
                    checkValue = 6;
                    break;
            case 7: obstacle_child.addImage(obstacle7);
                    checkValue = 7;
                    break;   
            case 8: obstacle_child.addImage(obstacle8);
                    checkValue = 8;
                    break; 
            case 9: obstacle_child.addImage(obstacle9);
                    checkValue = 9;
                    break;    
            default: break;
          }
          
          //assign scale and lifetime to the obstacle           
          obstacle.scale = 0.2;
         // obstacle.lifetime = 300;
          //add each obstacle to the group
         obstaclesGroup.add(obstacle);
        }
      }
 

