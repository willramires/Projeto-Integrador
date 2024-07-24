var fruits = ['apple','banana', "orange"]
console.log(fruits)
fruits.push("kiwi")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("strawberry")
console.log(fruits)
fruits.shift()
console.log(fruits)
console.log(fruits.indexOf("banana"))
console.log(fruits.includes("banana"))



var numbers = [1, 2, 3, 4]
var squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers)
var evennumbers = numbers.filter(num => num % 2 === 0)
console.log(evennumbers)



const produtos = [
    {id: 1, nome: 'camisa' },
    {id: 2, nome: "calca"},
    {id: 3, nome: "sandalias"},
]
function encontrarprodutoporid(id) {
    var produtoencontrado = produtos.find((produto) => produto.id == id)
    if (!produtoencontrado) {
        return `Produto nao encontrado`
    }
    return produtoencontrado
}
console.log(encontrarprodutoporid(3))
