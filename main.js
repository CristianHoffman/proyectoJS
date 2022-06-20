

const contenedorProductos = document.getElementById("contenedor-productos")

const productos = [
    {id: 1, nombre: "CocaCola 600ml", precio: 150, img: 'imagenes/cocacola.jpg'},
    {id: 2, nombre: "Alfajor Jorgelin", precio: 100, img: 'imagenes/jorgelin.jpg'},
    {id: 3, nombre: "Huevo Kinder", precio: 220, img: 'imagenes/kinder.jpg'},
    {id: 4, nombre: "Alfajor Milka", precio: 120, img: 'imagenes/milka.jpg'},
    {id: 5, nombre: "Chupetin Pops", precio: 30, img: 'imagenes/pops.jpg'},

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


