const { clients } = require("../database/clients");

function readClients() {
    return clients
}

module.exports = {
    readClients
}
