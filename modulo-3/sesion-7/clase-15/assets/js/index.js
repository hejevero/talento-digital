class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
}

class Biblioteca {
    constructor() {
        this.almacen = [];
    }

    agregarLibro(libro) {
        this.almacen.push(libro);
    }

    calcularTotalPaginas() {
        let contador = 0;

        this.almacen.forEach((libro) => {
            contador += libro.paginas;
        });

        return contador;
    }

    buscarLibro(titulo) {
        for (let index = 0; index < this.almacen.length; index++) {
            if (this.almacen[index].titulo == titulo) {
                return "Libro existe";
            }
        }

        return "Libro no encontrado";
    }

    mostrarColeccion() {
        let contador = 0;
        if (this.almacen.length > 0) {
            this.almacen.forEach((libro) => {
                console.log(`Libro: ${libro.titulo}, Autor: ${libro.autor}, Paginas: ${libro.paginas}`);
                contador += libro.paginas;
            });

            console.log(`El total de páginas es ${contador}`);
        } else {
            console.log("Biblioteca sin libros");
        }
    }
}

let biblioteca = new Biblioteca();
let libro1 = new Libro("Cien años de soledad", "Gabriel Garcia M", 417);
let libro2 = new Libro("La Íliada", "Homero", 100);
let libro3 = new Libro("La Odisea", "Homero", 230);
let libro4 = new Libro("La Íliada", "Homero", 100);
biblioteca.agregarLibro(libro1);
biblioteca.agregarLibro(libro2);
biblioteca.agregarLibro(libro3);
biblioteca.agregarLibro(libro4);

do {
    let agregar = prompt("Agregar nuevo libro");

    if (agregar == "si") {
        let titulo = prompt("Titulo del libro");
        let autor = prompt("Autor del libro");
        let paginas = parseInt(prompt("Cantidad de paginas"));

        let libroNuevo = new Libro(titulo, autor, paginas);
        biblioteca.agregarLibro(libroNuevo);
    }
} while (agregar == "no");

console.log(biblioteca.calcularTotalPaginas());
console.log(biblioteca.buscarLibro("Cien años de soledad"));
biblioteca.mostrarColeccion();
