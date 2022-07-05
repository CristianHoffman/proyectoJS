const listaProductos = [
    {id: 1, nombre: "CocaCola 600ml", precio: 150, img: 'imagenes/cocacola.jpg'},
    {id: 2, nombre: "Alfajor Jorgelin", precio: 100, img: 'imagenes/jorgelin.jpg'},
    {id: 3, nombre: "Huevo Kinder", precio: 220, img: 'imagenes/kinder.jpg'},
    {id: 4, nombre: "Alfajor Milka", precio: 120, img: 'imagenes/milka.jpg'},
    {id: 5, nombre: "Chupetin Pops", precio: 30, img: 'imagenes/pops.jpg'},
    {id: 6, nombre: "Papas Lays", precio: 200, img: 'imagenes/papas.jpg'},

];

const prueba = {
    ...listaProductos
}
console.log(prueba)
