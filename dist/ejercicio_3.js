"use strict";
//Ejercicio 1
//Biblioteca Musical
Object.defineProperty(exports, "__esModule", { value: true });
const Prompt = require("prompt-sync");
const prompt = Prompt();
/**
 * Clase BibliotecaMusical
 * @class BibliotecaMusical
 * @atribute artistas
 */
class BibliotecaMusical {
    artistas;
    constructor(artistas) {
        this.artistas = artistas;
    }
    getArtistas() {
        return this.artistas;
    }
    setArtistas(artistas) {
        this.artistas = artistas;
    }
    mostrartablaentera() {
        for (let i = 0; i < this.getArtistas().length; i++) {
            console.table(this.getArtistas()[i]);
            console.table(this.getArtistas()[i].getDiscografia().getDiscografia());
            for (let j = 0; j < this.getArtistas()[i].getDiscografia().getDiscografia().length; j++) {
                console.table(this.getArtistas()[i].getDiscografia().getDiscografia()[j]);
            }
        }
    }
    mostrartablaartista(nombre) {
        for (let i = 0; i < this.artistas.length; i++) {
            if (this.getArtistas()[i].getNombre() == nombre) {
                console.table(this.getArtistas()[i]);
                console.table(this.getArtistas()[i].getDiscografia());
                for (let j = 0; j < this.getArtistas()[i].getDiscografia().getDiscografia().length; j++) {
                    console.table(this.getArtistas()[i].getDiscografia().getDiscografia()[j]);
                }
            }
        }
    }
    mostrartabladisco(nombre) {
        for (let i = 0; i < this.artistas.length; i++) {
            for (let j = 0; j < this.getArtistas()[i].getDiscografia().getdiscos().length; j++) {
                if (this.getArtistas()[i].getDiscografia().getdiscos()[j].getNombre() == nombre) {
                    console.table(this.getArtistas()[i].getDiscografia().getDiscografia()[j]);
                    console.table(this.getArtistas()[i].getDiscografia().getdiscos()[j].get_elementos());
                }
            }
        }
    }
    mostrartablacancion(nombre) {
        for (let i = 0; i < this.artistas.length; i++) {
            for (let j = 0; j < this.getArtistas()[i].getDiscografia().getDiscografia().length; j++) {
                for (let k = 0; k <
                    this.getArtistas()[i].getDiscografia().getDiscografia()[j].get_size(); k++) {
                    if (this
                        .getArtistas()[i].getDiscografia().getDiscografia()[j].get_elementos()[k].getNombre() == nombre) {
                        console.table(this.getArtistas()[i].getDiscografia().getDiscografia()[j].get_elementos()[k]);
                    }
                }
            }
        }
    }
}
/**
 * Clase Artista
 * @class Artista
 * @atribute Nombre
 * @atribute Numero de Oyentes
 * @atribute Discografia
 */
class Artista {
    nombre;
    numeroOyentes;
    discografia;
    constructor(nombre, numeroOyentes, discografia) {
        this.nombre = nombre;
        this.numeroOyentes = numeroOyentes;
        this.discografia = discografia;
    }
    getNombre() {
        return this.nombre;
    }
    getNumeroOyentes() {
        return this.numeroOyentes;
    }
    getDiscografia() {
        return this.discografia;
    }
    setnombre(nombre) {
        this.nombre = nombre;
    }
    setNumeroOyentes(numeroOyentes) {
        this.numeroOyentes = numeroOyentes;
    }
    setDiscografia(discografia) {
        this.discografia = discografia;
    }
}
/**
 * Clase Disco
 * @class Disco
 * @atribute Nombre
 * @atribute FechaLanzamiento
 * @atribute Canciones
 */
