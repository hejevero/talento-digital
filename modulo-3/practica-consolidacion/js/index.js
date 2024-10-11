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

        var continuar = prompt("¿Desea continuar agregando productos? (s/n)");
    } while (continuar == "s");

    alert(`Total de la compra: ${carrito.calcularTotal()}`);
});
