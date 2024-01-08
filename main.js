const piDigits = "14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038";
let currentIndex = 0;

document.getElementById("userInput").addEventListener("input", checkPi);

function checkPi() {
    const userInput = document.getElementById("userInput").value;

    if (userInput === piDigits.slice(0, userInput.length)) {
        if (userInput.length === piDigits.length) {
            document.getElementById("result").innerHTML = "Congratulations! You typed all the digits correctly!";
        } else {
            currentIndex = userInput.length;
            document.getElementById("result").innerHTML = `Correct! Keep going.`;
        }
    } else {
        document.getElementById("result").innerHTML = `Wrong digit. Game over. The correct digit was ${piDigits[currentIndex]}. You got a score of ${userInput.length -1}!`;
        checkLeaderboard();
        currentIndex = 0; 
    }
}

function restartGame() {
    currentIndex = 0;
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerHTML = "";
}

// function checkLeaderboard() {
//     const userInput = document.getElementById("userInput").value;
//     const rank1Score = parseInt(document.getElementById("rank1").textContent);

//     if ((userInput.length - 1) > rank1Score) {
//         document.getElementById("rank1").textContent = userInput.length - 1;
//     }
// }

document.addEventListener("DOMContentLoaded", function () {
    loadScores();
});

function loadScores() {
    for (let i = 1; i <= 5; i++) {
        const rankElement = document.getElementById(`rank${i}`);
        const storedScore = localStorage.getItem(`rank${i}`);
        if (storedScore !== null) {
            rankElement.textContent = storedScore;
        }
    }
}

function checkLeaderboard() {
    const userInput = document.getElementById("userInput").value;
    const rank1Score = parseInt(document.getElementById("rank1").textContent);

    if ((userInput.length - 1) > rank1Score) {
        document.getElementById("rank1").textContent = userInput.length - 1;

        localStorage.setItem("rank1", userInput.length - 1);
    }
}