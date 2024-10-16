const mongoose = require("mongoose")
const Schema = mongoose.Schema

const contactSchema = new Schema({
    number: { type: String, required: true},
    email: { type: String, required: true}
})

const orderSchema = new Schema({
    repair: {type: Boolean, required: true},
    exchange: {type: Boolean, required: true},
    extendedWarranty: {type: Boolean},
    purchaseDate: {type: Date, required: true},
    productType: {type: String, required: true},
    invoiceNumber: {type: String, required: true},
    purchaseValue: {type: Number, required: true},

})

const customerSchema = new Schema({
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: contactSchema, required: true},
    order: {type: orderSchema, required: true},
})

const OrderModel = mongoose.model("Order", customerSchema)
module.exports = {OrderModel}