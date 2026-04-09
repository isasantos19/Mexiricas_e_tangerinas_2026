function funcaocalcule(){
    let horas=parseFloat(document.getElementById("inputA").value);
    let carro=document.getElementById("inputB").checked;
    let cliente=document.getElementById("inputC").checked;
    let H1=horas-1;
    let H2=0;
    let H=5;
    let valor2=0;
    let valor4=0;
    let resp=0;

    if(horas<24){
        resp= H + (2.50*H1);

        if(carro==true){
            valor2=(resp*25)/100;
            resp=resp+valor2;
        }

        if(cliente==true){
            valor4=(resp*5)/100;
            resp=resp-valor4;
        }

    }else if(horas>=24){
        H2=horas-24;

        if(H2==0){
            resp=60;
        }else if(H2==1){
            resp=60+5;
        }else{
            resp=60+5+(2.50*(H2-1));
        }

        if(carro==true){
            valor2=(resp*25)/100;
            resp=resp+valor2;
        }

        if(cliente==true){
            valor4=(resp*5)/100;
            resp=resp-valor4;
        }
    }

    //  CONCATENAÇÃO (do seu jeito)
    let tipoCarro;
    if(carro==true){
        tipoCarro="Sim";
    }else{
        tipoCarro="Não";
    }

    let tipoCliente;
    if(cliente==true){
        tipoCliente="Sim";
    }else{
        tipoCliente="Não";
    }

    document.getElementById("resp").innerHTML=
    "Horas: "+horas+"<br>"+
    "Carro Grande: "+tipoCarro+"<br>"+
    "Cliente Frequente: "+tipoCliente+"<br>"+
    "Valor: R$ "+resp.toFixed(2);

    //  LIMPAR CAMPOS
    document.getElementById("inputA").value="";
    document.getElementById("inputB").checked=false;
    document.getElementById("inputC").checked=false;
}