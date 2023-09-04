let max = prompt("Enter a maximum number");
while (isNaN(max) || max <= 0) {
    max = parseInt(prompt("Enter a valid number"));
}
const targetnum = Math.floor(Math.random() * max) + 1;

let attempt = 1;

let guess = prompt("Enter your guess");
while (parseInt(guess) != targetnum) {
    if (guess === "q") {
        break;
    }
    attempt++
    if (guess > targetnum) {
        guess = prompt("its too high!! enter a new guess");
    }
    else {
        guess = prompt("its too low!! enter a new guess");
    }
}
if (guess == "q") {
    console.log("you quit!!!!");
}
else {
    console.log(`you got it!!!!! its took you ${attempt} guesses`);
}