const mongoose = require("mongoose")

const key = 'cjfrGo5toaGMbqA9'

const connect = async () => {
    try {
        await mongoose.connect(`mongodb+srv://willgabrielramires:${key}@cluster0.hvoop.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        console.log("connected to the database")
    } catch (error) {
        console.log("error coneccting to the database")
    }
}

module.exports = { connect }