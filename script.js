const game = (function(doc) {
    const gameBtns = Array(9).fill(0).map((el, i) => doc.getElementById(`grid-${el + i}`))
    
    function evaluateBoardForWinner() {
        const winningCombinations = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]]
        let winner = null;
        const boardState = gameBtns.map(el => el.textContent || null)
        winningCombinations.forEach((combi) => {
            if (winner !== null || boardState[combi[0]] !== boardState[combi[1]] || boardState[combi[1]] !== boardState[combi[2]]) { return }
            winner = boardState[combi[0]];
        })
        return winner;
    }

    function play() {
        let xTurn = true;
        function handleClick(event, gameBtns) {
            if (event.target.textContent || evaluateBoardForWinner(gameBtns)) { return; }
            event.target.textContent = xTurn ? "X" : "O"
            if(evaluateBoardForWinner(gameBtns)) {
                console.log("Winner is " + (xTurn ? "X" : "O") + "!")
            }
            xTurn = !xTurn
        }
        gameBtns.forEach(el => {
            el.addEventListener("click", (event) => handleClick(event, gameBtns));
        })
    }
    return { play }
})(document);

game.play()