const { clients } = require('../database/clients.js')

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
