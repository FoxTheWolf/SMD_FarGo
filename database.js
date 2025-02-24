import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()


export async function getInsumos(){
    const [rows] = await pool.query("SELECT * FROM insumos")
    return rows
}

export async function getInsumo(nome) {
    const [rows] = await pool.query(`
        SELECT *
        FROM insumos
        WHERE nome LIKE CONCAT('%', ?, '%')
        `, [nome])    
    return rows   
}

export async function getPedidos(){
    const [rows] = await pool.query("SELECT * FROM pedidos")
    return rows
}

export async function getPedido(id) {
    const [rows] = await pool.query(`
        SELECT *
        FROM pedidos
        WHERE id = ?
        `, [id])    
    return rows   
}

export async function createPedido(setor, tipo_pedido, status, descricao, observacoes, itens) {
    const [result] = await pool.query(`
        INSERT INTO pedidos (setor, tipo_pedido, status, descricao, observacoes)
        VALUES (?, ?, ?, ?, ?)
        `, [setor, tipo_pedido, status, descricao, observacoes])
    const id = result.insertId
    itens.forEach(item => {
        pool.query(`
            INSERT INTO pedidos_insumos (id_pedido, id_insumo, quantidade)
            VALUES (?, ?, ?)
            `, [id, item.id, item.quantidade])
    })
}

export async function updateStatusPedido(id, status) {
    const [result] = await pool.query(`
        UPDATE pedidos
        SET status = ?
        WHERE id = ?
        `, [status, id])
    return result
}
export async function updateFeedbackEnfermagem(id, feedback) {
    const [result] = await pool.query(`
        UPDATE pedidos
        SET feedback_enfermagem = ?
        WHERE id = ?
        `, [feedback, id])
    return result
}

export async function getPedidoDetalhado(id) {
    const [pedidoRows] = await pool.query(`
        SELECT p.*, GROUP_CONCAT(CONCAT(i.nome, ' (', pi.quantidade, ')') SEPARATOR ', ') as descricao
        FROM pedidos p
        JOIN pedidos_insumos pi ON p.id = pi.id_pedido
        JOIN insumos i ON pi.id_insumo = i.id
        WHERE p.id = ?
        GROUP BY p.id
    `, [id]);
    return pedidoRows;
}


export async function login(nome, senha) {
    const [rows] = await pool.query(`
        SELECT *
        FROM login
        WHERE nome = ? AND senha = ?
        `, [nome, senha])
    return rows    
}