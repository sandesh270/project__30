const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(400+100, 300, 300, 20);
    platform2 = new Ground(800+100, 200, 200, 20);
    box1 = new Box(355+100,280,30,40,248,43,255);
    box2 = new Box(370+100,280,30,40,248,43,255);
    box3 = new Box(385+100,280,30,40,248,43,255);
    box4 = new Box(400+100,280,30,40,248,43,255);
    box5 = new Box(415+100,280,30,40,248,43,255);
    box6 = new Box(430+100,280,30,40,248,43,255);
    box7 = new Box(445+100,280,30,40,248,43,255);
    box8 = new Box(370+100,260,30,40,119,230,125);
    box9 = new Box(385+100,260,30,40,119,230,125);
    box10 = new Box(400+100,260,30,40,119,230,125);
    box11 = new Box(415+100,260,30,40,119,230,125);
    box12 = new Box(430+100,260,30,40,119,230,125);
    box13 = new Box(385+100,240,30,40,119,230,223);
    box14 = new Box(400+100,240,30,40,119,230,223);
    box15 = new Box(415+100,240,30,40,119,230,223);
    box16 = new Box(400+100,220,30,40,123,119,230);
    box17 = new Box(770+100,190,30,40,248,43,255);
    box18 = new Box(785+100,190,30,40,248,43,255);
    box19 = new Box(800+100,190,30,40,248,43,255);
    box20 = new Box(815+100,190,30,40,248,43,255);
    box21 = new Box(830+100,190,30,40,248,43,255);
    box22 = new Box(785+100,170,30,40,119,230,125);
    box23 = new Box(800+100,170,30,40,119,230,125);
    box24 = new Box(815+100,170,30,40,119,230,125);
    box25 = new Box(800+100,150,30,40,119,230,223);


    stone = new Stone(100,200);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(stone.body,{x:stone.body.position.x, y:stone.body.position.y});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
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
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    stone.display();
    platform1.display();
    platform2.display();
    slingshot.display();
    fill("yellow")
    textSize(30);
    text("Drag the hexagonal stone and release it towards the blocks",50,50)   
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
   
  slingshot.fly();  
}
function keyPressed(){
    if(keyCode===32){
        Matter.Body.setPosition(stone.body, {x: 200 , y: 100});
        if(stone.body.position.x===200&&stone.body.position.y===100){
        slingshot.attach(stone.body);
        }
    }
}