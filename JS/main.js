let firstCard = 5
let secondCard = 8

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Hit?");
} else if (sum === 21) {
    console.log("blackjack");
} else if (sum > 21) {
    console.log("lost");
}