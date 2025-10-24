import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../api'


export default function ProductDetail({ onAdd }) {
const { id } = useParams()
const [product, setProduct] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


useEffect(() => {
setLoading(true)
fetchProductById(id)
.then((data) => setProduct(data))
.catch((err) => setError(err.message))
.finally(() => setLoading(false))
}, [id])


if (loading) return <p>Cargando producto...</p>
if (error) return <p>Error: {error}</p>
if (!product) return null


return (
<section>
<div className="product-detail">
<img src={product.image} alt={product.title} />
<div>
<h2>{product.title}</h2>
<p className="price">${product.price}</p>
<p>{product.description}</p>
<button onClick={() => onAdd(product)}>Agregar al carrito</button>
</div>
</div>
</section>
)
}
