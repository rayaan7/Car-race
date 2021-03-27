class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index = null;
    }
    readCount(){
      var playerCountRef=database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
          playerCount=data.val();
      }) 
    }
    updateCount(c){ 
     database.ref('/').update({
         'playerCount':c
     })   
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            'name':this.name,
            'distance': this.distance,
        })
    }
    static getPlayerInfo(){
      var playerInfoRef=database.ref("players");  
      playerInfoRef.on("value",(data)=>{
        allplayers=data.val();
      })

      
    }
    
    
}