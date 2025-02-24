import { getInsumos, getInsumo, getPedidos, getPedido, createPedido } from './database.js';

/**
 * Preenche a lista de insumos no HTML com botões para adicionar ao pedido
 */
async function preencherListaDeInsumos() {
    // Preenche a lista de insumos com dados do banco de dados
    const rows = await getInsumos();
    const listaElement = document.getElementById('lista');
    listaElement.style.display = 'grid';
    listaElement.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))';
    listaElement.innerHTML = rows.map((item) => {
        return `<div class="item">
            <li class="nomeItem">${item.nome}</li>
            <img src="${item.foto}">
            <p>${item.descricao}</p>
            <input type="number" class="quantidade" min="1" placeholder="Insira quantidade">
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

