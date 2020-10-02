var boxes = document.querySelectorAll('div');

function handleClick(event) {
    event.target.style.backgroundColor = 'red';
}
for (var i=0; i<boxes.length; i++) {
    boxes[i].addEventListener('click' , handleClick)
}


var cellOne = document.querySelector('.cell-One');
var cellTwo = document.querySelector('.cell-Two');
var cellThree = document.querySelector('.cell-Three');
var cellFour = document.querySelector('.cell-Four');
var cellFive = document.querySelector('.cell-Five');
var cellSix = document.querySelector('.cell-Six');
var cellSeven = document.querySelector('.cell-Seven');
var cellEight = document.querySelector('.cell-Eight');
var cellNine = document.querySelector('.cell-Nine');


var o = "O";
var x = "X";

//show the x




// function handleClickForX(event) {   
//     event.target.textContent = "X";
// }

// //show the o
// var boxes = document.querySelectorAll('div');

// function handleClickForO(event) {
    
//     event.target.textContent = "O";
    
// }


// for (var i=0; i<boxes.length; i++) {
//     if (boxes[i].textContent == "O"){
//         boxes[i].addEventListener('click' , handleClickForX)
//     } else {
//         boxes[i].addEventListener('click' , handleClickForO)
//     }
    
// }

var boxes = document.querySelectorAll('div');
var resetBtn = document.querySelector('aside');
var winMssg = document.querySelector('.title');
// var clickSound = document.querySelector('audio');
var clickSound = new Audio('iphone_5s_ding.mp3');
var resetSound = new Audio('iphone.mp3');
var winnerSound = new Audio('apple_mix.mp3');
var currentPlayer = "O";
var storage = [];



function handleClick(event) {
    event.target.textContent = currentPlayer;
    //swich player
    if (currentPlayer == 'O') {
        currentPlayer = 'X';
    } else {
        currentPlayer = 'O';
    }

    //declare an empty array to count the playing times
    storage.push(event.target.textContent)
    console.log(storage);

   

    // find the winner

    if (boxes[0].textContent == 'X' && boxes[1].textContent == 'X' && boxes[2].textContent == 'X') {
        winnerMssgForX()
    } else if (boxes[3].textContent == 'X' && boxes[4].textContent == 'X' && boxes[5].textContent == 'X') {
        winnerMssgForX()
    } else if (boxes[6].textContent == 'X' && boxes[7].textContent == 'X' && boxes[8].textContent == 'X') {
        winnerMssgForX()
    } else if (boxes[0].textContent == 'X' && boxes[4].textContent == 'X' && boxes[8].textContent == 'X') {
        winnerMssgForX()
    } else if (boxes[2].textContent == 'X' && boxes[4].textContent == 'X' && boxes[6].textContent == 'X') {
        winnerMssgForX()
    } else if (boxes[0].textContent == 'X' && boxes[3].textContent == 'X' && boxes[6].textContent == 'X') {
        winnerMssgForX()
    } else if (boxes[1].textContent == 'X' && boxes[4].textContent == 'X' && boxes[7].textContent == 'X') {
        winnerMssgForX()
    } else if (boxes[2].textContent == 'X' && boxes[5].textContent == 'X' && boxes[8].textContent == 'X') {
        winnerMssgForX() 
        //the x winns!

    } else if (boxes[0].textContent == 'O' && boxes[1].textContent == 'O' && boxes[2].textContent == 'O') {
        winnerMssgForO()
    } else if (boxes[3].textContent == 'O' && boxes[4].textContent == 'O' && boxes[5].textContent == 'O') {
        winnerMssgForO()
    } else if (boxes[6].textContent == 'O' && boxes[7].textContent == 'O' && boxes[8].textContent == 'O') {
        winnerMssgForO()
    } else if (boxes[0].textContent == 'O' && boxes[4].textContent == 'O' && boxes[8].textContent == 'O') {
        winnerMssgForO()
    } else if (boxes[2].textContent == 'O' && boxes[4].textContent == 'O' && boxes[6].textContent == 'O') {
        winnerMssgForO()
    } else if (boxes[0].textContent == 'O' && boxes[3].textContent == 'O' && boxes[6].textContent == 'O') {
        winnerMssgForO()
    } else if (boxes[1].textContent == 'O' && boxes[4].textContent == 'O' && boxes[7].textContent == 'O') {
        winnerMssgForO()
    } else if (boxes[2].textContent == 'O' && boxes[5].textContent == 'O' && boxes[8].textContent == 'O') {
        winnerMssgForO() //the o winns!
    } else if (boxes.length == storage.length) {
        //making the draw
        //if all the boxes filled, console.log(it is a draw)
        drawMssg();
    }
        
}


for (var i=0; i<boxes.length; i++) {
    boxes[i].addEventListener('click' , handleClick)
}



//make a sound for each click
function soundClick () {
    clickSound.play();
}

for (var i=0; i<boxes.length; i++) {
    boxes[i].addEventListener('click' , soundClick)
}



//making the reset click
function resetClick(event) {
    for (var i=0; i<boxes.length; i++) {
        boxes[i].textContent = '';
        winMssg.textContent = 'TIC TOC TOE'
        resetSound.play();
    }
    


}
resetBtn.addEventListener('click' , resetClick)



//the winner message
function winnerMssgForO() {
    winMssg.textContent = '"O" IS THE WINNER!';
    winnerSound.play();

}

function winnerMssgForX() {
    winMssg.textContent = '"X" IS THE WINNER!';
    winnerSound.play();
}

//the draw message
function drawMssg() {
    winMssg.textContent = 'IT IS A DRAW!';
}







