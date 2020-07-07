document.getElementById('header').style.color = 'red';
document.getElementById('header').style.fontFamily = 'berlin sans fb';

function player1() {
    let numbers = Math.random() * 6;
    let randomNumbers = Math.floor(numbers) + 1;
    let player1dice = document.getElementsByClassName('image')[0];
    if (randomNumbers === 1) {
        player1dice.style.backgroundImage = "url('dice1.png')";
        document.getElementById('winner1').innerHTML = (randomNumbers);
    } else if (randomNumbers === 2) {
        player1dice.style.backgroundImage = "url('dice2.png')";
        document.getElementById('winner1').innerHTML = (randomNumbers);
    } else if (randomNumbers === 3) {
        player1dice.style.backgroundImage = "url('dice3.png')";
        document.getElementById('winner1').innerHTML = (randomNumbers);
    } else if (randomNumbers === 4) {
        player1dice.style.backgroundImage = "url('dice4.png')";
        document.getElementById('winner1').innerHTML = (randomNumbers);
    }
    else if (randomNumbers === 5) {
        player1dice.style.backgroundImage = "url('dice5.png')";
        document.getElementById('winner1').innerHTML = (randomNumbers);
    } else {
        player1dice.style.backgroundImage = "url('dice6.png')";
        document.getElementById('winner1').innerHTML = (randomNumbers);
    }

}

function player2() {
    let numbers = Math.random() * 6;
    let randomNumbers = Math.floor(numbers) + 1;
    let player2dice = document.getElementsByClassName('image')[1];
    if (randomNumbers === 1) {
        player2dice.style.backgroundImage = "url('dice1.png')";
        document.getElementById('winner2').innerHTML = (randomNumbers);
    } else if (randomNumbers === 2) {
        player2dice.style.backgroundImage = "url('dice2.png')";
        document.getElementById('winner2').innerHTML = (randomNumbers);
    } else if (randomNumbers === 3) {
        player2dice.style.backgroundImage = "url('dice3.png')";
        document.getElementById('winner2').innerHTML = (randomNumbers);
    } else if (randomNumbers === 4) {
        player2dice.style.backgroundImage = "url('dice4.png')";
        document.getElementById('winner2').innerHTML = (randomNumbers);
    }
    else if (randomNumbers === 5) {
        player2dice.style.backgroundImage = "url('dice5.png')";
        document.getElementById('winner2').innerHTML = (randomNumbers);
    } else {
        player2dice.style.backgroundImage = "url('dice6.png')";
        document.getElementById('winner2').innerHTML = (randomNumbers);
    }
}

// if (player1().randomNumbers>player2().randomNumbers){
//     document.getElementById('winner1').innerHTML=('Player 1 wins')
// } else {
//     document.getElementById('winner2').innerHTML=('Player 2 wins')
// }
player1();
player2();