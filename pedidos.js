// Classe que representa um insumo
/**
 * @class Insumo
 * @constructor
 * @param {number} id - Id do insumo
 * @param {string} nome - Nome do insumo
 * @param {number} estoque - Quantidade do insumo em estoque
 * @param {string} imagem - URL da imagem do insumo
 * @param {string} descricao - Descrição do insumo
 */
class Insumo {
    constructor(id, nome, estoque, imagem, descricao) {
        this.id = id;
        this.nome = nome;
        this.estoque = estoque;
        this.imagem = imagem;
        this.descricao = descricao;
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
    { id: 1, nome: "luva", imagem: 'https://picsum.photos/200/300', estoque: 100, descricao: "Luva de látex para proteção das mãos durante procedimentos." },
    { id: 2, nome: "seringa", imagem: 'https://picsum.photos/400/300', estoque: 150, descricao: "Seringa descartável para aplicação de medicamentos." },
    { id: 3, nome: "bandagens", imagem: 'https://picsum.photos/300/300', estoque: 200, descricao: "Bandagens adesivas para curativos rápidos." },
    { id: 4, nome: "máscara", imagem: 'https://picsum.photos/200/300', estoque: 500, descricao: "Máscara facial para proteção contra agentes contaminantes." },
    { id: 5, nome: "agulha", imagem: 'https://picsum.photos/200/300', estoque: 300, descricao: "Agulha hipodérmica para uso em conjunto com seringas." },
    { id: 6, nome: "esparadrapo", imagem: 'https://picsum.photos/200/300', estoque: 250, descricao: "Fita adesiva para fixação de curativos e bandagens." },
    { id: 7, nome: "compressa", imagem: 'https://picsum.photos/200/300', estoque: 300, descricao: "Compressa de gaze esterilizada para feridas." },
    { id: 8, nome: "álcool", imagem: 'https://picsum.photos/200/300', estoque: 400, descricao: "Álcool 70% para desinfecção de superfícies e pele." },
    { id: 9, nome: "termômetro", imagem: 'https://picsum.photos/200/300', estoque: 100, descricao: "Termômetro digital para medição de temperatura corporal." },
    { id: 10, nome: "tesoura", imagem: 'https://picsum.photos/200/300', estoque: 50, descricao: "Tesoura cirúrgica para cortes precisos em bandagens e materiais." },
    { id: 11, nome: "estetoscópio", imagem: 'https://picsum.photos/200/300', estoque: 30, descricao: "Estetoscópio para auscultação de sons corporais." },
    { id: 12, nome: "luva cirúrgica", imagem: 'https://picsum.photos/200/300', estoque: 400, descricao: "Luva cirúrgica estéril para procedimentos médicos." },
    { id: 13, nome: "soro fisiológico", imagem: 'https://picsum.photos/200/300', estoque: 350, descricao: "Soro fisiológico para limpeza de feridas e hidratação." },
    { id: 14, nome: "gaze", imagem: 'https://picsum.photos/200/300', estoque: 300, descricao: "Gaze esterilizada para cobrir e proteger feridas." },
    { id: 15, nome: "esfigmomanômetro", imagem: 'https://picsum.photos/200/300', estoque: 20, descricao: "Aparelho para medir a pressão arterial." },
    { id: 16, nome: "bisturi", imagem: 'https://picsum.photos/200/300', estoque: 60, descricao: "Instrumento cortante utilizado em procedimentos cirúrgicos." },
    { id: 17, nome: "seringa descartável", imagem: 'https://picsum.photos/200/300', estoque: 500, descricao: "Seringa estéril para administração única de medicamentos." },
    { id: 18, nome: "gorro", imagem: 'https://picsum.photos/200/300', estoque: 300, descricao: "Touca descartável para proteção do cabelo em áreas limpas." },
    { id: 19, nome: "avental", imagem: 'https://picsum.photos/200/300', estoque: 200, descricao: "Avental descartável para proteger roupas de contaminação." },
    { id: 20, nome: "curativo", imagem: 'https://picsum.photos/200/300', estoque: 400, descricao: "Curativo adesivo para pequenos cortes e arranhões." }
];

// Lista de pedidos realizados
let pedidos = [];

/**
 * Preenche a lista de insumos no HTML com botões para adicionar ao pedido
 */
function preencherListaDeInsumos() {
    document.getElementById('lista').innerHTML = getListaDeInsumos().map((item) => 
        `<div class="item">
            <li class="nomeItem">${item.nome}</li>
            <img src="${item.imagem}">
            <p>estoque: ${item.estoque}</p>
            <p>${item.descricao}</p>
            <input type="number" class="quantidade" min="1" max="${item.estoque}" placeholder="Quantidade">
            <button class="addBtn">Adicionar ao Pedido</button>
        </div>`
    ).join('');
}
preencherListaDeInsumos();

// Elemento de entrada para pesquisa
const inputPesquisa = document.getElementById('pesquisa');

// Botão para pesquisar
let botaopesquisar = document.getElementById('botaopesquisar');
botaopesquisar.addEventListener('click', () => {
    document.getElementById('lista').style.display = 'block';
});

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
 * Evento para adicionar item ao pedido
 */
document.getElementById('lista').addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.addBtn')) {
        let item = event.target.parentElement.querySelector('li.nomeItem').textContent;
        let quantidade = parseInt(event.target.parentElement.querySelector('input.quantidade').value, 10);
        if (isNaN(quantidade)) {
            quantidade = 1;
        }
        let itemExistente = arrayItensSelecionados.find(i => i.nome === item);
        if (itemExistente) {
            itemExistente.quantidade += quantidade;
        } else {
            arrayItensSelecionados.push({ nome: item, quantidade });
        }
        atualizarListaSelecionados();
    }
});

