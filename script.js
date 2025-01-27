// Classe que representa um insumo
/**
 * @class Insumo
 * @constructor
 * @param {number} id - Id do insumo
 * @param {string} nome - Nome do insumo
 * @param {number} estoque - Quantidade do insumo em estoque
 * @param {string} imagem - URL da imagem do insumo
 */
class Insumo {
    constructor(id, nome, estoque, imagem) {
        this.id = id;
        this.nome = nome;
        this.estoque = estoque;
        this.imagem = imagem;
    }
}

// Classe que representa um pedido
/**
 * @class Pedido
 * @constructor
 * @param {number} id - Id do pedido
 * @param {array} array - Array de insumos do pedido
 * @param {date} data - Data do pedido
 */
class Pedido {
    constructor(id, array, data) {
        this.id = id;
        this.array = array;
        this.data = data;
    }
}

// Lista de insumos disponíveis
let insumos = [
    { id: 1, nome: "luva", imagem: 'https://picsum.photos/200/300', estoque: 100 },
    { id: 2, nome: "seringa", imagem: 'https://picsum.photos/400/300', estoque: 150 },
    { id: 3, nome: "bandagens", imagem: 'https://picsum.photos/300/300', estoque: 200 },
    { id: 4, nome: "máscara", imagem: 'https://picsum.photos/200/300', estoque: 500 },
    { id: 5, nome: "agulha", imagem: 'https://picsum.photos/200/300', estoque: 300 },
    { id: 6, nome: "esparadrapo", imagem: 'https://picsum.photos/200/300', estoque: 250 },
    { id: 7, nome: "compressa", imagem: 'https://picsum.photos/200/300', estoque: 300 },
    { id: 8, nome: "álcool", imagem: 'https://picsum.photos/200/300', estoque: 400 },
    { id: 9, nome: "termômetro", imagem: 'https://picsum.photos/200/300', estoque: 100 },
    { id: 10, nome: "tesoura", imagem: 'https://picsum.photos/200/300', estoque: 50 },
    { id: 11, nome: "estetoscópio", imagem: 'https://picsum.photos/200/300', estoque: 30 },
    { id: 12, nome: "luva cirúrgica", imagem: 'https://picsum.photos/200/300', estoque: 400 },
    { id: 13, nome: "soro fisiológico", imagem: 'https://picsum.photos/200/300', estoque: 350 },
    { id: 14, nome: "gaze", imagem: 'https://picsum.photos/200/300', estoque: 300 },
    { id: 15, nome: "esfigmomanômetro", imagem: 'https://picsum.photos/200/300', estoque: 20 },
    { id: 16, nome: "bisturi", imagem: 'https://picsum.photos/200/300', estoque: 60 },
    { id: 17, nome: "seringa descartável", imagem: 'https://picsum.photos/200/300', estoque: 500 },
    { id: 18, nome: "gorro", imagem: 'https://picsum.photos/200/300', estoque: 300 },
    { id: 19, nome: "avental", imagem: 'https://picsum.photos/200/300', estoque: 200 },
    { id: 20, nome: "curativo", imagem: 'https://picsum.photos/200/300', estoque: 400 }

// Lista de pedidos realizados
let pedidos = [];

/**
 * Preenche a lista de insumos no HTML
 */
function preencherListaDeInsumos() {
    document.getElementById('lista').innerHTML = getListaDeInsumos().map((item) => 
        `<div class="item">
            <li class="nomeItem">${item.nome}</li>
            <img src="${item.imagem}">
            <p>estoque:${item.estoque}</p>
        </div>`
    ).join('');
}
preencherListaDeInsumos();

// Elemento de entrada para pesquisa
const inputPesquisa = document.getElementById('pesquisa');

/**
 * Evento para filtrar itens com base na pesquisa
 */
inputPesquisa.addEventListener('input', () => {
    let valor = formatarString(inputPesquisa.value);
    const items = document.querySelectorAll('.item');

    items.forEach((element) => {
        if (formatarString(element.textContent).indexOf(valor) === -1) {
            element.style.display = 'none';
        } else {
            element.style.display = 'block';
        }
    });
});

// Botão para confirmar o pedido
let botaoConfirmar = document.getElementById('confirmar');
let arrayItensSelecionados = [];

/**
 * Evento para selecionar item da lista
 */
document.getElementById('lista').addEventListener('click', (event) => {
    if (event.target && event.target.matches('li.nomeItem')) {
        let item = event.target;
        if (!arrayItensSelecionados.includes(item.textContent)) {
            arrayItensSelecionados.push(item.textContent);
            let lista = document.getElementById('lista');
            lista.innerHTML += `<div class="itemSelecionado" style="display: flex; align-items: center;">
                                    <li>${item.textContent}</li>
                                    <button class="deleteBtn" style="margin-left: auto;">Delete</button>
                                </div>`;
        }
    }
});

/**
 * Evento para remover item selecionado
 */
document.getElementById('lista').addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.deleteBtn')) {
        let itemDiv = event.target.parentElement;
        let itemName = itemDiv.querySelector('li').textContent;
        arrayItensSelecionados = arrayItensSelecionados.filter(item => item !== itemName);
        itemDiv.remove();
    }
});

// Evento para confirmar o pedido
botaoConfirmar.addEventListener('click', () => {
    let pedido = new Pedido(pedidos.length + 1, arrayItensSelecionados, new Date().getFullYear());
    pedidos.push(pedido);

    arrayItensSelecionados.forEach(itemNome => {
        let insumo = insumos.find(insumo => insumo.nome === itemNome);
        if (insumo && insumo.estoque > 0) {
            insumo.estoque -= 1;
        }
    });

    arrayItensSelecionados = [];
    preencherListaDeInsumos();
    alert('Pedido Realizado!');
    console.log(pedidos);
    let historicoDePedidos = document.getElementById('historico');
    historicoDePedidos.innerHTML += `<p>Pedido ${pedido.id} - ${pedido.data} - ${pedido.array.join(', ')}</p>`;
});

/**
 * Formata a string para comparação
 * @param {string} valor - Valor a ser formatado
 * @returns {string} Valor formatado
 */
function formatarString(valor) {
    return valor.toLowerCase().trim();
}

/**
 * Retorna a lista de insumos
 * @returns {array} Lista de insumos
 */
function getListaDeInsumos() {
    return insumos;
}

/**
 * Cria um novo insumo
 * @param {string} nome - Nome do insumo
 * @param {number} estoque - Quantidade do insumo em estoque
 */
function criarInsumo(nome, estoque) {
    insumos.push(new Insumo(insumos.length + 1, nome, estoque));
}

/**
 * Deleta um insumo pelo id
 * @param {number} id - Id do insumo a ser deletado
 */
function deletarInsumo(id) {
    insumos.splice(id - 1, 1);
}



