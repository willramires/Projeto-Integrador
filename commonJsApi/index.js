const express = require('express')
const app = express()
const { clientes } = require("./Models/clientes")

app.get('/', (req, res) => {
    res.send(clientes)
})

app.get("/clientes/:id", (req, res) => {
    const { id } = req.params
    const cliente = clientes.find((value) => value.id === Number(id))
    if (!cliente) return res.send("client not found")
    res.send(cliente)
})

app.post("/clientes", (req, res) => {
    const name = req.body
    const id = clientes[clientes.lenght - 1].id + 1
    clientes.push({ id, name })
    res.send('client added successfully')
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})      