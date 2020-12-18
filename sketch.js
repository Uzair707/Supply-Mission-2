var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var rectangle1Sprite,rectangle2Sprite,rectangle3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	rectangle1Sprite = createSprite(width/2,650,200,20)
	rectangle1Sprite.shapeColor = "red"

	rectangle2Sprite = createSprite(290,560,20,200)
	rectangle2Sprite.shapeColor = "red"

	rectangle3Sprite = createSprite(510,560,20,200)
	rectangle3Sprite.shapeColor = "red"
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	rectangle1Body = Bodies.rectangle(width/2,200,200,20,{isStatic:true});
	World.add(world,rectangle1Body);

	rectangle2Body = Bodies.rectangle(350,200,20,200,{isStatic:true});
	World.add(world,rectangle2Body);

	rectangle3Body = Bodies.rectangle(500,200,20,200,{isStatic:true});
	World.add(world,rectangle3Body);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false)

    
  }
}



