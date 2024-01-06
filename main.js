const piDigits = "31415926535897932384626433832795";
let currentIndex = 0;

document.getElementById("userInput").addEventListener("input", checkPi);

function checkPi() {
    const userInput = document.getElementById("userInput").value;

    if (userInput === piDigits.slice(0, userInput.length)) {
        if (userInput.length === piDigits.length) {
            document.getElementById("result").innerHTML = "Congratulations! You typed all the digits correctly!";
            currentIndex = 0; 
        } else {
            currentIndex = userInput.length;
            document.getElementById("result").innerHTML = `Correct! Keep going.`;
        }
    } else {
        document.getElementById("result").innerHTML = `Oops! Wrong digit. Game over. Correct digit was ${piDigits[currentIndex]}`;
        currentIndex = 0; 
    }
}

function restartGame() {
    currentIndex = 0;
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerHTML = "";
}