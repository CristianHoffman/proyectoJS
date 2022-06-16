class Productos {
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
        }
    mostrarProducto(){}    
}
const producto1 = new Productos ('Alfajor jorgelin', 110);
const producto2 = new Productos ('Alfajor milka', 120);
const producto3 = new Productos ('Coca Cola 600ml', 150);
const producto4 = new Productos ('Huevo Kinder', 220);
const producto5 = new Productos ('Chupetin Pop', 30);

 

class DetallePedido{
    constructor(producto, cantidad){
        this.producto = producto
        this.cantidad = cantidad
    }
    calcularSubtotal(){
        let subtotal = this.producto.precio * this.cantidad 
        return subtotal
    }
    mostrarDetalle(){}
}



const detallePedido1 = new DetallePedido(producto1, 10)
const detallePedido2 = new DetallePedido(producto2, 10)
const detallePedido3 = new DetallePedido(producto3, 20)
const detallePedido4 = new DetallePedido(producto4, 5)
const detallePedido5 = new DetallePedido(producto5, 60)


class Pedido {
    constructor(fecha, detalles){
        this.fecha = fecha
        this.detalles = detalles
    }
    calcularTotal(){
        let total = 0;
        for(const pedido of this.detalles){
            
            total = total + pedido.calcularSubtotal();
        }
        return total;
    }
    mostrarPedido(){}
}

const array = [];
array.shift(detallePedido1);
array.push(detallePedido2);
array.push(detallePedido3);
array.push(detallePedido4);
array.push(detallePedido5);

const pedido1 = new Pedido (new Date(), array)
console.log(pedido1);

