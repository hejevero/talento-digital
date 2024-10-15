class Producto {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

class Carrito {
    constructor() {
        this.productosSeleccionados = new Array();
    }

    agregarProducto(producto) {
        this.productosSeleccionados.push(producto);
    }

    calcularTotal() {
        let total = 0;

        this.productosSeleccionados.forEach((producto) => {
            total = total + producto.valor * producto.cantidad;
        });

        return total;
    }

    listarProductos() {
        let lista = "Tu carrito de compra:\n";

        for (let index = 0; index < this.productosSeleccionados.length; index++) {
            lista += `${index + 1}.- ${this.productosSeleccionados[index].nombre} $${this.productosSeleccionados[index].valor} ${this.productosSeleccionados[index].cantidad}u Total: $${
                this.productosSeleccionados[index].valor * this.productosSeleccionados[index].cantidad
            }\n`;
        }

        return lista;
    }

    finalizarCompra() {
        alert(`Total de la compra: ${carrito.calcularTotal()}`);

        this.productosSeleccionados = new Array();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var carrito = new Carrito();
    var listaProductos = [new Producto("Leche", 1000), new Producto("Pan de Molde", 2000), new Producto("Queso", 1200), new Producto("Mermelada", 890), new Producto("Azúcar", 1300)];

    var mensajeProductos = `Productos disponibles\n`;

    for (let index = 0; index < listaProductos.length; index++) {
        mensajeProductos += `${index + 1}.- ${listaProductos[index].nombre} $${listaProductos[index].valor}\n`;
    }

    do {
        alert(mensajeProductos);

        do {
            var opcion = parseInt(prompt("Ingresa el número del producto que deseas agregar al carrito:"));

            if (!listaProductos[opcion - 1]) {
                alert("Producto no encontrado, vuelva a intentarlo.");
            }
        } while (!listaProductos[opcion - 1]);

        do {
            var cantidad = parseInt(prompt("Ingresa la cantidad de unidades:"));

            if (!Number.isInteger(cantidad)) {
                alert("Debe ingresar una cantidad valida");
            }
        } while (!Number.isInteger(cantidad));

        listaProductos[opcion - 1].cantidad = cantidad;

        carrito.agregarProducto(listaProductos[opcion - 1]);

        alert(`${cantidad} ${listaProductos[opcion - 1].nombre}(s) agregado(s) al carrito.`);

        alert(carrito.listarProductos());

        var continuar = prompt("¿Desea continuar agregando productos? (s/n)");
    } while (continuar == "s");

    carrito.finalizarCompra();
});
