var  database;
var canvas, backgroundImage;
var gameState = 0;
var form, player,game;
var playerCount;

function setup(){
  createCanvas(400,400);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  
}

