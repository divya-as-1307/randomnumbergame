var inpbox=document.getElementById("inpbx")
var noofguess=document.getElementById("noofguess")
var guesscount = 3
var result = document.getElementById("result")
var btn=document.getElementById("btn")


//Generating Random number 
var randomnumber =Math.floor( Math.random()*5)+1

//checking random number

function checkthenumber(){
     if (inpbox.value === "") {
        alert("Please enter a number!");
        return;
    }

       if (inpbox.value > 5) {
        alert("Please enter a number from 1 to 5!");
        inpbox.value = "";
        return;
    }


    if(randomnumber==inpbox.value){
        alert("You guessed right!!")
         result.textContent="You are Right!"
          btn.disabled=true;
    }

    else{
        guesscount=guesscount-1
        if(guesscount==0)
        {
            alert("Oops.. You lost the Game! Better luck next time!! The gnerated random number is: "+randomnumber)
            btn.disabled=true;
            
        }
        noofguess.textContent = "Available Guesses: "+ guesscount
        result.textContent="You are Wrong!"
    }
    inpbox.value = "";
}

//restarting the game

function restartgame(){
    location.reload()
}