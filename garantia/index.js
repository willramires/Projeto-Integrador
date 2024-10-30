const express = require('express')
const { pool } = require('./db/connection')
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

app.post("/clientes", async (req,res) => {
    const { nome, email, telefone, endereço } = req.body;
    const result = await pool.query (
      "INSERT INTO clientes (nome, email, telefone, endereço) VALUES ($1, $2, $3, $4) RETURNING *" ,
      [nome, email, telefone, endereço]
    );
    res.status(201).json(result.rows[0]);
});

app.delete("/equipamentos/:id", async (req,res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM equipamentos WHERE id = $1", [id]);
    res.status(204).send();
});

app.put("/clientes/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone, endereço } = req.body;
    const result = await pool.query(
         "UPDATE clientes SET nome = $1, email = $2, telefone = $3, endereço = $4 RETURNING *",
        [nome, email, telefone, endereço]
    );
    res.json( result.rows [0]);

});

app.put("/equipamentos/:id", async (req, res) => {
    const { id } = req.params;
    const { nome, descrição, data_aquisição, modelo, serial_number, cliente_id } = req.body;
    const result = await pool.query(
         "UPDATE equipamentos SET nome = $1, descrição = $2, data_aquisição = $3, modelo = $4, serial_number = $5, cliente_id = $6 RETURNING *",
        [nome, descrição, data_aquisição, modelo, serial_number, cliente_id]
    );
    res.json( result.rows [0]);

});



app.listen(port, () => {
    pool.connect().then((client) => {
        console.log('Connected to the database');
        client.release();
    })
})
