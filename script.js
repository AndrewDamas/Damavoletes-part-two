let name = prompt("Welcome to GC mini-golf! What is your name?")
let holes = prompt("Hi, " + name + "! Would you like to play 3 or 6 holes?")
let total = 0
if (holes === "3") {
    for (let i = 0; i < holes; i++) {
        let score = Number( prompt("How many putts for Hole " + (i + 1) + "? (par: 3)") );
        total += score;
    }
    if (total > 9) {
        console.log("Nice try, " + name + "... Your total par was: +" + (total - 9) + ".")
    } else if (total < 9) {
        console.log("Great job," + name + "! Your total par was: -" + (9 - total) + ".")
    } else if (total === 9) {
        console.log("Good game, " + name + ". Your total par was: 0.")
    }
} else if (holes === "6") {
    for (let i = 0; i < holes; i++) {
        let score = Number( prompt("How many putts for Hole " + (i + 1) + "? (par: 3)") );
        total += score;
    }
    if (total > 18) {
        console.log("Nice try, " + name + "... Your total par was: +" + (total - 18) + ".")
    } else if (total < 18) {
        console.log("Great job," + name + "! Your total par was: -" + (18 - total) + ".")
    } else if (total === 18) {
        console.log("Good game, " + name + ". Your total par was: 0.")
    }
} else {
    alert ("Must enter 3 or 6! Refresh page and try again.")
}