import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';


export default function App() {
const [cart, setCart] = useState([]);


const addToCart = (product) => {
setCart((prevCart) => [...prevCart, product]);
};


const removeFromCart = (index) => {
setCart((prevCart) => prevCart.filter((_, i) => i !== index));
};


return (
<div>
<Header />
<main>
<ProductList addToCart={addToCart} />
<Cart cart={cart} removeFromCart={removeFromCart} />
</main>
</div>
);
}
