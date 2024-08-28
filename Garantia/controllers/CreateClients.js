const { clients } = require('../clients.js')

function addNewClient(id, name) {
    const newClient = {
        id,
        name,
    }


    clients.push(newClient)
}

module.exports = {
    addNewClient
}