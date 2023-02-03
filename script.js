console.log("Welcomr to Tic Tac Toe")
let gameover = new Audio('gameover.mp3')

let turn = "X";
let gameoverfinal = false;


//Function To change Turn
const changeTurn = () => {
    return  turn === "X"?"O" : "X";

}


const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1 ,2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText === boxtext[e[2]].innerText) && boxtext[e[0]].innerText !== '')
        {
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " WON";
            gameoverfinal = true;
            gameover.play();

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"

        }

    })

}

// Game Logic
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach(element => {
    // gameover.muted = false;
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();


            if(gameoverfinal === false)
            {

                document.getElementsByClassName('turn')[0].innerText = "Turn For " + turn; 
            }
        }
    })
})


//RESET
reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    gameoverfinal = false
    document.getElementsByClassName('turn')[0].innerText = "Turn For " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px" 
    // gameover.muted = true;
    // gameover.muted = false;
})