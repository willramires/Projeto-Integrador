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
    });
})

           
app.listen(port, () => {
    pool.connect().then(client => {
        console.log('connected to the database')
        client.release()
    }).catch(err => {
        console.error('Error connecting to the database', err)
    })
    console.log(`Server is running on ${port}`)
})
