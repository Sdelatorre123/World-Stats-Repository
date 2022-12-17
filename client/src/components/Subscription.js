// Standard Subscription: price_1MG3g0LpXyZJqOSzIy4xGHUi
// Premium Subscription: price_1MG3hpLpXyZJqOSzhcHjyFhj
// Exclusive Subscription: price_1MG3jeLpXyZJqOSzv5niurtQ
function getProductData(id) {
const productsArray = [
    {
        id: "price_1MG3g0LpXyZJqOSzIy4xGHUi",
        title: "Standard",
        price: 10.00
    },
    {
        id: "price_1MG3hpLpXyZJqOSzhcHjyFhj",
        title: "Premium",
        price: 15.00
    },
    {
        id: "price_1MG3jeLpXyZJqOSzv5niurtQ",
        title: "Exclusive",
        price: 20.00
    },
];

    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
}
return productData;
}

export default getProductData;