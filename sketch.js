var gameState = 0
var form,player,game,playerCount
var database

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    game = new Game()
    game.readGameState()
    game.start()
  
}

function draw(){
    background("white");

 
}