class Disco {
    nombre;
    fechaLanzamiento;
    canciones;
    constructor(nombre, fechaLanzamiento, canciones) {
        this.nombre = nombre;
        this.fechaLanzamiento = fechaLanzamiento;
        this.canciones = canciones;
    }
    get_size() {
        return this.canciones.length;
    }
    get_elementos() {
        return this.canciones;
    }
    getNombre() {
        return this.nombre;
    }
    getFechaLanzamiento() {
        return this.fechaLanzamiento;
    }
    getCanciones() {
        return this.canciones;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setFechaLanzamiento(fechaLanzamiento) {
        this.fechaLanzamiento = fechaLanzamiento;
    }
    setCanciones(canciones) {
        this.canciones = canciones;
    }
    getnumcanciones() {
        return this.canciones.length;
    }
    getDuracionTotal() {
        let duracionTotal = 0;
        this.canciones.forEach((cancion) => {
            duracionTotal += cancion.getDuracion();
        });
        return duracionTotal;
    }
    getReproduccionesTotales() {
        let reproduccionesTotales = 0;
        this.canciones.forEach((cancion) => {
            reproduccionesTotales += cancion.getNumeroReproducciones();
        });
        return reproduccionesTotales;
    }
}
class Single {
    nombre;
    duracion;
    generos;
    constructor(nombre, duracion, generos) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.generos = generos;
    }
    get_size() {
        return 1;
    }
    get_elementos() {
        return [this];
    }
    getNombre() {
        return this.nombre;
    }
    getDuracion() {
        return this.duracion;
    }
    getGeneros() {
        return this.generos;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setDuracion(duracion) {
        this.duracion = duracion;
    }
    setGeneros(generos) {
        this.generos = generos;
    }
}
/**
 * Clase Cancion
 * @class Cancion
 * @atribute Nombre
 * @atribute Duracion
 * @atribute Generos
 * @atribute Single
 * @atribute NumeroReproducciones
 */
class Cancion {
    nombre;
    duracion;
    generos;
    single;
    numeroReproducciones;
    constructor(nombre, duracion, generos, single, numeroReproducciones) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.generos = generos;
        this.single = single;
        this.numeroReproducciones = numeroReproducciones;
    }
    getNombre() {
        return this.nombre;
    }
    getDuracion() {
        return this.duracion;
    }
    getGeneros() {
        return this.generos;
    }
    getSingle() {
        return this.single;
    }
    getNumeroReproducciones() {
        return this.numeroReproducciones;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setDuracion(duracion) {
        this.duracion = duracion;
    }
    setGeneros(generos) {
        this.generos = generos;
    }
    setSingle(single) {
        this.single = single;
    }
    setNumeroReproducciones(numeroReproducciones) {
        this.numeroReproducciones = numeroReproducciones;
    }
}
class Discografia {
    discografia;
    constructor(discografia) {
        this.discografia = discografia;
    }
    getDiscografia() {
        return this.discografia;
    }
    setDiscografia(discografia) {
        this.discografia = discografia;
    }
    getdiscos() {
        const discos = [];
        this.discografia.forEach((element) => {
            if (element instanceof Disco) {
                discos.push(element);
            }
        });
        return discos;
    }
    getsingles() {
        const singles = [];
        this.discografia.forEach((element) => {
            if (element instanceof Single) {
                singles.push(element);
            }
        });
        return singles;
    }
}
const cancion1 = new Cancion("Cancion1", 3, ["Rock"], true, 100);
const cancion2 = new Cancion("Cancion2", 4, ["Rock"], true, 200);
const cancion3 = new Cancion("Cancion3", 5, ["Rock"], true, 300);
const cancion4 = new Cancion("Cancion4", 6, ["Rock"], true, 400);
const cancion5 = new Cancion("Cancion5", 7, ["Rock"], true, 500);
const cancion6 = new Cancion("Cancion6", 8, ["Rock"], true, 600);
const cancion7 = new Cancion("Cancion7", 9, ["Rock"], true, 700);
const cancion8 = new Cancion("Cancion8", 10, ["Rock"], true, 800);
const cancion82 = new Cancion("Cancion8", 10, ["Salsa"], true, 800);
const cancion9 = new Cancion("Cancion9", 11, ["Rock"], true, 900);
const cancion10 = new Cancion("Cancion10", 12, ["Rock"], true, 1000);
const disco1 = new Disco("Disco1", new Date(2019, 1, 1), [
    cancion1,
    cancion2,
    cancion3,
    cancion4,
    cancion5,
]);
const disco2 = new Disco("Disco2", new Date(2019, 1, 1), [
    cancion6,
    cancion7,
    cancion8,
    cancion9,
    cancion10,
]);
const disco3 = new Disco("Disco3", new Date(2019, 1, 1), [
    cancion1,
    cancion2,
    cancion82,
    cancion9,
    cancion10,
]);
const disco4 = new Disco("Disco4", new Date(2019, 1, 1), [cancion4, cancion5]);
const single1 = new Single("Single1", 3, ["Salsa"]);
const single2 = new Single("Single2", 4, ["Salsa"]);
const single3 = new Single("Single3", 5, ["Pop"]);
const single4 = new Single("Single4", 6, ["Pop"]);
const discografia1 = new Discografia([disco1, disco2, single1, single2]);
const discografia2 = new Discografia([disco3, disco4, single3, single4]);
const artista1 = new Artista("Artista1", 1000, discografia1);
const artista2 = new Artista("Artista2", 2000, discografia2);
const biblioteca = new BibliotecaMusical([artista1, artista2]);
let nombre = "";
let flag = true;
while (flag) {
    console.log("1. Mostrar toda la tabla\n2. Mostrar tabla de un artista\n3. Mostrar tabla de un disco\n4. Mostrar tabla de una cancion\n5. Salir");
    const opcion = prompt("Introduce una opcion:");
    switch (opcion) {
        case "1":
            biblioteca.mostrartablaentera();
            break;
        case "2":
            nombre = prompt("Introduce el nombre del artista: ");
            biblioteca.mostrartablaartista(nombre);
            break;
        case "3":
            nombre = prompt("Introduce el nombre del disco: ");
            biblioteca.mostrartabladisco(nombre);
            break;
        case "4":
            nombre = prompt("Introduce el nombre de la cancion: ");
            biblioteca.mostrartablacancion(nombre);
            break;
        case "5":
            flag = false;
            break;
    }
}
