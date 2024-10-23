const express = require('express')
const { pool } = require('./db/connection')
const { orders } = require('./models/orders')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get("/clientes", (req, res) => {
    pool.query("SELECT * FROM Clientes;", (error, result) => {
        if (error) {
            res.status(400).send("Error");
            return;
        }
        res.json(result.rows);
    });
})

app.get("/equipamentos", (req, res) => {
    pool.query("SELECT e.*, c.nome AS cliente_nome FROM Equipamentos e JOIN Clientes c ON e.cliente_id = c.id;", (error, result) => {
        if (error) {
            res.status(400).send("Error");
            return;
        }
        res.json(result.rows);
    });
})


           
app.listen(port, () => {
    pool.connect().then((client) => {
        console.log('Connected to the database');
        client.release();
    })
})
