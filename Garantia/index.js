const express = require('express')
const app = express()
const {clients} = require ("./models/clients")

app.use(express.json())

app.get('/', (req, res) => {
  res.send(clients)
})

app.get("/clients/:id", (req, res) => {
    const {id} = req.params
    const client = clients.find((value) => value.id === Number(id))
    if (!client) return res.send("Client not found")
    res.send(client)
})

app.post("/clients", (req, res) => {
    const { name } = req.body
    const id = clients.lenght + 1
    clients.push({ id, name })
    res.send("client added")
})

app.put("/clients/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const client = clients.find((value) => value.id === Number(id))
    if (!client) return res.send("client not found")
    client.name = name
    res.send("Client updated")
})

app.delete("/clients/:id", (req, res) => {
    const { id } = req.params;
    const index = clients.findIndex((value) => value.id === Number(id))
    if (index === -1) return res.send("client not found")
    clients.splice(index, 1)
    res.send("client deleted")
})

app.listen(3000, () => {
  console.log("server is running on port 3000")
})
