class Game {
    constructor(){}
    
    getState(){
        var gameStateRef = database.ref('gameState'); //reference to the database
        gameStateRef.on("value",function(data){ //asking the program to listen and read the value of gameState
            gameState=data.val(); //assign that value to the gameState in this program 
        })
    }
    
    update(state){
        database.ref('/').update({  //updates the state at gameState
            gameState: state 
        });
    }

    start(){
        if(gameState===0){ 
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}