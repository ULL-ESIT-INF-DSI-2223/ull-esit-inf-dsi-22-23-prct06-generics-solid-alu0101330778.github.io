"use strict";
//DSIflix
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pelicula = exports.Serie = exports.Documental = exports.BasicStreamableCollection = void 0;
const Prompt = require("prompt-sync");
const prompt = Prompt();
/**
 * Clase que que define una colección de streamable
 */
class BasicStreamableCollection {
    lista;
    constructor(lista) {
        this.lista = lista;
    }
    addElement(element) {
        this.lista.push(element);
    }
}
exports.BasicStreamableCollection = BasicStreamableCollection;
class Documental extends BasicStreamableCollection {
    documentales;
    constructor(documentales) {
        super(documentales);
        this.documentales = documentales;
    }
    buscar(opcion, valor) {
        let resultado = [];
        switch (opcion) {
            case ("titulo"):
                resultado = this.getElements().filter((aux) => (aux.titulo == valor));
                break;
            case ("fecha"):
                resultado = this.getElements().filter((aux) => (aux.fecha == +valor));
                break;
            case ("genero"):
                resultado = this.getElements().filter((aux) => (aux.genero == valor));
                break;
            case ("duracion"):
                resultado = this.getElements().filter((aux) => (aux.duracion == +valor));
                break;
            default:
                console.log("No existe");
        }
        return resultado;
    }
    getElements() {
        return this.documentales;
    }
}
exports.Documental = Documental;
class Serie extends BasicStreamableCollection {
    series;
    constructor(series) {
        super(series);
        this.series = series;
    }
    buscar(opcion, valor) {
        let resultado = [];
        switch (opcion) {
            case ("titulo"):
                resultado = this.getElements().filter((aux) => (aux.titulo == valor));
                break;
            case ("fecha"):
                resultado = this.getElements().filter((aux) => (aux.fecha == +valor));
                break;
            case ("genero"):
                resultado = this.getElements().filter((aux) => (aux.genero == valor));
                break;
            case ("duracion"):
                resultado = this.getElements().filter((aux) => (aux.duracion == +valor));
                break;
            case ("numeroTemporadas"):
                resultado = this.getElements().filter((aux) => (aux.numeroTemporadas == +valor));
                break;
            case ("numeroCapitulos"):
                resultado = this.getElements().filter((aux) => (aux.numeroCapitulos == +valor));
                break;
            default:
                console.log("No existe");
        }
        return resultado;
    }
    getElements() {
        return this.series;
    }
}
exports.Serie = Serie;
class Pelicula extends BasicStreamableCollection {
    peliculas;
    constructor(peliculas) {
        super(peliculas);
        this.peliculas = peliculas;
    }
    buscar(opcion, valor) {
        let resultado = [];
        switch (opcion) {
            case ("titulo"):
                resultado = this.getElements().filter((aux) => (aux.titulo == valor));
                break;
            case ("fecha"):
                resultado = this.getElements().filter((aux) => (aux.fecha == +valor));
                break;
            case ("genero"):
                resultado = this.getElements().filter((aux) => (aux.genero == valor));
                break;
            case ("duracion"):
                resultado = this.getElements().filter((aux) => (aux.duracion == +valor));
                break;
            case ("clasificacion"):
                resultado = this.getElements().filter((aux) => (aux.clasificacion == valor));
                break;
            case ("director"):
                resultado = this.getElements().filter((aux) => (aux.director == valor));
                break;
            default:
                console.log("No existe");
        }
        return resultado;
    }
    getElements() {
        return this.peliculas;
    }
}
exports.Pelicula = Pelicula;
