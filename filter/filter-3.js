const products = [
    { name: 'Laptop', price: 1200, discount: 0.15 },
    { name: 'Smartphone', price: 800, discount: 0.10 },
    { name: 'Tablet', price: 450, discount: 0.20 },
    { name: 'Smartwatch', price: 520, discount: 0.17 },
    { name: 'Headphones', price: 150, discount: 0.05 },
    { name: 'Monitor', price: 300, discount: 0.18 }
];

// Without using filter, filter out any products that're above $500 after discount
const productsFilteredHof = products.filter(product => {
    return (product.price - (product.price * product.discount)) < 500
})

/* ===============================C=O=D=E================================= */

let productsFiltered = []



/* ===============================T=E=S=T================================= */

const assert = require("node:assert")

assert.strictEqual(JSON.stringify(productsFiltered), JSON.stringify(productsFilteredHof))


console.log("Well done!");
