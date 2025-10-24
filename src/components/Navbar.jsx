import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'


export default function Navbar() {
const { user, logout } = useAuth()


return (
<nav className="navbar">
<div className="brand">
<Link to="/">E-Store</Link>
</div>
<ul className="nav-links">
<li><Link to="/products">Productos</Link></li>
<li><Link to="/cart">Carrito</Link></li>
{user ? (
<>
<li className="greet">Hola, {user.name}</li>
<li><button className="link-btn" onClick={logout}>Salir</button></li>
</>
) : (
<li><Link to="/login">Login</Link></li>
)}
</ul>
</nav>
)
}
