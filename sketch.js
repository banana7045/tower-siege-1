const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var poly
var sling


function preload() {

 }
 
 function setup(){
var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
ground = new Ground(600,height,1200,20);
platform = new Ground(150, 305, 300, 170);
box1 = new Box(700,320,70,70);
poly = new polygon(300,90)
sling = new SlingShot(poly.body,{x:255,y:90})

 }

 function draw(){
background(255)
 Engine.update(engine)    
box1.display()
poly.display()
sling.display()
ground.display()
 }
 function mouseDragged() {
        Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
    }



function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}