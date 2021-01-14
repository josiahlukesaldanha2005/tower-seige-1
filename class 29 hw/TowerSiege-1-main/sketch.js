const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
const Render = Matter.Render

var ground1;
var stand1,stand2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18;
var polygon;
var sling1;

var gameState = "onSling"




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
    world = engine.world;
    
ground1 = new Ground(800,690,1600,30);

stand1 = new Ground(700,420,260,20);
stand2 = new Ground(1300,290,260,20);


box1 = new Box(620,385,40,50)
box2 = new Box(660,385,40,50)
box3 = new Box(700,385,40,50)
box4 = new Box(740,385,40,50)
box5 = new Box(780,385,40,50)

box6 = new Box(660,305,40,50)
box7 = new Box(700,305,40,50)
box8 = new Box(740,305,40,50)

box9 = new Box(700,285,40,50)


box10 = new Box(1225,235,40,50)
box11 = new Box(1265,235,40,50)
box12 = new Box(1305,235,40,50)
box13 = new Box(1345,235,40,50)
box14 = new Box(1385,235,40,50)

box15 = new Box(1265,205,40,50)
box16 = new Box(1305,205,40,50)
box17 = new Box(1345,205,40,50)

box18 = new Box(1305,185,40,50)


polygon = new Polygon(400,550,65);

sling1 = new SlingShot(polygon.body,{x:150,y:400});

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(0);


ground1.display();
stand1.display();
stand2.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();


box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();

polygon.display();

sling1.display();

drawSprites();

}


function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    sling1.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        sling1.attach(polygon.body);
    }
}
