const productsArray = [
    {
        id: "1",
        title: "Standard Sub",
        price: 10.00
    },
    {
        id: "2",
        title: "Premium Sub",
        price: 15.00
    },
    {
        id: "3",
        title: "Exclusive Sub",
        price: 20.00
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    
    } 
    return productData;
}

export { productsArray, getProductData };