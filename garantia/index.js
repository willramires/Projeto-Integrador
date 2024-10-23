const express = require('express')
const { pool } = require('./db/connection')
const { orders } = require('./models/orders')
const app = express()
const port = 3000

app.use(express.json())

app.get("/orders", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM orders');
        const orders = result.rows;
        if (orders.length === 0) {
            return res.status(404).send("No orders found");
        }
        return res.send(orders);
    } catch (error) {
        return res.status(500).send("Server error");
    }
});



app.listen(port, () => {
    pool.connect().then(client => {
        console.log('connected to the database')
        client.release()
    }).catch(err => {
        console.error('Error connecting to the database', err)
    })
    console.log(`Server is running on ${port}`)
})
