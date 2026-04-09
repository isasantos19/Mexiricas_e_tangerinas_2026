let pontosA = 0;
let pontosB = 0;
let set = 1;
let tempo = 0;
let cont;

// DEFINIR NOMES
function definirTimes(){
    let nomeA = document.getElementById("nomeA").value;
    let nomeB = document.getElementById("nomeB").value;

    document.getElementById("timeA").innerHTML = nomeA;
    document.getElementById("timeB").innerHTML = nomeB;
}

// SOMAR PONTOS TIME A
function pontoA(){
    let limite;

    if(set < 3){
        limite = 25;
    }else{
        limite = 15;
    }

    if(pontosA < limite){
        pontosA = pontosA + 1;
    }

    document.getElementById("pontosA").innerHTML = pontosA;
}

// SOMAR PONTOS TIME B
function pontoB(){
    let limite;

    if(set < 3){
        limite = 25;
    }else{
        limite = 15;
    }

    if(pontosB < limite){
        pontosB = pontosB + 1;
    }

    document.getElementById("pontosB").innerHTML = pontosB;
}

// TEMPO (corrigido para não duplicar)
function iniciar(){
    clearInterval(cont);

    cont = setInterval(function(){
        tempo = tempo + 1;
        document.getElementById("tempo").innerHTML = tempo;
    },1000);
}

function parar(){
    clearInterval(cont);
}

// PRÓXIMO SET
function proxSet(){
    if(set < 3){
        set = set + 1;

        pontosA = 0;
        pontosB = 0;
        tempo = 0;

        document.getElementById("set").innerHTML = set;
        document.getElementById("pontosA").innerHTML = pontosA;
        document.getElementById("pontosB").innerHTML = pontosB;
        document.getElementById("tempo").innerHTML = tempo;
    }
}

// RESETAR TUDO
function resetar(){
    pontosA = 0;
    pontosB = 0;
    set = 1;
    tempo = 0;

    document.getElementById("set").innerHTML = set;
    document.getElementById("pontosA").innerHTML = pontosA;
    document.getElementById("pontosB").innerHTML = pontosB;
    document.getElementById("tempo").innerHTML = tempo;

    document.getElementById("timeA").innerHTML = "Time A";
    document.getElementById("timeB").innerHTML = "Time B";
}