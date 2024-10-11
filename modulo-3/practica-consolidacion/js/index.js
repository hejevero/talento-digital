class ListaProductos {
    constructor() {
        this.listado = new Array();
    }

    agregarProducto(nombre, precio) {
        this.listado.push({ nombre: nombre, precio: precio });
    }

    verListado() {
        let mensaje = ``;

        if (this.listado.length > 0) {
            mensaje += `Productos disponibles`;

            for (let index = 0; index < this.listado.length; index++) {
                mensaje += `${index + 1}.- ${this.listado[index].nombre} $${this.listado[index].valor}`;
            }
        } else {
            mensaje += `Sin productos que mostrar`;
        }

        return mensaje;
    }
}

class Producto extends ListaProductos {
    constructor(nombre, precio) {
        super();

        this.nombre = nombre;
        this.precio = precio;

        this.agregarProducto(this.nombre, this.precio);
    }
}

class Carrito {
    constructor() {
        this.productos = new Array();
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    calcularTotal() {
        let total = 0;

        for (let index = 0; index < this.producto.length; index++) {
            total = total + this.producto[index].precio;
        }

        return total;
    }

    finalizarCompra() {
        let nuevaCompra = new Compra();

        nuevaCompra.guardarCompra(this.calcularTotal, this.productos);
    }
}

class Compra {
    constructor() {
        this.compras = new Array();
    }

    guardarCompra(total, productos) {
        this.compras.push({
            total: total,
            productos: productos,
        });
    }

    verCompras() {
        let mensaje = ``;

        if (this.compras.length > 0) {
            for (let index = 0; index < this.compras.length; index++) {
                mensaje += `Por un total de: ${this.compras[index].total}, compraste:\n`;

                for (let subindex = 0; subindex < this.compras[index].productos.length; subindex++) {
                    let nombreProducto = this.compras[index].producto.nombre;
                    let cantidadProducto = this.compras[index].producto.cantidad;

                    mensaje += `${subindex + 1}.- ${nombreProducto} ${cantidadProducto} unidades`;
                }
            }
        } else {
            mensaje += `Sim compras realizadas`;
        }

        prompt(mensaje);
    }
}

const menu = () => {
    return parseInt(prompt(`Bienvenido a nuestra tienda, seleccione la opción que desea: \n1.- Ver compras\n2.- Nueva compra\n3.- Nuevo producto\n4.- Finalizar`));
};

document.addEventListener("DOMContentLoaded", function () {
    var listaProductos = new ListaProductos();

    new Producto("Leche", 1000);
    new Producto("Pan de Molde", 2000);
    new Producto("Queso", 1200);
    new Producto("Mermelada", 890);
    new Producto("Azúcar", 1300);

    do {
        var seleccionInicial = menu();

        if (seleccionInicial == 1) {
        }

        if (seleccionInicial == 2) {
            let nuevaCompra = parseInt(prompt(listaProductos.verListado()));
        }

        if (seleccionInicial == 3) {
        }
    } while (seleccionInicial != 4);

    alert(`Gracias por visitarnos, vuelva pronto`);
});
