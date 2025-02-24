/**
 * Classe que representa um insumo
 *
 * @class Insumo
 * @constructor
 * @param {number} id - Id do insumo
 * @param {string} nome - Nome do insumo
 * @param {number} estoque - Quantidade do insumo em estoque
 * @param {string} imagem - URL da imagem do insumo
 * @param {string} descricao - Descrição do insumo
 */
class Insumo {
    /**
     * @constructor
     * @param {number} id - Id do insumo
     * @param {string} nome - Nome do insumo
     * @param {number} estoque - Quantidade do insumo em estoque
     * @param {string} imagem - URL da imagem do insumo
     * @param {string} descricao - Descrição do insumo
     */
    constructor(id, nome, estoque, imagem, descricao) {
        /**
         * Id do insumo
         *
         * @type {number}
         */
        this.id = id;

        /**
         * Nome do insumo
         *
         * @type {string}
         */
        this.nome = nome;

        /**
         * Quantidade do insumo em estoque
         *
         * @type {number}
         */
        this.estoque = estoque;

        /**
         * URL da imagem do insumo
         *
         * @type {string}
         */
        this.imagem = imagem;

        /**
         * Descrição do insumo
         *
         * @type {string}
         */
        this.descricao = descricao;
    }
}

/**
 * Classe que representa um pedido
 *
 * @class Pedido
 * @constructor
 * @param {number} id - Id do pedido
 * @param {array} array - Array de insumos do pedido
 * @param {date} data - Data do pedido
 */
class Pedido {
    /**
     * @constructor
     * @param {number} id - Id do pedido
     * @param {array} array - Array de insumos do pedido
     * @param {date} data - Data do pedido
     */
    constructor(id, array, data) {
        /**
         * Id do pedido
         *
         * @type {number}
         */
        this.id = id;

        /**
         * Array de insumos do pedido
         *
         * @type {array}
         */
        this.array = array;

        /**
         * Data do pedido
         *
         * @type {date}
         */
        this.data = data;
    }
}

// Lista de insumos disponíveis
let insumos = [
    { id: 1, nome: "luva", imagem: 'https://picsum.photos/200/300', estoque: 100, descricao: "Luva de látex para proteção das mãos durante procedimentos." },
    { id: 2, nome: "seringa", imagem: 'https://picsum.photos/200/300', estoque: 150, descricao: "Seringa descartável para aplicação de medicamentos." },
    { id: 3, nome: "bandagens", imagem: 'https://picsum.photos/200/300', estoque: 200, descricao: "Bandagens adesivas para curativos rápidos." },
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

/**
 * Lista de pedidos realizados
 * @type {array}
 */
let pedidos = [];

/**
 * Preenche a lista de insumos no HTML com botões para adicionar ao pedido
 */
function preencherListaDeInsumos() {
    // Preenche a lista de insumos
    document.getElementById('lista').innerHTML = getListaDeInsumos().map((item) => {
        // Exibe a lista de insumos
        document.getElementById('lista').style.display = 'grid';
        document.getElementById('lista').style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
        return `<div class="item">
            <li class="nomeItem">${item.nome}</li>
            <img src="${item.imagem}">
            <p>estoque: ${item.estoque}</p>
            <p>${item.descricao}</p>
            <input type="number" class="quantidade" min="1" max="${item.estoque}" placeholder="Insira quantidade">
            <button class="addBtn">Adicionar ao Pedido</button>
        </div>`;
    }).join('');
}
// Chama a função para preencher a lista de insumos
preencherListaDeInsumos();

// Elemento de entrada para pesquisa
const inputPesquisa = document.getElementById('pesquisa');

// Botão para pesquisar
let botaopesquisar = document.getElementById('botaopesquisar');
botaopesquisar.addEventListener('click', () => {
    // Exibe a lista de insumos
    document.getElementById('lista').style.display = 'block';
});

/**
 * Evento para filtrar itens com base na pesquisa
 */
inputPesquisa.addEventListener('input', () => {
    // Valor da pesquisa
    let valor = formatarString(inputPesquisa.value);
    // Elementos da lista de insumos
    const items = document.querySelectorAll('.item');

    // Percorre a lista de insumos e esconde os que não contém o valor da pesquisa
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
        // Item selecionado
        let item = event.target.parentElement.querySelector('li.nomeItem').textContent;
        // Quantidade do item
        let quantidade = parseInt(event.target.parentElement.querySelector('input.quantidade').value, 10);
        if (isNaN(quantidade)) {
            quantidade = 1;
        }
        // Verifica se o item já existe na lista de itens selecionados
        let itemExistente = arrayItensSelecionados.find(i => i.nome === item);
        if (itemExistente) {
            // Incrementa a quantidade do item existente
            itemExistente.quantidade += quantidade;
        } else {
            // Adiciona o item à lista de itens selecionados
            arrayItensSelecionados.push({ nome: item, quantidade });
        }
        // Atualiza a lista de itens selecionados
        atualizarListaSelecionados();
    }
});

/**
 * Atualiza a lista de itens selecionados
 */
function atualizarListaSelecionados() {
    // Elemento da lista de itens selecionados
    let listaSelecionados = document.getElementById('listaSelecionados');
    // Gera a lista de itens selecionados
    listaSelecionados.innerHTML = arrayItensSelecionados.map(item => 
        `<div class="itemSelecionado" style="display: flex; align-items: center;">
            <li>${item.nome} (Quantidade: ${item.quantidade})</li>
            <button class="deleteBtn" style="margin-left: auto;">Delete</button>
        </div>`
    ).join('');
    // Exibe a lista de itens selecionados
    listaSelecionados.style.display = 'block';
}

/**
 * Evento para remover item selecionado
 */
document.getElementById('listaSelecionados').addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.deleteBtn')) {
        // Item a ser removido
        let itemDiv = event.target.parentElement;
        let itemName = itemDiv.querySelector('li').textContent.split(' (')[0];
        // Remove o item da lista de itens selecionados
        arrayItensSelecionados = arrayItensSelecionados.filter(item => item.nome !== itemName);
        // Remove o item da lista de itens selecionados
        itemDiv.remove();
    }
});

// Evento para confirmar o pedido
botaoConfirmar.addEventListener('click', () => {
    // Cria um novo pedido
    let pedido = new Pedido(pedidos.length + 1, arrayItensSelecionados, new Date());
    // Adiciona o pedido à lista de pedidos
    pedidos.push(pedido);

    // Atualiza o estoque dos insumos
    arrayItensSelecionados.forEach(item => {
        let insumo = insumos.find(insumo => insumo.nome === item.nome);
        if (insumo && insumo.estoque >= item.quantidade) {
            insumo.estoque -= item.quantidade;
        }
    });

    // Limpa a lista de itens selecionados
    arrayItensSelecionados = [];
    // Limpa a lista de itens selecionados
    let listaSelecionados = document.getElementById('listaSelecionados');
    listaSelecionados.innerHTML = '';
    listaSelecionados.style.display = 'none';
    // Atualiza a lista de insumos
    preencherListaDeInsumos();
    // Mostra uma mensagem de confirmação
    alert('Pedido Realizado!');
    // Mostra o histórico de pedidos
    let historicoDePedidos = document.getElementById('historico');
    historicoDePedidos.innerHTML += `<p>Pedido ${pedido.id} - ${pedido.data.toLocaleString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })} - Setor: ${setor.value} - Tipo: ${tipo.value} - ${pedido.array.map(i => i.nome + ' (' + i.quantidade + ')').join(', ')}</p>`;
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

