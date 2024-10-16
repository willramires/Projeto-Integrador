const express = require("express")
const mongoose = require("mongoose")
const {connect} = require("./db/connection")
const {OrderModel} = require("./mongo/orders")
const { orders } = require("./models/orders")
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
    connect()
    console.log(`server is running on ${port}`)
})

