
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,Slingshot;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(650,300)

	mango1=new mango(1100,100,30);
	mango2=new mango(1140,100,30);
	mango3=new mango(1180,100,30);
	mango4=new mango(1060,100,30);
	mango5=new mango(1020,100,30);
	mango6=new mango(1100,50,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	Slingshot = new slingshot(stone.body,{x: 500, y: 300})
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  Slingshot.display()


  groundObject.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    Slingshot.fly();
}