
var dustbinObj,groundObject,paperObject;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	var canvas = createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world; 
  dustbinObj = new dustbin (1200,650)
  paperObject = new paper(200,450,50);
  groundObject = new ground(width/2,670,width,20);

}

function keyPressed() {
  if (keyCode === UP_ARROW){

Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

  }
}

function draw() {
  background(0);
  Engine.update(engine);
  groundOject.display();
  paperObject.display();
  dustbinObj.display();
}



