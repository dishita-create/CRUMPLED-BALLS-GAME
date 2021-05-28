
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,690,width,10);
	dustbinObj=new dustbin(1100,675);
	pap=new Paper(200,500)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
 

  groundObject.display();
  dustbinObj.display();
  fill("red")
  pap.display()
  

}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(pap.body,pap.body.position,{x:110,y:-130})

}







}
