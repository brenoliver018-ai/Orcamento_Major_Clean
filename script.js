function calcular() {
    let servico=document.getElementById("servico").value;
    let qtd=Number(document.getElementById("qtd").value);
    let manchas = document.getElementById("manchas").checked;

    if(qtd<=0|| isNaN(qtd)){
        alert("Digite uma quantidade válida!");
        return;
    }
    let precoBase=0;

    if(servico === "sofa"){
        precoBase= 170;
    }
    else if(servico === "colchao"){
        precoBase= 80;
    }
    else if(servico==="tapete"){
        precoBase=70;
    }
    else if(servico==="banco"){
        precoBase=200;
    }

    let total=precoBase*qtd;

    if(manchas){
        total+=30 * qtd;  
    }

    let totalFormatado = total.toLocaleString("pt-BR",{
        style: "currency", 
        currency: "BRL"
    });
    document.getElementById("resultado").innerText= "Valor total: "+ totalFormatado;

   
}