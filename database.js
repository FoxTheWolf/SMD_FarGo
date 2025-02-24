import mysql from 'mysql2'

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '553680',
    database: 'smd_fargo'
})