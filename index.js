const express = require('express');

const { clientes } = require("./Models/clientes")

const app = express();

app.use(express.json());

//READ
app.get('/', (req, res) => {
    res.send(clientes)
});

//READ BY ID
app.get('/clients/:id', (req, res) => {
    const { id } = req.params;
    const cliente = clientes.find((value) => value.id == id);
    if (!cliente) return res.send('Cliente not found');
    res.send(cliente);
});

app.post('/cliente', (req, res) => {
    console.log('Request body:', req.body); // Adicione esta linha
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
        return res.status(400).send('Missing required fields');
    }
    const id = clientes.length + 1;
    const newUser = { id, name, age, email };
    clientes.push(newUser);
    res.status(201).send('Cliente added successfully');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


