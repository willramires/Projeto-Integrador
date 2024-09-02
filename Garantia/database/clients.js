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
      endereco: "rua aaa",
      
      informacaodacompra: {
        datadacompra: "01-01-2024",
        tipodeproduto: "Notebook",
        tempodegrantia: "01-01-2024",
        notafiscal: "dasdas",
        valordacompra: "2500,00",
      }
      informacaodopedido: {
        reparo: false,
        troca: false,
        estendergarantia: true,
        devolucao: false,
      }
    } 
]

module.exports = {
    clients
}
