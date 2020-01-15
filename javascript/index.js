
function addScore(k){
    var n = document.getElementById("puntaje");

    if(k===0){
        if(n.textContent!="0"){
            n.textContent = (parseInt(n.textContent)-1000).toString();    
        }
    }else if(k===1){
        n.textContent = (parseInt(n.textContent)+1000).toString();
    }
}

function addPlayers(k){
    var n = document.getElementById("jugadores");

    if(k===0){
        if(n.textContent!="0"){
            n.textContent = (parseInt(n.textContent)-1).toString();    
        }
    }else if(k===1){
        n.textContent = (parseInt(n.textContent)+1).toString();
    }
}