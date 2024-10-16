const orders = [
    {
        customer: {
            name: "Customer Name",
            cpf: "000.000.000-00",
            contact: {
                number: "00 00000-0000",
                email: "afd@gmail.com",
            },
            address: "Street AAA",
            order: {
                repair: true,
                exchange: false,
                extendWarranty: false,
                purchaseDate: new Date("2024-01-01"),
                productType: "Product A",
                invoiceNumber: "12345",
                purchaseValue: 100,
            },
        },
    },
];


module.exports = { orders };
