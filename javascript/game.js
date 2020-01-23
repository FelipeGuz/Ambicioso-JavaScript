

function tirarDado(){
    for(var i=0; i<6; i++){
        var k = Math.round(Math.random()*5)+1;
        document.getElementById('dado'+(i+1)).textContent = k;
        console.log(k)
    }
}