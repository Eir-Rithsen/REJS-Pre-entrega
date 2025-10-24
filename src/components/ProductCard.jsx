export default function ProductCard({ product, addToCart }) {
return (
<div className="product-card">
<img src={product.image} alt={product.title} />
<h3>{product.title}</h3>
<p>${product.price}</p>
<button onClick={() => addToCart(product)}>Agregar al carrito</button>
</div>
);
}
