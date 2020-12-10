class Form {
    constructor(){}

    display(){
        var title = createElement('h2'); //creating the heading 
        title.html("Car Racing Game"); //Car Racing Game will be displayed
        title.position(130,0); //setting the position

        var input = createInput("Name"); //asking the system to create an textbox where the player can write their name
        var button = createButton('Play'); //creating a play button
        
        input.position(130,160); //setting the input position
        button.position(250,200); //setting the button position
        
        button.mousePressed(function(){
            input.hide(); //hiding the text
            button.hide(); //hiding the button
            
            var name = input.value(); //assigning the value to the name
            
            playerCount += 1; //adding a player to the playerCount
            player.update(name); //updating the name
            player.updateCount(playerCount); //updating the playerCount
            var greeting = createElement('h3'); 
            greeting.html("Hello " + name); //the greeting text
            greeting.position(130,160); //setting the greeting position
        });

    
    }}