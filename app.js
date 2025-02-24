import express from 'express'
import session from 'express-session'

import {getInsumos,getInsumo,getPedidos,getPedido,createPedido,login,updateStatusPedido,updateFeedbackEnfermagem,getPedidoDetalhado} from './database.js'	
const app = express()

app.use(express.json())
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("login.ejs");
});

app.get('/novopedido', async (req, res) => {
    const insumos = await getInsumos();
    res.render("novopedido.ejs", { insumos, username: req.session.user.nome });
});

app.post('/login', async (req, res) => {
    const { nome, senha } = req.body;
    const user = await login(nome, senha);
    if (user.length > 0) {
        req.session.user = user[0];
        const redirectUrl = user[0].privilegio === 1 ? '/farmacia' : '/menu';
        res.status(200).json({ redirectUrl });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/menu', async (req, res) => {
    const pedidos = await getPedidos();
    const pedidosDetalhados = await Promise.all(pedidos.map(async (pedido) => {
        const pedidoDetalhado = await getPedidoDetalhado(pedido.id);
        return {
            ...pedido,
            insumos: pedidoDetalhado.insumos,
        };
    }));
    res.render("menu.ejs", { pedidos: pedidosDetalhados, username: req.session.user.nome });
});
app.post('/darfeedback', async (req, res) => {
    const { id } = req.body;
    await updateFeedbackEnfermagem(id, "Sim");
    res.redirect('/menu');
});
app.get('/farmacia', async (req, res) => {
    const pedidos = await getPedidos();
    res.render("farmacia.ejs", { pedidos, username: req.session.user.nome });
});

app.post('/atualizarpedido', async (req, res) => {
    const { id, status } = req.body;
    await updateStatusPedido(id, status);
    res.redirect('/farmacia');
});

app.get('/insumos', async (req, res) => {
    const insumos = await getInsumos()
    res.send(insumos)
})

app.get('/insumos/:nome', async (req, res) => {
    const nome = req.params.nome
    const insumo = await getInsumo(nome)
    res.send(insumo)
})

app.get('/pedidos', async (req, res) => {
    const pedidos = await getPedidos()
    res.send(pedidos)
})

app.get('/pedidos/:id', async (req, res) => {
    const id = req.params.id
    const pedido = await getPedido(id)
    res.send(pedido)
})

app.post('/confirmarpedido', async (req, res) => {
    const { setor, tipo_pedido, itens } = req.body;
    const pedido = await createPedido(setor, tipo_pedido, "aberto", "Pedido Realizado", "Nenhuma", JSON.parse(itens));
    const pedidos = await getPedidos();
    res.render("menu.ejs", { pedidos, username: req.session.user.nome });
})

app.use((err, req, res, next) =>{
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080')
})
