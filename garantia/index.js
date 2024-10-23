const express = require('express')
const { pool } = require('./db/connection')
const { orders } = require('./models/orders')
const app = express()
const port = 3000

app.use(express.json())

app.get("/orders", async (req, res) =>{
    const orders = await OrderModel.find({}).exec()
    if (orders.lenght === 0){
        return res.status(404).send("No orders Found")
    }
    return res.send(orders)
})

app.get("/orders/:id", async (req, res) =>{
    const order = await OrderModel.findById(req.params.id).exec()
    if (!order) {
        return res.status(404).send("Order not found")
    }
    return res.send(order)
})

app.put("/orders/:id", async (req, res) => {
    const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true}).exec()
    if (!order) {
        return res.status(404).send("Order not found")
    }
    return res.send(order)
})

app.delete("/orders/:id", async (req, res) => {
    const order = await OrderModel.findByIdAndUpdate(req.params.id).exec()
    if (!order) {
        return res.status(404).send("order not found")
    }
    return res.send(order)
})

app.post("/orders", async (req, res) => {
    const order = new OrderModel(req.body)
    await order.save()
    return res.send(order)
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
