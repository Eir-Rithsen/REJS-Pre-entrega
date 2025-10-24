import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../api'


export default function Products({ onAdd }) {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
setLoading(true)
fetchProducts()
.then((data) => setProducts(data))
.catch((err) => setError(err.message))
.finally(() => setLoading(false))
}, [])


if (loading) return <p>Cargando productos...</p>
if (error) return <p>Error: {error}</p>


return (
<section>
<h2>Productos</h2>
<div className="grid">
{products.map(p => (
<article key={p.id} className="card">
<Link to={`/products/${p.id}`} className="img-wrap">
<img src={p.image} alt={p.title} />
</Link>
<h3>{p.title}</h3>
<p className="price">${p.price}</p>
<div className="actions">
<button onClick={() => onAdd(p)}>Agregar</button>
<Link to={`/products/${p.id}`}>Ver</Link>
</div>
</article>
))}
</div>
</section>
)
}
