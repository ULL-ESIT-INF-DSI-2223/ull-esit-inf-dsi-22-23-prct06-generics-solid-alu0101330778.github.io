//Ejercicio 1
//Biblioteca Musical

import * as Prompt from "prompt-sync";

const prompt = Prompt();

/**
 * Clase BibliotecaMusical
 * @class BibliotecaMusical
 * @atribute artistas
 */
class BibliotecaMusical {
  artistas: Artista[];

  constructor(artistas: Artista[]) {
    this.artistas = artistas;
  }

  getArtistas(): Artista[] {
    return this.artistas;
  }

  setArtistas(artistas: Artista[]): void {
    this.artistas = artistas;
  }

  /**
   * Muestra la Biblioteca Musical entera
   */
  mostrartablaentera() {
    for (let i = 0; i < this.getArtistas().length; i++) {
      console.table(this.getArtistas()[i]);
      console.table(this.getArtistas()[i].getDiscografia().getDiscografia());
      for (
        let j = 0;
        j < this.getArtistas()[i].getDiscografia().getDiscografia().length;
        j++
      ) {
        console.table(
          this.getArtistas()[i].getDiscografia().getDiscografia()[j]
        );
      }
    }
  }
  /**
   * Muestra la tabla completa de un Artista
   * @param nombre Nombre del artista
   */
  mostrartablaartista(nombre: string) {
    for (let i = 0; i < this.artistas.length; i++) {
      if (this.getArtistas()[i].getNombre() == nombre) {
        console.table(this.getArtistas()[i]);
        console.table(this.getArtistas()[i].getDiscografia());
        for (
          let j = 0;
          j < this.getArtistas()[i].getDiscografia().getDiscografia().length;
          j++
        ) {
          console.table(
            this.getArtistas()[i].getDiscografia().getDiscografia()[j]
          );
        }
      }
    }
  }
  /**
   * Muestra la tabla completa de un disco
   * @param nombre Nombre del disco
   */
  mostrartabladisco(nombre: string) {
    for (let i = 0; i < this.artistas.length; i++) {
      for (
        let j = 0;
        j < this.getArtistas()[i].getDiscografia().getdiscos().length;
        j++
      ) {
        if (
          this.getArtistas()[i].getDiscografia().getdiscos()[j].getNombre() ==
          nombre
        ) {
          console.table(
            this.getArtistas()[i].getDiscografia().getDiscografia()[j]
          );
          console.table(
            this.getArtistas()
              [i].getDiscografia()
              .getdiscos()
              [j].get_elementos()
          );
        }
      }
    }
  }

