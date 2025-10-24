const BASE = 'https://fakestoreapi.com'


export async function fetchProducts() {
const res = await fetch(`${BASE}/products`)
if (!res.ok) throw new Error('Error fetching products')
return res.json()
}


export async function fetchProductById(id) {
const res = await fetch(`${BASE}/products/${id}`)
if (!res.ok) throw new Error('Error fetching product')
return res.json()
}
