import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';


export default function ProductList({ addToCart }) {
const [products, setProducts] = useState([]);


useEffect(() => {
fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then((data) => setProducts(data));
}, []);


return (
<section className="product-list">
{products.map((product) => (
<ProductCard key={product.id} product={product} addToCart={addToCart} />
))}
</section>
);
}
