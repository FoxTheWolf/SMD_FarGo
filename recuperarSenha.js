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

console.log(users);

document.getElementById('recuperar-form').addEventListener('submit',(event)=>{
    event.preventDefault();
    let usuario = document.getElementById('usuario').value.trim();
    let novaSenha = document.getElementById('novaSenha').value.trim();
    let confirmacaoSenha = document.getElementById('confirmacaoSenha').value.trim();

    users.forEach(user => {
        if(usuario === user.nome){
            if(novaSenha === confirmacaoSenha){
                user.senha = novaSenha;
                console.log(users);
            }
            else {
                console.log('As senhas não se correspodem');
            }
        }
    })
})