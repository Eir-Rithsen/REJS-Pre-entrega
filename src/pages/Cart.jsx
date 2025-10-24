import React from 'react'


export default function Cart({ cart, setCart }) {
const updateQty = (id, qty) => {
setCart(prev => prev.map(item => item.id === id ? { ...item, qty } : item))
}


const remove = (id) => setCart(prev => prev.filter(i => i.id !== id))


const total = cart.reduce((s, i) => s + i.price * i.qty, 0)


if (cart.length === 0) return <p>El carrito está vacío.</p>


return (
<section>
<h2>Tu Carrito</h2>
<ul className="cart-list">
{cart.map(item => (
<li key={item.id} className="cart-item">
<img src={item.image} alt={item.title} />
<div className="cart-info">
<h3>{item.title}</h3>
<p>${item.price}</p>
<div>
<label>Cantidad: </label>
<input type="number" min="1" value={item.qty} onChange={(e) => updateQty(item.id, Number(e.target.value))} />
<button onClick={() => remove(item.id)}>Eliminar</button>
</div>
</div>
</li>
))}
</ul>
<h3>Total: ${total.toFixed(2)}</h3>
</section>
)
}
