//Importar librerias y funciones
import "mocha";
import {expect} from "chai";
import {Documental} from "../src/ejercicio_1";
import {Pelicula} from "../src/ejercicio_1";
import {Serie} from "../src/ejercicio_1";
import {Lista} from "../src/ejercicio_2";

const serie1 = {titulo: "The Office", fecha: 2005, duracion: 30, genero: "Comedia", numeroTemporadas: 9, numeroCapitulos: 201}
const serie2 = {titulo: "Friends", fecha: 1994, duracion: 30, genero: "Comedia", numeroTemporadas: 10, numeroCapitulos: 236}
const serie3 = {titulo: "The Walking Dead", fecha: 2010, duracion: 30, genero: "Terror", numeroTemporadas: 10, numeroCapitulos: 216}
const listaseries = new Serie ([serie1, serie2]);

const pelicula1 = {titulo: "El señor de los anillos", fecha: 2001, duracion: 180, genero: "Fantasia", clasificacion: "+3", director: "Peter Jackson"}
const pelicula2 = {titulo: "El padrino", fecha: 1972, duracion: 175, genero: "Drama", clasificacion: "+18", director: "Francis Ford Coppola"}
const pelicula3 = {titulo: "El club de la lucha", fecha: 1999, duracion: 139, genero: "Drama", clasificacion: "+18", director: "David Fincher"}
const listaPeliculas = new Pelicula ([pelicula1, pelicula2]);

const documental1 = {titulo: "El documental de la vida", fecha: 2021, duracion: 120, genero: "Vida"}
const documental2 = {titulo: "El documental de la muerte", fecha: 2021, duracion: 120, genero: "Muerte"}
const documental3 = {titulo: "Como hacer un documental", fecha: 2021, duracion: 120, genero: "Documental"}

const listaDocumentales = new Documental ([documental1, documental2]);


//Testeo

describe("Testeo de DSIflix.", () => {
    
    describe("Clase Pelicula.", () => {
    
        it("Añadir una nueva pelicula", () => {
            listaPeliculas.addElement(pelicula3);
            expect(listaPeliculas.getElements().length).to.be.equal(3);
        });
        it("Buscar por titulo", () => {
            expect(listaPeliculas.buscar("titulo", "El padrino")).to.be.deep.equal([pelicula2]);
        });
        it("Buscar por fecha", () => {
            expect(listaPeliculas.buscar("fecha", "1999")).to.be.deep.equal([pelicula3]);
        });
        it("Buscar por duracion", () => {
            expect(listaPeliculas.buscar("duracion", "139")).to.be.deep.equal([pelicula3]);
        });
        it("Buscar por genero", () => {
            expect(listaPeliculas.buscar("genero", "Drama")).to.be.deep.equal([pelicula2, pelicula3]);
        });
        it("Buscar por clasificacion", () => {
            expect(listaPeliculas.buscar("clasificacion", "+3")).to.be.deep.equal([pelicula1]);
        });
        it("Buscar por director", () => {
            expect(listaPeliculas.buscar("director", "Peter Jackson")).to.be.deep.equal([pelicula1]);
        });
    
    
    
    });

    describe("Clase Serie.", () => {
    
        it("Añadir una nueva serie", () => {
            listaseries.addElement(serie3);
            expect(listaseries.getElements().length).to.be.equal(3);
        });
        it("Buscar por titulo", () => {
            expect(listaseries.buscar("titulo", "The Walking Dead")).to.be.deep.equal([serie3]);
        });
        it("Buscar por fecha", () => {
            expect(listaseries.buscar("fecha", "2010")).to.be.deep.equal([serie3]);
        });
        it("Buscar por duracion", () => {
            expect(listaseries.buscar("duracion", "30")).to.be.deep.equal([serie1, serie2, serie3]);
        });
        it("Buscar por genero", () => {
            expect(listaseries.buscar("genero", "Comedia")).to.be.deep.equal([serie1, serie2]);
        });
        it("Buscar por numero de temporadas", () => {
            expect(listaseries.buscar("numeroTemporadas", "9")).to.be.deep.equal([serie1]);
        });
        it("Buscar por numero de capitulos", () => {
            expect(listaseries.buscar("numeroCapitulos", "201")).to.be.deep.equal([serie1]);
        });
    
    
    
    });

    describe ("Clase Documental.", () => {

        it("Añadir un nuevo documental", () => {
            listaDocumentales.addElement(documental3);
            expect(listaDocumentales.getElements().length).to.be.equal(3);
        });
        it("Buscar por titulo", () => {
            expect(listaDocumentales.buscar("titulo", "El documental de la vida")).to.be.deep.equal([documental1]);
        });
        it("Buscar por fecha", () => {
            expect(listaDocumentales.buscar("fecha", "2021")).to.be.deep.equal([documental1, documental2, documental3]);
        });
        it("Buscar por duracion", () => {
            expect(listaDocumentales.buscar("duracion", "120")).to.be.deep.equal([documental1, documental2, documental3]);
        });
        it("Buscar por genero", () => {
            expect(listaDocumentales.buscar("genero", "Documental")).to.be.deep.equal([documental3]);
        });
    });

});

let lista1 = new Lista([1,2,3,4,5,6,7,8,9,10]);
const listaunir = new Lista([12,13,14,15,16,17,18,19,20]);
const lista2 = new Lista(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
const listaconcat = new Lista(["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
const listaconcat2 = new Lista(["u", "v", "w", "x", "y", "z"]);
let lista3 = new Lista([serie1, serie2, serie3]);

describe("Testeo de Listas", () => {
    
    describe("Clase Lista.", () => {
    
        it("Añadir un elemento", () => {
           lista1.add(11);
            expect(lista1.length()).to.be.equal(11);
        });
        it("Unir dos listas", () => { 
            lista1.append(listaunir);
            expect(lista1.length()).to.be.equal(20);
        });
        it("Concatenar varias listas", () => { 
            lista2.concatenate([listaconcat, listaconcat2]);
            expect(lista2.length()).to.be.equal(26);
        });
        it("Filtrar varias listas", () => { 
            lista1 = lista1.filter((elemento) => elemento > 5);
            expect(lista1.length()).to.be.equal(15);
        });
        it("Retornar el tamaño de una lista", () => { 
            
            expect(lista3.length()).to.be.equal(3);
        });
        it("Mapear una lista", () => { 
            lista1 = lista1.map((elemento) => elemento * 2);
            expect(lista1.getbyindex(0)).to.be.equal(12);
            expect(lista1.getbyindex(1)).to.be.equal(14);
            expect(lista1.getbyindex(lista1.length() - 1)).to.be.equal(40);
        });
        it("Reducir una lista a un acumulador", () => { 
            const acc = 0;
            expect(lista1.reduce((acc, elemento) => acc + elemento, acc)).to.be.equal(390);
        });
        it("Reverse a una lista", () => { 
            lista3 = lista3.reverse();
            expect(lista3.getbyindex(0)).to.be.deep.equal(serie3);
        });
        it("forEach de una lista", () => { 
            let acc = 0;
            lista1.forEach((elemento) => acc += elemento);
            expect(acc).to.be.equal(390);
        });
    });


});