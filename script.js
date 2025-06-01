// Formato: [quantidade, preço unitário]
let pizza = [0, 40.5];
let lasanha = [0, 17.0];
let salada = [0, 10.0];
let suco = [0, 5.5];
let cafe = [0, 4.0];
let sobremesa = [0, 8.0];

let gorjeta = 0;

// Atualiza o valor dos itens
const atualizar_precos = () => {

    document.getElementById("preco_pizza").innerText = "R$: " + pizza[1].toFixed(2);
    document.getElementById("preco_lasanha").innerText = "R$: " + lasanha[1].toFixed(2);
    document.getElementById("preco_salada").innerText = "R$: " + salada[1].toFixed(2);
    document.getElementById("preco_suco").innerText = "R$: " + suco[1].toFixed(2);
    document.getElementById("preco_cafe").innerText = "R$: " + cafe[1].toFixed(2);
    document.getElementById("preco_sobremesa").innerText = "R$: " + sobremesa[1].toFixed(2);
}

// Atualiza toda vez que a página é aberta
window.onload = function () {
    atualizar_precos();

};

// Atualiza o valor total
function atualizar_total() {
    let total = pizza[0] * pizza[1] + lasanha[0] * lasanha[1] + salada[0] * salada[1] + suco[0] * suco[1] + cafe[0] * cafe[1] + sobremesa[0] * sobremesa[1];

    document.getElementById("total").innerText = "Haver: R$ " + total.toFixed(2);
    calcularGorjeta();

}

document.getElementById("gorjetaInput").addEventListener("input", calcularGorjeta);

// Impede de passar do limite de 0 a 100
document.getElementById("gorjetaInput").addEventListener("input", () => {
    let valor = parseInt(gorjetaInput.value);
    if (valor < 0) gorjetaInput.value = 0;
    if (valor > 100) gorjetaInput.value = 100;
    calcularGorjeta();
});


function calcularGorjeta() {
    
    const totalTexto = document.getElementById("total").innerText;

    // Extrai o número após "R$"
    const match = totalTexto.match(/R\$ ?([\d.,]+)/);

    if (!match) return; // Se não houver número, sai da função

    let valorStr = match[1];

    // Se tiver ponto como separador de milhar e vírgula como decimal
    if (valorStr.includes(',') && valorStr.includes('.')) {
        valorStr = valorStr.replace('.', '').replace(',', '.');
    } else if (valorStr.includes(',')) {
        valorStr = valorStr.replace(',', '.');
    }

    const total = parseFloat(valorStr) || 0;

    const porcentagem = parseFloat(document.getElementById("gorjetaInput").value) || 0;
    const valorGorjeta = (total * porcentagem) / 100;
    const totalFinal = total + valorGorjeta;

    document.getElementById("valor_gorjeta").innerText = `Gorjeta: R$ ${valorGorjeta.toFixed(2).replace('.', ',')}`;
    document.getElementById("total_com_gorjeta").innerText = `Total com Gorjeta: R$ ${totalFinal.toFixed(2).replace('.', ',')}`;
}

const click_pizza = () => {
    // Adiciona 1 ao valor do pedido
    pizza[0]++;
    // Atualiza o exibir do pedido
    document.getElementById("pizza").innerText = "Pizza Margherita: " + pizza[0];

    atualizar_total()
}

const click_lasanha = () => {
    lasanha[0]++;
    document.getElementById("lasanha").innerText = "Lasanha: " + lasanha[0];

    atualizar_total()
}

const click_salada = () => {
    salada[0]++;
    document.getElementById("salada").innerText = "Salada Caesar: " + salada[0];

    atualizar_total()
}

const click_suco = () => {
    suco[0]++;
    document.getElementById("suco").innerText = "Suco Natural: " + suco[0];

    atualizar_total()
}

const click_cafe = () => {
    cafe[0]++;
    document.getElementById("cafe").innerText = "Café: " + cafe[0];

    atualizar_total()
}

const click_sobremesa = () => {
    sobremesa[0]++;
    document.getElementById("sobremesa").innerText = "Sobremesa: " + sobremesa[0];

    atualizar_total()
}
// Limpa a lista
const click_limpa = () => {
    // Zera os pedidos
    pizza[0] = 0;
    lasanha[0] = 0;
    salada[0] = 0;
    suco[0] = 0;
    cafe[0] = 0;
    sobremesa[0] = 0;

    document.getElementById("pizza").innerText = "Pizza Margherita: 0";
    document.getElementById("lasanha").innerText = "Lasanha: 0";
    document.getElementById("salada").innerText = "Salada Caesar: 0";
    document.getElementById("suco").innerText = "Suco Natural: 0";
    document.getElementById("cafe").innerText = "Café Expresso: 0";
    document.getElementById("sobremesa").innerText = "Sobremesa: 0";

    atualizar_total()
}
// Limpa 1 por 1 em específico
const diminuir_pizza = () => {
    if(pizza[0] > 0) {
        pizza[0]--
    document.getElementById("pizza").innerText = "Pizza Margherita: " + pizza[0];

    atualizar_total()
    }
}

const diminuir_lasanha = () => {
    if(lasanha[0] > 0) {
        lasanha[0]--
    document.getElementById("lasanha").innerText = "Lasanha: " + lasanha[0];

    atualizar_total()
    }
}

const diminuir_salada = () => {
    if(salada[0] > 0) {
        salada[0]--
        document.getElementById("salada").innerText = "Salada Caesar: " + salada[0];
        atualizar_total()
    }
}

const diminuir_suco = () => {
    if(suco[0] > 0) {
        suco[0]--
        document.getElementById("suco").innerText = "Suco Natural: " + suco[0];
        atualizar_total()
    }
}

const diminuir_cafe = () => {
    if(cafe[0] > 0) {
        cafe[0]--
        document.getElementById("cafe").innerText = "Café Expresso: " + cafe[0];
        atualizar_total()
    }
}

const diminuir_sobremesa = () => {
    if(sobremesa[0] > 0) {
        sobremesa[0]--
        document.getElementById("sobremesa").innerText = "Sobremesa: " + sobremesa[0];
        atualizar_total()
    }
}
// Yan não mexa em nada do que está para cima, mas pode olhar as variaveis  :)

const finalizar_menu = document.getElementById("menu_finalizar");
const pedido_text = document.getElementById("pedido_texto");

const Finalizar = () => {
    if(pizza[0] > 0 || lasanha[0] > 0 || salada[0] > 0 || salada[0] > 0 || suco[0] > 0 || cafe[0] > 0 || sobremesa[0] > 0 ){
        
        finalizar_menu.classList.add('pedido_finalizado_flex');
        finalizar_menu.classList.remove('pedido_finalizado_none');
        pedido_text.classList.add('pedido_sim');
        pedido_text.classList.remove('pedido_nao');

    } else{
        pedido_text.classList.add('pedido_nao');
        pedido_text.classList.remove('pedido_sim');
    }
}
