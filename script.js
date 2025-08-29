const gameBtns = Array(9).fill(0).map((el, i) => document.getElementById(`grid-${el + i}`))

function evaluateBoardForWinner(btns) {
    const winningCombinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
    let winner = null;
    const boardState = btns.map(el => el.textContent || null)
    winningCombinations.forEach((combi) => {
        if (winner !== null || boardState[combi[0]] !== boardState[combi[1]] || boardState[combi[1]] !== boardState[combi[2]]) { return }
        winner = boardState[combi[0]];
    })
    return winner;
}

function playGame(btns) {
    let xTurn = true;
    function handleClick(event, btns) {
        if (event.target.textContent || evaluateBoardForWinner(btns)) { return; }
        event.target.textContent = xTurn ? "X" : "O"
        if(evaluateBoardForWinner(btns)) {
            console.log("Winner is " + (xTurn ? "X" : "O") + "!")
        }
        xTurn = !xTurn
    }
    btns.forEach(el => {
        el.addEventListener("click", (event) => handleClick(event, btns));
    })
}

playGame(gameBtns)