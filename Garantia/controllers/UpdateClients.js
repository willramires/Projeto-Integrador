const { clients } = require("../clients")

function updateClient(id, name) {
    const index = clients.findIndex(clients => clients.id === id)
    clients[index] = {
        id,
        name,
    }
}

module.exports = {
    updateClient
}