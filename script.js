class Insumo{
    constructor(id, nome, estoque){
        this.id = id;
        this.nome = nome;
        this.estoque = estoque;
    }
}

class Pedido{
    constructor(id, array, data){
        this.id = id;
        this.array = array;
        this.data = data;
    }
}

//insumos
let insumos = [
    {
        id: 1,
        nome : "luva",
        imagem: 'https://picsum.photos/200/300',
        estoque : 8
    },
    {
        id: 2,
        nome: "seringa",
        imagem: 'https://picsum.photos/400/300',
        estoque : 9
    },
    {
        id: 3,
        nome: "bandagens",
        imagem: 'https://picsum.photos/300/300',
        estoque : 10
    },
]

//pedidos feitos
let pedidos = [];


//passar um array para uma lista html
function preencherLista(){
    //document.getElementById('lista').innerHTML = getAll().map((item)=> `<div class="item"><li class="nomeItem">${item.nome}</li>\n<img src="imagens/${item.imagem}"><p>estoque:${item.estoque}</p></div>`).join('');
    document.getElementById('lista').innerHTML = getAll().map((item)=> `<div class="item"><li class="nomeItem">${item.nome}</li>\n<img src="${item.imagem}"><p>estoque:${item.estoque}</p></div>`).join('');
}
preencherLista();

//barra de pesquisa
const pesquisa = document.getElementById('pesquisa');

pesquisa.addEventListener('input',()=>{
    let value = formatString(pesquisa.value);
    const items = document.querySelectorAll('.item');

    //compara o input com items do array
    items.forEach((element)=>{
        if(formatString(element.textContent).indexOf(value) === -1){
            element.style.display = 'none';
        }
        else{
            element.style.display = 'block';
        }
    })
})  

//evento para salvar vários pedidos
let listItems = document.querySelectorAll('.nomeItem');
let confirmar = document.getElementById('confirmar');
let arrayItems = [];

//coloca o item clicado em um array
listItems.forEach(item => {
    item.addEventListener('click',()=>{
        arrayItems.push(item.textContent);
        console.log(arrayItems);
    })
});

//confirma o pedido
confirmar.addEventListener('click',()=>{
    pedidos.push(new Pedido(pedidos.length+1,arrayItems,2025));
    arrayItems = [];
    console.log(pedidos);
});

//formatar strings
function formatString(valor){
    return valor.toLowerCase().trim();
}

//função para pegar os dados dos insumos
function getAll(){
    return insumos;
}

//função para registrar um novo insumo
function create(nome, estoque){
    insumos.push(new Insumo(insumos.length+1, nome, estoque));
}

//função para deletar um insumo
function deletar(id){
    insumos.splice(id - 1, 1);
}
