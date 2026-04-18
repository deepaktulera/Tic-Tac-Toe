const boxes = document.querySelectorAll(".box");
const newGame = document.getElementById("newGame")
const reset = document.getElementById("reset");
const winnerInfo = document.getElementById("winner-info")

let turnO = true;

let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O"
            turnO = false;
            box.disabled = true;
        } else {
            box.innerHTML = "X"
            turnO = true;
            box.disabled = true;
        }
        checkWinner()
    })
});

function disableAllBoxes() {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach(box => {
    box.style.pointerEvents = "none";
  });
}

function showWinner(winner){
    let message = document.createElement("h1")
    message.innerHTML = `Congratulation , winner is ${winner}`;
    winnerInfo.appendChild(message)
}

function checkWinner() {
    for (const winner of winningPattern) {
        let firstValue = boxes[winner[0]].innerText;
        let secondValue = boxes[winner[1]].innerText;
        let thirdValue = boxes[winner[2]].innerText;

        if (firstValue !== "" && secondValue !== "" && thirdValue !== "") {
            if (firstValue === secondValue && secondValue === thirdValue) {
                showWinner(firstValue);
                disableAllBoxes()
            }
        }
    }
}

function removeContect() {
    turnO = true;
    winnerInfo.innerHTML = "";

    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        box.style.pointerEvents = "auto";
    });
}

newGame.addEventListener("click" , removeContect);
reset.addEventListener("click" , removeContect);