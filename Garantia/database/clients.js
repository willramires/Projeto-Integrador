const clients = [
   {
    id: 1,
    cliente: {
      nome: "Will",
      cpf: "000.000.000-00",
      contato: {
        numero: "00 00000-0000",
        email: "willgabrielramires@gmail.com",
      }
      endereço: "rua aaa",
      
      informação da compra: {
        data da compra: "01-01-2024",
        tipo de produto: "Notebook",
        tempo de grantia: "01-01-2024",
        nota fiscal: "dasdas",
        valor da compra: "2500,00",
      }
      informaçãodopedido: {
        reparo: false,
        troca: false,
        estendergarantia: true,
        devolução: false,
      }
    } 
]

module.exports = {
    clients
}
