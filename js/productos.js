const listaProductos = [
    {id: 1, nombre: "CocaCola 600ml", cantidad: 1, precio: 150, img: 'imagenes/cocacola.jpg'},
    {id: 2, nombre: "Alfajor Jorgelin", cantidad: 1, precio: 100, img: 'imagenes/jorgelin.jpg'},
    {id: 3, nombre: "Huevo Kinder", cantidad: 1, precio: 220, img: 'imagenes/kinder.jpg'},
    {id: 4, nombre: "Alfajor Milka", cantidad: 1, precio: 120, img: 'imagenes/milka.jpg'},
    {id: 5, nombre: "Chupetin Pops", cantidad: 1, precio: 30, img: 'imagenes/pops.jpg'},
    {id: 6, nombre: "Papas Lays", cantidad: 1, precio: 200, img: 'imagenes/papas.jpg'},

];

const prueba = {
    ...listaProductos
}
console.log(prueba)