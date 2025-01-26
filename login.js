//usuarios
let users = [
    {
        nome: 'Pedro',
        senha: 'senha'
    },
    {
        nome: 'João',
        senha: 'senha2'
    },
    {
        nome: 'Maria',
        senha: 'senha3'
    }
]

//validação de usuário
document.getElementById('login-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    const mensagem = document.querySelector('#mensagem');

    users.forEach(user =>{
        if(usuario === user.nome && senha === user.senha){
            window.location = 'index.html';
            
        }
    
        else{
            mensagem.innerText = 'Usuario ou senha estão incorretos';
            mensagem.style.color = 'red';
        }
    })
});