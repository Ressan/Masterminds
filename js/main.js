console.log('Hello');
console.error('World');
console.warn('!');

    "use strict";

    let minute = 0;
    let second = 44;
    let millisecond = 1000;
    let hour = 0;

    let cron;

    let chiffreAlea = [];
    let reponse = [];
    let userAnswer = [];
    let tour = 1;
    const MAX_TOUR = 9;

for (let i = 0; i < 4; i++) {
    chiffreAlea.push(parseInt(Math.random() * 9));
    console.log(chiffreAlea[i]);
    reponse[i] = 'X';
}

const valid = () => {
    if(tour == 1)
        start();
   /**/

    console.log("Valid");

    for (let i = 0; i < 4; i++) {
        reponse[i] = "X";
        userAnswer[i] = parseInt(document.querySelector(".answer"+(i+1)).value);
        console.log(userAnswer[i],chiffreAlea[i]);
        
        if(userAnswer[i] === chiffreAlea[i]){
            reponse[i] = "1";   
        }
        else{
            for (let j = 0; j < 4; j++) {
                if( i != j && userAnswer[i] === chiffreAlea[j])
                {
                    reponse[i] = "."; 
                }
            }
        }
    }    
    console.log(reponse.toString());

    document.querySelector('.tour').innerHTML = "Tour " + tour +"/9" ;
    
    let repDiv = document.createElement('div');
    repDiv.classList.add('reponse'+tour)
    
    repDiv.innerHTML = userAnswer[0] + "  " + userAnswer[1] + "  " + userAnswer[2] + "  " +userAnswer[3] + '<br>';
    if(tour > 1)
        document.querySelector('.reponse'+(tour-1)).before(repDiv);
    else
        document.querySelector('.reponse').appendChild(repDiv);
    

    for (let i = 0; i < 4; i++) {
        answerBox = document.querySelector(".answer"+(i+1));
        if(reponse[i] === "X")
        {
            answerBox.style.border = "solid 3px red";
        }
        else if (reponse[i] === "."){
            
            answerBox.style.border = "solid 3px yellow";
        }
        else{            
            answerBox.style.border = "solid 3px green";
        }
    }
    state_of_game();
    tour++;   
}


//Fonction qui gèrent la fin du jeu
function state_of_game()
{
    console.log('sog');
    if(reponse.toString() == "1,1,1,1")
    {
        pause();
        document.querySelector('.statut_jeu').append("Victoire.");
        document.querySelector('.statut_jeu').style.color = "turquoise"
    }
    else if(endTimer())
    {  
        
        console.log('sog');
        document.querySelector('.statut_jeu').append('Défaite.');
        document.querySelector('.statut_jeu').style.color = "orangered";
    }

    if((reponse.toString() == "1,1,1,1") || endTimer()){        
        document.querySelector('.btn').setAttribute('value','Rejouer');
        document.querySelector('.btn').setAttribute('onclick','rejouer()');
    }
}



const rejouer = () => {
    //On rejoue (en rafraichissant la page)
    document.location.reload(false);
}

function pause() {
    clearInterval(cron);
}

function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
}

function timer() {
    if ((millisecond -= 10) == 0 && second != 0) {
        millisecond = 1000;
        second--;
    }
    if (second == 0 && minute != 0) {
        second = 60;
        minute--;
    }
    if (minute == 00 && hour!= 0) {
        minute = 60;
        hour--;
    }

    if(endTimer() == true)
    {
        console.log('EndTimer');
        pause();
        state_of_game();
    }

    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
}

function endTimer()
{
    let fin = false;
    if(hour == 0 && minute == 0 && second == 0 && millisecond == 0)
    {
        fin = true;
    }
    return fin;
}

function returnData(input) {
    return input > 10 ? input : `${input}`
}



