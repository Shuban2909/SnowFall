Engine = Matter.Engine;
World= Matter.World;
Bodies = Matter.Bodies;

var engine;
var world;
var Bgimg;
var Snow=[];

function preload(){
  Bgimg=loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;
  
  // Snow=new snow(random(10,990),100,10,10);
}

function draw() {
  background(Bgimg); 
  Engine.update(engine); 
  if(frameCount%5==0){
  Snow.push(new snow(random(20,980),random(10,600),50,50));
  Snow.lifeTime=100
  // Snow.scale=20;
  //Snow.display();
  }
  for (var j = 0; j < Snow.length; j++) {
  
    Snow[j].display();
  }
}