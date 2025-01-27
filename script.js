<<<<<<< HEAD
// Classe que representa um insumo
/**
 * @class Insumo
 * @constructor
 * @param {number} id - Id do insumo
 * @param {string} nome - Nome do insumo
 * @param {number} estoque - Quantidade do insumo em estoque
 * @param {string} imagem - URL da imagem do insumo
 */
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
class Insumo {
    constructor(id, nome, estoque, imagem) {
        this.id = id;
        this.nome = nome;
        this.estoque = estoque;
        this.imagem = imagem;
    }
}

<<<<<<< HEAD
// Classe que representa um pedido
/**
 * @class Pedido
 * @constructor
 * @param {number} id - Id do pedido
 * @param {array} array - Array de insumos do pedido
 * @param {date} data - Data do pedido
 */
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
class Pedido {
    constructor(id, array, data) {
        this.id = id;
        this.array = array;
        this.data = data;
    }
}

<<<<<<< HEAD
// Lista de insumos disponíveis
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
let insumos = [
    { id: 1, nome: "luva", imagem: 'https://picsum.photos/200/300', estoque: 8 },
    { id: 2, nome: "seringa", imagem: 'https://picsum.photos/400/300', estoque: 9 },
    { id: 3, nome: "bandagens", imagem: 'https://picsum.photos/300/300', estoque: 10 }
];

<<<<<<< HEAD
// Lista de pedidos realizados
let pedidos = [];

/**
 * Preenche a lista de insumos no HTML
 */
=======
let pedidos = [];

>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
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

<<<<<<< HEAD
// Elemento de entrada para pesquisa
const inputPesquisa = document.getElementById('pesquisa');

/**
 * Evento para filtrar itens com base na pesquisa
 */
=======
const inputPesquisa = document.getElementById('pesquisa');

>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
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

<<<<<<< HEAD
// Botão para confirmar o pedido
let botaoConfirmar = document.getElementById('confirmar');
let arrayItensSelecionados = [];

/**
 * Evento para selecionar item da lista
 */
=======
let botaoConfirmar = document.getElementById('confirmar');
let arrayItensSelecionados = [];

>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
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

<<<<<<< HEAD
/**
 * Evento para remover item selecionado
 */
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
document.getElementById('lista').addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.deleteBtn')) {
        let itemDiv = event.target.parentElement;
        let itemName = itemDiv.querySelector('li').textContent;
        arrayItensSelecionados = arrayItensSelecionados.filter(item => item !== itemName);
        itemDiv.remove();
    }
});

<<<<<<< HEAD
// Evento para confirmar o pedido
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
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

<<<<<<< HEAD
/**
 * Formata a string para comparação
 * @param {string} valor - Valor a ser formatado
 * @returns {string} Valor formatado
 */
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
function formatarString(valor) {
    return valor.toLowerCase().trim();
}

<<<<<<< HEAD
/**
 * Retorna a lista de insumos
 * @returns {array} Lista de insumos
 */
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
function getListaDeInsumos() {
    return insumos;
}

<<<<<<< HEAD
/**
 * Cria um novo insumo
 * @param {string} nome - Nome do insumo
 * @param {number} estoque - Quantidade do insumo em estoque
 */
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
function criarInsumo(nome, estoque) {
    insumos.push(new Insumo(insumos.length + 1, nome, estoque));
}

<<<<<<< HEAD
/**
 * Deleta um insumo pelo id
 * @param {number} id - Id do insumo a ser deletado
 */
=======
>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
function deletarInsumo(id) {
    insumos.splice(id - 1, 1);
}



<<<<<<< HEAD
=======


>>>>>>> 92c3c1f26ad3e8ac1a29112cc0d89d7ce1ccd271
