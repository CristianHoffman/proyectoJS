
const contenedorProductos = document.getElementById("contenedor-productos")


const contenedorCarrito = document.getElementById("carrito")

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

const listaProductos = [
    {id: 1, nombre: "CocaCola 600ml", precio: 150, img: 'imagenes/cocacola.jpg'},
    {id: 2, nombre: "Alfajor Jorgelin", precio: 100, img: 'imagenes/jorgelin.jpg'},
    {id: 3, nombre: "Huevo Kinder", precio: 220, img: 'imagenes/kinder.jpg'},
    {id: 4, nombre: "Alfajor Milka", precio: 120, img: 'imagenes/milka.jpg'},
    {id: 5, nombre: "Chupetin Pops", precio: 30, img: 'imagenes/pops.jpg'},
    {id: 6, nombre: "Papas Lays", precio: 200, img: 'imagenes/papas.jpg'},

];

listaProductos.forEach((producto) =>{
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src= ${producto.img}>
    <h3>${producto.nombre} </h3>
    <p class="precioProducto">${producto.precio} </p>
   <button id="${producto.id}" class="agregar boton">Agregar al carrito</button>
    `
    contenedorProductos.appendChild(div)
   
})


const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregar')) {
        const id = e.target.id;
        const producto = listaProductos.find(producto => producto.id == id);
        carrito.push(producto);
        actualizarCarrito();
    }
}

contenedorProductos.addEventListener('click', agregarAlCarrito);

const eliminarDelCarrito = (e) =>{
    const item = carrito.find((producto) => producto.id === e)
    const indice = carrito.indexOf(item)
    carrito.splice (indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = () => {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '<h2>Carrito:</h2>';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <p>${producto.nombre}</p>
            <p>Precio: ${producto.precio}</p>
            <button onclick ="eliminarDelCarrito(${producto.id})" class="btn btn-danger" <i">Eliminar </i></button>
        `
        
        localStorage.setItem('carrito', JSON.stringify(carrito))
    });
    
}

contenedorProductos.addEventListener('click', agregarAlCarrito);





