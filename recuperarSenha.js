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

document.getElementById('recuperar-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    let usuario = document.getElementById('usuario').value.trim();
    let novaSenha = document.getElementById('novaSenha').value.trim();
    let confirmacaoSenha = document.getElementById('confirmacaoSenha').value.trim();
    const mensagem = document.querySelector('#mensagem');

    users.forEach(user => {
        if(usuario === user.nome){
            if(novaSenha === confirmacaoSenha){
                user.senha = novaSenha;
                window.location = 'login.html';
            }
            else {
                mensagem.innerHTML = 'As senhas não se correspodem'
                mensagem.style.color = 'red';
            }
        }
    })
})