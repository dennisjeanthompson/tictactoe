const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getInput(prompt) {
    return new Promise((resolve) => {
        rl.question(prompt, (input) => {
            resolve(input);
        });
    });
}

let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];

async function restart() {
    board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    console.log("Board restarted. Do you want to continue playing? (Y/N)");
    const askAgain = (await getInput("")).toLowerCase();
    if (askAgain === "y") {
        playGame();
    } else {
        console.log("Goodbye!");
        //we are dead nananann nananan
        //we are dead mananna naanana what the fucking hell living in this world come on
        rl.close();
    }
}

function checkWinner(player) {
    const winPatterns = [
        [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]], // Rows
        [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], // Columns
        [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]  // Diagonals
    ];
    return winPatterns.some(pattern => pattern.every(([r, c]) => board[r][c] === player));
}

function printBoard() {
    console.log(`
        [============]
       :| ${board[0][0]} | ${board[0][1]} | ${board[0][2]} |:
        -------------
       :| ${board[1][0]} | ${board[1][1]} | ${board[1][2]} |:
        ------------- 
       :| ${board[2][0]} | ${board[2][1]} | ${board[2][2]} |:
       [=============]
    `);
}

async function playerMove(player) {
    while (true) {
        const move = await getInput(`Player ${player}, enter your move (1-9): `);
        const pos = parseInt(move) - 1;
        const row = Math.floor(pos / 3);
        const col = pos % 3;
        console.log(col  + "value of column (col)");
        if (pos >= 0 && pos < 9 && board[row][col] === " ") {
            board[row][col] = player;
            break;
        } else {
            console.log("Invalid move. Try again.");
        }
    }
    printBoard();
}

async function playGame() {
    let currentPlayer = "X";
    for (let i = 0; i < 9; i++) {
        await playerMove(currentPlayer);
        if (checkWinner(currentPlayer)) {
            console.log(`Player ${currentPlayer} wins!`);
            return restart();
        }
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
    console.log("It's a draw!");
    restart();
}

playGame();
