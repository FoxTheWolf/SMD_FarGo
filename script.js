class Insumo {
    constructor(id, nome, estoque, imagem) {
        this.id = id;
        this.nome = nome;
        this.estoque = estoque;
        this.imagem = imagem;
    }
}

class Pedido {
    constructor(id, array, data) {
        this.id = id;
        this.array = array;
        this.data = data;
    }
}

let insumos = [
    { id: 1, nome: "luva", imagem: 'https://picsum.photos/200/300', estoque: 8 },
    { id: 2, nome: "seringa", imagem: 'https://picsum.photos/400/300', estoque: 9 },
    { id: 3, nome: "bandagens", imagem: 'https://picsum.photos/300/300', estoque: 10 }
];

let pedidos = [];

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

const inputPesquisa = document.getElementById('pesquisa');

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

let botaoConfirmar = document.getElementById('confirmar');
let arrayItensSelecionados = [];

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

document.getElementById('lista').addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.deleteBtn')) {
        let itemDiv = event.target.parentElement;
        let itemName = itemDiv.querySelector('li').textContent;
        arrayItensSelecionados = arrayItensSelecionados.filter(item => item !== itemName);
        itemDiv.remove();
    }
});

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

function formatarString(valor) {
    return valor.toLowerCase().trim();
}

function getListaDeInsumos() {
    return insumos;
}

function criarInsumo(nome, estoque) {
    insumos.push(new Insumo(insumos.length + 1, nome, estoque));
}

function deletarInsumo(id) {
    insumos.splice(id - 1, 1);
}





