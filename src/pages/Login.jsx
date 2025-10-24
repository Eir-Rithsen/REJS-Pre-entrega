import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthProvider'


export default function Login() {
const [name, setName] = useState('')
const { login } = useAuth()
const navigate = useNavigate()


const handle = (e) => {
e.preventDefault()
if (!name) return alert('Ingresa un nombre')
login(name)
navigate('/')
}


return (
<section>
<h2>Login (simulado)</h2>
<form onSubmit={handle} className="form">
<label>Nombre</label>
<input value={name} onChange={(e) => setName(e.target.value)} />
<button type="submit">Entrar</button>
</form>
<p>Usuario de prueba: escribe cualquier nombre para enviar.</p>
</section>
)
}
