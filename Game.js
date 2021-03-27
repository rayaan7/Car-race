 class Game{
  constructor(){

  }
  readState(){
    var gamestateRef = database.ref('gamestate');
    gamestateRef.on('value',(data)=>{
        gamestate = data.val();
    });
  }
  
  updateState(s){
    database.ref('/').update({
       'gamestate':s
    });
  }


    async start(){
      if(gamestate === 0){
          player=new Player();
          var playerCountRef=await database.ref('playerCount').once("value");
          if(playerCountRef.exists()){
            playerCount=playerCountRef.val();
            player.readCount();
          }
          form=new Form()
          form.display();
          car1 = createSprite(100,200);
          car2 = createSprite(300,200);
          car3 = createSprite(500,200);
          car4 = createSprite(700,200);
          cars = [car1,car2,car3,car4];

          car1.addImage(carImage1);
          car2.addImage(carImage2);
          car3.addImage(carImage3);
          car4.addImage(carImage4);
          
      }
  }
    play(){
      form.hide();
      Player.getPlayerInfo();
      if(allplayers!== undefined ){
        image(trackImage,0,-displayHeight*4, displayWidth,displayHeight*5)
      
      var index = 0
      var x = 210
      var y 
        for(var p in allplayers){
         index = index+1;
         x = x+250
         y = displayHeight-allplayers[p].distance 
         cars[index-1].x=x
         cars[index-1].y=y
          if (index === player.index){
            camera.position.x = displayWidth/2
            camera.position.y = cars[index-1].y
          }
        }
      }
      if(keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance = player.distance+50;
      player.update()
      }

      if(player.distance>4350){
        gamestate = 2;
      }
      drawSprites()


  }
      end(){
        console.log("game ends")
      }
 }