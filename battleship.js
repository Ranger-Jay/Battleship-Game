 // declare variables for ship locations
var randomLoc = Math.floor(Math.random() * 5); // the magic location randomizer
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;

// initialize variables for player guesses and number of hits, starting at 0
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while(isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number (0-6):");
    if (guess < 0 || guess > 6) {
        alert("Invalid guess. Please enter a number between 0 and 6.");
    } else {
        guesses = guesses +1;
        // can include an else if: guess == null, then end game. book page 55, first Q&A
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sunk my battleship!");
            }
        } else {
            alert("Miss!");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
    "which means your shooting accuracy was " + ((3/guesses) * 100) + "%";
    alert(stats);

