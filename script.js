let valChoosen = (Math.trunc(Math.random()*100)+1);
console.log(valChoosen);

let valInput = document.querySelector('input');
let historyGess = document.querySelector('.footerGame');
let messages = document.querySelector('.msgs');
let initscore = 10;
let initheightScore = 0;
let gessHistory = [];

// to initialise the game
const btnReset = document.querySelector('.heiderLeft');
btnReset.addEventListener('click', () => window.location.reload() );

const playAgain = document.querySelector('.playAgain');
playAgain.addEventListener('click', () => window.location.reload() );


const btn = document.querySelector('.check');
//console.log (btn);

document.getElementsByClassName('gameWin')[0].style.visibility = 'hidden';
document.getElementsByClassName('playAgain')[0].style.visibility = 'hidden';
document.getElementsByClassName('congra')[0].style.visibility = 'hidden';
document.getElementsByClassName('youwin')[0].style.visibility = 'hidden';

btn.addEventListener('click', function(){

    

        if(!Number(valInput.value) ){
            console.log('Please enter a number, not a String!!');
            messages.textContent = 'Please enter a number, not a String!!';
            
        }
        if(Number(valInput.value) > 100){
            console.log('please choose a number between 1 and 100!');
            messages.textContent = 'Please choose a Value between 1 and 100';
             
            
        }
        if (valInput.value ===''){
            messages.textContent = 'Nothing typed! Please type a number between 1 and 100';
            console.log('Nothing typed! Please type a number between 1 and 100');
            
        }

   
        if (Number(valInput.value) < 100 && Number(valInput.value) > 0){
            if(initscore === 0){
                console.log('game over');
                messages.textContent = 'Game is Over';
            }else{
            if (valChoosen === Number(valInput.value)){
                console.log('You Win the Game');
                messages.textContent = 'You Win the Game';
                initscore--;
                initheightScore++;
                let scr = document.querySelector('.score');
                let hscr = document.querySelector('.heightScore');
                scr.textContent = initscore;
                hscr.textContent = initheightScore;

                //change image
                //change background
                let element = document.getElementById("bdgame");
                element.classList.remove("game");
                element.parentNode.removeChild(element);

                document.getElementsByClassName('gameWin')[0].style.visibility = 'visible';
                document.getElementsByClassName('playAgain')[0].style.visibility = 'visible';
                document.getElementsByClassName('congra')[0].style.visibility = 'visible';
                document.getElementsByClassName('youwin')[0].style.visibility = 'visible';

                elementbtnwin = document.getElementById("youw");
                elementbtnwin.classList.add("youwin");

                elementWin = document.getElementById("congrat");
                elementWin.classList.add("congra");

                elementWin = document.getElementById("gameW");
                elementWin.classList.add("gameWin");
                elementWin.innerText = `your Guess is Correct :${valChoosen}`;
                
                elementbtnwin = document.getElementById("btnPlayagain");
                elementbtnwin.classList.add("playAgain");
                
                //document.querySelector('.game').style.backgroundColor = 'lightgreen';
                
                

            }else{

                    initscore--;
                    initheightScore++;
                    let scr = document.querySelector('.score');
                    let hscr = document.querySelector('.heightScore');
                    scr.textContent = initscore;
                    hscr.textContent = initheightScore;
                    gessHistory.push(valInput.value);
                    console.log(gessHistory);
                    if (Number(valInput.value) > valChoosen){
                        messages.textContent = 'Your Guess is too Hight';
                    }else{
                        messages.textContent = 'Your Gess is too low';
                    }

                    let listGesH = document.getElementById("listGess");
                    let li = document.createElement("li");
                    li.innerText = valInput.value;
                    listGesH.appendChild(li);
                    
            } 
        }
        }

})


