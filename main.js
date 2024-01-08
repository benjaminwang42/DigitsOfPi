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
        document.getElementById("result").innerHTML = `Wrong digit. Game over. You got a score of ${userInput.length -1}!`;
        checkLeaderboard();
        document.getElementById("userInput").removeEventListener("input", checkPi);
        currentIndex = 0; 
    }
}

function restartGame() {
    currentIndex = 0;
    document.getElementById("userInput").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("userInput").addEventListener("input", checkPi);
}

document.addEventListener("DOMContentLoaded", function () {
    //resetLeaderboard();
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
    const rank2Score = parseInt(document.getElementById("rank2").textContent);
    const rank3Score = parseInt(document.getElementById("rank3").textContent);
    const rank4Score = parseInt(document.getElementById("rank4").textContent);
    const rank5Score = parseInt(document.getElementById("rank5").textContent);

    if ((userInput.length - 1) > rank1Score) {
        for (let i = 5; i >= 2; i--){
            document.getElementById(`rank${i}`).textContent = document.getElementById(`rank${i-1}`).textContent
        }
        
        document.getElementById("rank1").textContent = userInput.length - 1;

        localStorage.setItem("rank1", userInput.length - 1);
        for (let i = 5; i>=2;i--){
            localStorage.setItem(`rank${i}`, document.getElementById(`rank${i}`).textContent);
        }
        
    }

    else if ((userInput.length - 1) > rank2Score) {
        for (let i = 5; i >= 3; i--){
            document.getElementById(`rank${i}`).textContent = document.getElementById(`rank${i-1}`).textContent
        }
        
        document.getElementById("rank2").textContent = userInput.length - 1;

        localStorage.setItem("rank2", userInput.length - 1);
        for (let i = 5; i>=3;i--){
            localStorage.setItem(`rank${i}`, document.getElementById(`rank${i}`).textContent);
        }
        
    }

    else if ((userInput.length - 1) > rank3Score) {
        for (let i = 5; i >= 4; i--){
            document.getElementById(`rank${i}`).textContent = document.getElementById(`rank${i-1}`).textContent
        }
        
        document.getElementById("rank3").textContent = userInput.length - 1;

        localStorage.setItem("rank3", userInput.length - 1);
        for (let i = 5; i>=4;i--){
            localStorage.setItem(`rank${i}`, document.getElementById(`rank${i}`).textContent);
        }
    }
    
    else if ((userInput.length - 1) > rank4Score) {
        for (let i = 5; i >= 5; i--){
            document.getElementById(`rank${i}`).textContent = document.getElementById(`rank${i-1}`).textContent
        }
        
        document.getElementById("rank4").textContent = userInput.length - 1;

        localStorage.setItem("rank4", userInput.length - 1);
        for (let i = 5; i>=5;i--){
            localStorage.setItem(`rank${i}`, document.getElementById(`rank${i}`).textContent);
        }
    }

    else if ((userInput.length - 1) > rank2Score) {
        document.getElementById("rank5").textContent = userInput.length - 1;

        localStorage.setItem("rank5", userInput.length - 1);
    }

}   

function resetLeaderboard() {
    for (let i = 1; i <= 5; i++) {
        localStorage.setItem(`rank${i}`) = "";
    }
}