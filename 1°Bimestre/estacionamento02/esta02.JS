function funcaocalcule(){
    let entrada=document.getElementById("inputA").value;
    let saida=document.getElementById("inputA2").value;
    let carro=document.getElementById("inputB").checked;
    let cliente=document.getElementById("inputC").checked;

    let dataEntrada=new Date(entrada);
    let dataSaida=new Date(saida);

    let diferenca=0;
    let horas=0;
    let H1=0;
    let H2=0;
    let H=5;
    let valor2=0;
    let valor4=0;
    let resp=0;

    if(entrada=="" || saida==""){
        alert("Preencha a data e hora de entrada e saída!");
        return;
    }

    if(dataSaida<=dataEntrada){
        alert("A saída deve ser depois da entrada!");
        return;
    }

    diferenca=dataSaida-dataEntrada;
    horas=diferenca/(1000*60*60);
    horas=Math.ceil(horas);

    if(horas<24){
        H1=horas-1;
        resp=H+(2.50*H1);

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

    let tipoCarro="";
    if(carro==true){
        tipoCarro="Sim";
    }else{
        tipoCarro="Não";
    }

    let tipoCliente="";
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

    document.getElementById("inputA").value="";
    document.getElementById("inputA2").value="";
    document.getElementById("inputB").checked=false;
    document.getElementById("inputC").checked=false;
}