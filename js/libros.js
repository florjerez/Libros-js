//! 1 -CREAR UNA CLASE "LISTA DE LIBROS" 

class listaLibros {
    constructor(duenio){
        this.duenio = duenio;
        this.libros = [];
        this.librosYaLeidos = [];
        this.librosNoLeidos = [];
        this.libroActual = null;
        this.ultimoLibro = null;
        this.siguienteLibro = null;
    }

    agregarLibros(libro){
        this.libros.push(libro);
        if(libro.leido ==true) {
            this.librosYaLeidos.push(libro)
        } else {
            this.librosNoLeidos.push(libro)
        }
    }
    empezarLibro(libro){
        this.libroActual = libro;
    }
    finalizarLibro(libro){
        this.ultimoLibro = this.libroActual;
        this.librosYaLeidos.push(libro);
        this.librosNoLeidos = this.librosNoLeidos.filter(i=> i.titulo !=this.libroActual.titulo)
        this.libroActual = null
    }
}



//! 2- CREAR UNA CLASE "LIBRO"

class Libro{
    constructor(titulo, genero, autor, leido){
        this.titulo = titulo;
        this.genero = genero;
        this.autor = autor;
        this.leido = leido;
    }
}

const libroLautaro = new listaLibros('Lautaro');

const principito = new Libro('el principito', 'fantasia', 'exupery', true)






//FUNCIONES Y METODOS PARA MANJEAR TIEMPO, CUENTA REGRESIVA LUEGO DE 10
/*
let contador = 10;
const contadorTiempo = setInterval( ()=> {
    console.log('Despegue en', + contador)
    contador--
}, 1000)

setTimeout( ()=> {
    clearInterval(contadorTiempo);
    console.log('Despegue!')
}, 1000)
*/
//por id document.getElementById('id')
//por clase document.getElementByClassName('Class')
//por nombre d etiqueta
//por selector
//por selector (all)


