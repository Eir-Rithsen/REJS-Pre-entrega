export default function Cart({ cart, removeFromCart }) {
return (
<aside className="cart">
<h2>🛒 Carrito</h2>
{cart.length === 0 ? (
<p>Tu carrito está vacío</p>
) : (
<ul>
{cart.map((item, index) => (
<li key={index}>
{item.title} - ${item.price}
<button onClick={() => removeFromCart(index)}>❌</button>
</li>
))}
</ul>
)}
</aside>
);
}
