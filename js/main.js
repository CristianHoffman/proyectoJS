const contenedorProductos = document.getElementById("contenedor-productos")
const contenedorCarrito = document.getElementById("carrito")
const botonVaciar = document.getElementById('vaciar-carrito')
const precioTotal = document.getElementById('precioTotal')
let carrito = []


document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem('carrito') && (carrito = JSON.parse(localStorage.getItem('carrito')))
    actualizarCarrito()
})

document.addEventListener('DOMContentLoaded', () => {
    fetchProd()
  })

const fetchProd = async () => {
    try {
      const res = await fetch('productos.json')
      const data = await res.json()
      listaProductos(data)
        } catch (error) {
        console.log(error)
      
    }
  }

const listaProductos = data => {
    data.forEach(producto => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
        <img src= ${producto.img}>
        <h3>${producto.nombre} </h3>
        <p class="precioProducto"> $ ${producto.precio} </p>
       <button id="${producto.id}" class="agregar boton">Agregar al carrito</button>
        `
        contenedorProductos.appendChild(div)
       
        
    })
}
  
const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = listaProductos.find(producto => producto.id == id);
        carrito.push(producto);
        actualizarCarrito();
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }
}

contenedorProductos.addEventListener('click', agregarAlCarrito);

const eliminarDelCarrito = (e) =>{
    const item = carrito.find((producto) => producto.id === e)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)
    actualizarCarrito()
    alertEliminar()
}

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

const actualizarCarrito = () => {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
        
            <p>${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${producto.id})"  class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `});
        precioTotal.innerText = carrito.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0) 
        
}

contenedorProductos.addEventListener('click', agregarAlCarrito) ;












