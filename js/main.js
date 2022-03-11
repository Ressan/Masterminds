console.log('Hello');
console.error('World');
console.warn('!');

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
    if((tour == MAX_TOUR) || (reponse.toString() == "1,1,1,1")){        
        document.querySelector('.btn').setAttribute('value','Rejouer');
        document.querySelector('.btn').setAttribute('onclick','rejouer()');
    }
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
    
    let stateDiv = document.createElement('div');
    if(reponse.toString() == "1,1,1,1")
    {
        tour = MAX_TOUR + 1;

        stateDiv.innerHTML = "Victoire.";
        document.querySelector('.statut_jeu').style.color = "turquoise"
        document.querySelector('.statut_jeu').appendChild(stateDiv);;
        
        //document.querySelector('.btn').replaceWith( <input type="submit" name="send" class="btn" id="btn-valider" value="Rejouer" onkeypress="enter" onclick={valid()}/>);

    }
    else if(tour == MAX_TOUR)
    {
        stateDiv.innerHTML = "Défaite.";
        document.querySelector('.statut_jeu').style.color = "orangered";
        document.querySelector('.statut_jeu').appendChild(stateDiv);

    }
    tour++;   

}


const rejouer = () => {
    //On rejoue (en rafraichissant la page)
    document.location.reload(false);
}





