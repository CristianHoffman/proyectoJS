
//////////PRODUCTOS//////////
const contenedorProductos = document.getElementById("contenedor-productos")

const productos = [
    {id: 1, nombre: "CocaCola 600ml", precio: 150, img: 'imagenes/cocacola.jpg'},
    {id: 2, nombre: "Alfajor Jorgelin", precio: 100, img: 'imagenes/jorgelin.jpg'},
    {id: 3, nombre: "Huevo Kinder", precio: 220, img: 'imagenes/kinder.jpg'},
    {id: 4, nombre: "Alfajor Milka", precio: 120, img: 'imagenes/milka.jpg'},
    {id: 5, nombre: "Chupetin Pops", precio: 30, img: 'imagenes/pops.jpg'},
    {id: 6, nombre: "Papas Lays", precio: 200, img: 'imagenes/papas.jpg'},

];



const mostrarProductos = () => {
    productos.forEach(producto => {
        contenedorProductos.innerHTML += `
        
            <div class="product-cont">
                 <img class= "img-carrito" src="${producto.img}" />
                <h2>${producto.nombre}</h2>
                <p>$${producto.precio}</p>
                <button id="${producto.id}" class="agregar">Agregar al carrito</button>
            </div>
        `;
    });
}


document.addEventListener('DOMContentLoaded', mostrarProductos);



//////////MOSTRAR CARRITO //////////
const carrito = [];


const agregarAlCarrito = agr => {
    if (agr.target.classList.contains('agregar')) {
        const id = agr.target.id;
        const producto = productos.find(producto => producto.id == id);
        carrito.push(producto);
        mostrarCarrito();
    }
}

const mostrarCarrito = () => {
    const contenedorCarrito = document.getElementById('carrito');
    contenedorCarrito.innerHTML = '<h2>Carrito:</h2>';
    carrito.forEach(producto => {
        contenedorCarrito.innerHTML += `
            <p>${producto.nombre} = $ ${producto.precio}</p>
        `;
    });
}


contenedorProductos.addEventListener('click', agregarAlCarrito);

const form = () => {
  const contenedorFormulario = document.getElementById("contacto")
  contenedorFormulario.innerHTML += `
  <h2> Contactanos </h2>
  <input type="text">`
} 
form()









