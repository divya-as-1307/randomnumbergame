var inpbox=document.getElementById("inpbx")
var noofguess=document.getElementById("noofguess")
var guesscount = 3
var result = document.getElementById("result")
var btn=document.getElementById("btn")


//Generating Random number 
var randomnumber =Math.floor( Math.random()*5)+1

//checking random number

function checkthenumber(){
    if(randomnumber==inpbox.value){
        alert("You guessed right!! The generated randomnumber is: "+randomnumber)
         result.textContent="You are Right!"
    }

    else{
        guesscount=guesscount-1
        if(guesscount==0)
        {
            alert("Oops.. You lost the Game! Better luck next time!!")
            btn.disabled=true
            
        }
        noofguess.textContent = "Available Guesses: "+ guesscount
        result.textContent="You are Wrong!"
    }
}

//restarting the game

function restartgame(){
    location.reload()
}