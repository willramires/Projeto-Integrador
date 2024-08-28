const { addNewClient } = require("./controllers/CreateClients")
const { deleteClient } = require("./controllers/DeleteClients")
const { readClients } = require("./controllers/ReadClients")
const { updateClient } = require("./controllers/UpdateClients")

addNewClient(1, 'will')
deleteClient(2)
updateClient(1, 'joao')

console.log(readClients())