function atualizarListaSelecionados() {
    let lista = document.getElementById('lista');
    let listaSelecionados = document.getElementById('listaSelecionados');
    listaSelecionados.innerHTML = arrayItensSelecionados.map(item => 
        `<div class="itemSelecionado" style="display: flex; align-items: center;">
            <li>${item.nome} (Quantidade: ${item.quantidade})</li>
            <button class="deleteBtn" style="margin-left: auto;">Delete</button>
        </div>`
    ).join('');
    listaSelecionados.style.display = 'block';
}


/**
 * Evento para remover item selecionado
 */
document.getElementById('listaSelecionados').addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.deleteBtn')) {
        let itemDiv = event.target.parentElement;
        let itemName = itemDiv.querySelector('li').textContent.split(' (')[0];
        arrayItensSelecionados = arrayItensSelecionados.filter(item => item.nome !== itemName);
        itemDiv.remove();
    }
});

// Evento para confirmar o pedido
botaoConfirmar.addEventListener('click', () => {
    let pedido = new Pedido(pedidos.length + 1, arrayItensSelecionados, new Date().getFullYear());
    pedidos.push(pedido);

    arrayItensSelecionados.forEach(item => {
        let insumo = insumos.find(insumo => insumo.nome === item.nome);
        if (insumo && insumo.estoque >= item.quantidade) {
            insumo.estoque -= item.quantidade;
        }
    });

    arrayItensSelecionados = [];
    let listaSelecionados = document.getElementById('listaSelecionados');
    listaSelecionados.innerHTML = '';
    listaSelecionados.style.display = 'none';
    preencherListaDeInsumos();
    alert('Pedido Realizado!');
    console.log(pedidos);
    let historicoDePedidos = document.getElementById('historico');
    historicoDePedidos.innerHTML += `<p>Pedido ${pedido.id} - ${pedido.data.toLocaleString()} - Setor: ${setor.value} - Tipo: ${tipo.value} - ${pedido.array.map(i => i.nome + ' (' + i.quantidade + ')').join(', ')}</p>`;
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
    insumos.push(new Insumo(insumos.length + 1, nome, estoque, '', ''));
}

/**
 * Deleta um insumo pelo id
 * @param {number} id - Id do insumo a ser deletado
 */
function deletarInsumo(id) {
    insumos.splice(id - 1, 1);
}



