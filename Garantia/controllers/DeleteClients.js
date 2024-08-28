const { clients } = require('../clients');

function deleteClient(id) {
    const index = clients.findIndex(clients => clients.id === id);
    clients.splice(index, 1);
}

module.exports = {
    deleteClient
}