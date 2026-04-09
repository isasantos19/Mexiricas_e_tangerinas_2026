function funcaocalcula(){
    let RA=parseInt(document.getElementById("inputA").value);
    let nome=document.getElementById("inputB").value;
    let N1=parseInt(document.getElementById("inputC").value);
    let N2=parseInt(document.getElementById("inputD").value);
    let N3=parseInt(document.getElementById("inputE").value);
    let N4=parseInt(document.getElementById("inputF").value);
    let N5=parseInt(document.getElementById("inputG").value);
    let media=0;
    let resp="";
    let result="";
    let con="";

    if(N1<0 || N1<100){
        alert("Insira um número válido!!");
        document.getElementById("inputC").innerHTML="";
    }if(N2<0 || N2<100){
        alert("Insira um número válido!!");
        document.getElementById("inputD").innerHTML= "";
    }if(N3<0 || N3<100){
        alert("Insira um número válido!!");
        document.getElementById("inputE").innerHTML= "";
    }if(N4<0 || N4<100){
        alert("Insira um número válido!!");
        document.getElementById("inputF").innerHTML= "";
    }if(N5<0 || N5<100){
        alert("Insira um número válido!!");
        document.getElementById("inputF").innerHTML= "";
    }

    media=(N1 + N2 * 2 + N3 * 3 + N4 * 4 + N5 )/11

    if(media>=90){
        resp= "Aprovado";
        con= "A";
    }else if(media>=75){
        resp= "Aprovado";
        con="B";
    }else if(media>=60){
        resp= "Aprovado";
        con="C";
    }else if(media>=40){
        resp= "Reprovado";
        con="D";
    }else if(media<40){
        resp= "Reprovado";
        con="E";
    }
          
    result="RA:"+"a"+RA+"<br>"+"Nome:"+ nome+"<br>"+"Notas:"+N1+"-"+N2+"-"+N3+"-"+N4+"-"+N5+"<br>"+"Média de Aproveitamento:"+media+"<br>"+"Conceito:"+con+"<br>"+"Situação:"+resp;
    document.getElementById("resp").innerHTML= result;
}