class Player {
    constructor(){}

    getCount(){
        var playerCountRef = database.ref('playerCount'); //asking the program to refer to the playerCount value
        playerCountRef.on("value",function(data){ //reading the value of the playerCount
            playerCount = data.val(); //assigning the data to the playerCount variable
        })
    }

    updateCount(count){
        database.ref('/').update({ //asking the database to refer to the root and to update the value of playerCount as count
            playerCount: count //assigning the value of playerCount to count
        });
    }

    update(name){
        var playerIndex = "player" + playerCount; //updating the index as players join the game
        database.ref(playerIndex).set({ //setting the player index
            name: name //assigning the value of name to name
        });
    }
}