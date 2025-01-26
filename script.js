class Insumo{
    constructor(id, nome, estoque){
        this.id = id;
        this.nome = nome;
        this.estoque = estoque;
    }
}


//insumos
let insumos = [
    {
        id: 1,
        nome : "luva",
        estoque : 10
    },
    {
        id: 2,
        nome: "seringa",
        estoque : 10
    },
    {
        id: 3,
        nome: "bandagens",
        estoque : 10
    },
]


//passar um array para uma lista html
function preencherLista(){
    document.getElementById('lista').innerHTML = getAll().map((item)=> `<li class="item">${item.nome}</li>`).join('');
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
            element.style.display = 'flex';
        }
    })
})  

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

