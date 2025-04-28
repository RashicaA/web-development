// Task Overview:
// Build an Interactive Product List where:
//     The product array is passed as a prop from the parent component.
//     Each product has a name, price, and an “Add to Cart” button.
//     Clicking “Add to Cart” logs the product name in the console.

const ProductList = ({ products }) => {
    console.log(products)

    function handleAddToCart(name, price) {
        console.log("Product added -- ", name, price)
    }

    return (
        <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
            <h2>Product List</h2>
            <ul>
                List of products
                {products.map(product => (
                    <li key={product.id} style={{ marginBottom: "10px" }}>
                        {product.name} – {product.price}
                        <button onClick={() => handleAddToCart(product.name, product.price)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList