var database;
var gamestate = 0;
var playerCount;
var form,game,player;
var allplayers;
var car1, car2, car3, car4, cars;
var carImage1,carImage2,carImage3,carImage4,trackImage
function preload(){
carImage1 = loadImage("images/car1.png");
carImage2 = loadImage("images/car2.png");
carImage3 = loadImage("images/car3.png");
carImage4 = loadImage("images/car4.png");
trackImage = loadImage("images/track.jpg")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database();
    game = new Game();
    game.readState() 
    game.start() 
}

function draw(){

    background("white")
    if(playerCount === 4){
        game.updateState(1)

    }
    if(gamestate=== 1){
        clear();
       game.play();
    }
    if(gamestate === 2){
        game.end();
    }
}

