const products = [
    { name: 'Laptop', price: 1200, discount: 0.15 },
    { name: 'Smartphone', price: 800, discount: 0.10 },
    { name: 'Headphones', price: 150, discount: 0.20 },
    { name: 'Tablet', price: 450, discount: 0.12 },
    { name: 'Smartwatch', price: 200, discount: 0.08 },
    { name: 'Keyboard', price: 100, discount: 0.05 }
];


// // Without using map, add and calculate a final price field:
const productsWithFinalPriceMapped = products.map(product => {
  return {
    ...product,
    finalPrice: product.price - (product.price * product.discount)
  }
})


/* ===============================C=O=D=E================================= */

const productsWithFinalPrice = []

for (let i = 0; i < products.length; i++) {
  const finalPriceArray = products[i].price * (1-products[i].discount );
  productsWithFinalPrice.push(finalPriceArray); 
  };
console.log(productsWithFinalPrice);

/* ===============================T=E=S=T================================= */

const assert = require("node:assert")

assert.strictEqual(JSON.stringify(productsWithFinalPrice), JSON.stringify(productsWithFinalPriceMapped))


console.log("Well done!")




