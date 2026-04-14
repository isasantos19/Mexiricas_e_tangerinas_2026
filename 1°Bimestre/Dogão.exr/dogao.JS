function calcula(){
    let cb=parseInt(document.getElementById("inputA").value);
    let cduplo=parseInt(document.getElementById("inputB").value);
    let xsalada=parseInt(document.getElementById("inputC").value);
    let refri1=parseInt(document.getElementById("inputD").value);
    let refri2=parseInt(document.getElementById("inputE").value);
    let total=0;
    let p1= 0;
    let p2= 0;
    let p3= 0;
    let p4= 0;
    let p5= 0;

    if(cb < 0){
        alert ("Insira um número Válido ou apenas deixe em branco !")
        return;
    }
    if(cduplo < 0){
        alert ("Insira um número Válido ou apenas deixe em branco !")
        return;
    }
    if(xsalada < 0){
        alert ("Insira um número Válido ou apenas deixe em branco !")
        return;
    }
    if(refri1 < 0){
        alert ("Insira um número Válido ou apenas deixe em branco !")
        return;
    }
    if(refri2 < 0){
        alert ("Insira um número Válido ou apenas deixe em branco !")
        return;
    }

    if(isNaN(cb)){
        p1=0;
    }else{
        p1= 22 * cb;
    }
    if(isNaN(cduplo)){
        p2= 0;
    }else{
        p2= 26 * cduplo;
    }
    if(isNaN(xsalada)){
        p3= 0
    }else{
        p3=29 * xsalada;
    }
    if(isNaN(refri1)){
        p4= 0;
    }else{
        p4=5 * refri1;
    }
    if(isNaN(refri2)){
        p5= 0;
    }else{
        p5= 8 * refri2;
    }

    total= p1 + p2 + p3 + p4 + p5;

    document.getElementById("resp").innerHTML=total;
}