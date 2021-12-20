function playSound() {
    // Variables for sound
    let spaceSound = new Audio("us-lab-background.mp3");
    let play = document.getElementById("btnSound");
    
    play.addEventListener("click", function(){spaceSound.play();})
}


function StartTheCountDown() {
// The purpose of this function is to start the countdown
// and control the countdown also

// Declare variables

//Used to display to user on screen
let countdown = 10;
//Used to keep track of actual time
// 1000 = 1 second because we are using milliseconds
let timeout = 10000;



// Use a loop to control the countdown
for ( let i = 10; i >= 0, i--;) {


    // Use the set timeout function for countdown
    setTimeout(() => {
        document.getElementById("counter").innerHTML = countdown;
        countdown = countdown -1;
        // Write 'Blastoff!' when the counter reaches 0
        if (countdown == 0) {
        document.getElementById("counter").innerHTML = "Blastoff!";
        }
    }, timeout)
    timeout = timeout - 1000;

}




}