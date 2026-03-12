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
    document.getElementById("resultado").innerText= animarValor(total)+ totalFormatado;

    document.getElementById("enviarWhatsapp").classList.add("mostrar");
}

function enviarWhatsapp(){
    let servico = document.getElementById("servico").value
    let qtd =Number(document.getElementById("qtd").value)
    let resultado = document.getElementById("resultado").innerText
    if (qtd<=0||isNaN(qtd)){
        alert("Realize um orçamento válido para enviar.");
        return;
    }

let mensagem = 
`🧼 *ORÇAMENTO - MAJOR CLEAN*

Olá, gostaria de confirmar este orçamento:

📦 Serviço: ${servico}
🔢 Quantidade: ${qtd}

💰 ${resultado}`;

    let seuNumero= "5561998906393";
    let mensagemFormatadaURL= encodeURIComponent(mensagem);
    let linkFinal= `https://wa.me/${seuNumero}?text=${encodeURIComponent(mensagem)}`;
    

    window.open(linkFinal, '_blank');
}