  /**
   * Muestra la tabla completa de una cancion
   * @param nombre Nombre de la cancion
   */
  mostrartablacancion(nombre: string) {
    for (let i = 0; i < this.artistas.length; i++) {
      for (
        let j = 0;
        j < this.getArtistas()[i].getDiscografia().getDiscografia().length;
        j++
      ) {
        for (
          let k = 0;
          k <
          this.getArtistas()[i].getDiscografia().getDiscografia()[j].get_size();
          k++
        ) {
          if (
            this.getArtistas()
              [i].getDiscografia()
              .getDiscografia()
              [j].get_elementos()
              [k].getNombre() == nombre
          ) {
            console.table(
              this.getArtistas()
                [i].getDiscografia()
                .getDiscografia()
                [j].get_elementos()[k]
            );
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
  nombre: string;
  numeroOyentes: number;
  discografia: Discografia<Disco | Single>;

  constructor(
    nombre: string,
    numeroOyentes: number,
    discografia: Discografia<Disco | Single>
  ) {
    this.nombre = nombre;
    this.numeroOyentes = numeroOyentes;
    this.discografia = discografia;
  }

  getNombre(): string {
    return this.nombre;
  }

  getNumeroOyentes(): number {
    return this.numeroOyentes;
  }

  getDiscografia(): Discografia<Disco | Single> {
    return this.discografia;
  }

  setnombre(nombre: string): void {
    this.nombre = nombre;
  }

  setNumeroOyentes(numeroOyentes: number): void {
    this.numeroOyentes = numeroOyentes;
  }

  setDiscografia(discografia: Discografia<Disco | Single>): void {
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
  nombre: string;
  fechaLanzamiento: Date;
  canciones: Cancion[];

  constructor(nombre: string, fechaLanzamiento: Date, canciones: Cancion[]) {
    this.nombre = nombre;
    this.fechaLanzamiento = fechaLanzamiento;
    this.canciones = canciones;
  }

  get_size(): number {
    return this.canciones.length;
  }
  get_elementos(): Cancion[] {
    return this.canciones;
  }

  getNombre(): string {
    return this.nombre;
  }

  getFechaLanzamiento(): Date {
    return this.fechaLanzamiento;
  }

  getCanciones(): Cancion[] {
    return this.canciones;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setFechaLanzamiento(fechaLanzamiento: Date): void {
    this.fechaLanzamiento = fechaLanzamiento;
  }

  setCanciones(canciones: Cancion[]): void {
    this.canciones = canciones;
  }

  getnumcanciones(): number {
    return this.canciones.length;
  }

  getDuracionTotal(): number {
    let duracionTotal = 0;
    this.canciones.forEach((cancion) => {
      duracionTotal += cancion.getDuracion();
    });
    return duracionTotal;
  }

  getReproduccionesTotales(): number {
    let reproduccionesTotales = 0;
    this.canciones.forEach((cancion) => {
      reproduccionesTotales += cancion.getNumeroReproducciones();
    });
    return reproduccionesTotales;
  }
}

/**
 * Clase Single
 * @class Single
 * @atribute Nombre
 * @atribute duracion
 * @atribute generos
 */
class Single {
  nombre: string;
  duracion: number;
  generos: string[];

  constructor(nombre: string, duracion: number, generos: string[]) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.generos = generos;
  }
  get_size(): number {
    return 1;
  }

  get_elementos(): Single[] {
    return [this];
  }

  getNombre(): string {
    return this.nombre;
  }

  getDuracion(): number {
    return this.duracion;
  }

  getGeneros(): string[] {
    return this.generos;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setDuracion(duracion: number): void {
    this.duracion = duracion;
  }

  setGeneros(generos: string[]): void {
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
  nombre: string;
  duracion: number;
  generos: string[];
  single: boolean;
  numeroReproducciones: number;

  constructor(
    nombre: string,
    duracion: number,
    generos: string[],
    single: boolean,
    numeroReproducciones: number
  ) {
    this.nombre = nombre;
    this.duracion = duracion;
    this.generos = generos;
    this.single = single;
    this.numeroReproducciones = numeroReproducciones;
  }

  getNombre(): string {
    return this.nombre;
  }

  getDuracion(): number {
    return this.duracion;
  }

  getGeneros(): string[] {
    return this.generos;
  }

  getSingle(): boolean {
    return this.single;
  }

  getNumeroReproducciones(): number {
    return this.numeroReproducciones;
  }

  setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  setDuracion(duracion: number): void {
    this.duracion = duracion;
  }

  setGeneros(generos: string[]): void {
    this.generos = generos;
  }

  setSingle(single: boolean): void {
    this.single = single;
  }

  setNumeroReproducciones(numeroReproducciones: number): void {
    this.numeroReproducciones = numeroReproducciones;
  }
}

/**
 * Clase Discografia
 * @class Discografia
 * @atribute Discografia: Colección de discos y/o singles
 */
class Discografia<T extends Disco | Single> {
  discografia: T[];

  constructor(discografia: T[]) {
    this.discografia = discografia;
  }

  getDiscografia(): T[] {
    return this.discografia;
  }

  setDiscografia(discografia: T[]): void {
    this.discografia = discografia;
  }
  /**
   * Devuelve solo los discos de la discografía
   */
  getdiscos(): Disco[] {
    const discos: Disco[] = [];
    this.discografia.forEach((element) => {
      if (element instanceof Disco) {
        discos.push(element);
      }
    });
    return discos;
  }
  /**
   * Devuelve solo los singles de la discografia
   */
  getsingles(): Single[] {
    const singles: Single[] = [];
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
  console.log(
    "1. Mostrar toda la tabla\n2. Mostrar tabla de un artista\n3. Mostrar tabla de un disco\n4. Mostrar tabla de una cancion\n5. Salir"
  );
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
