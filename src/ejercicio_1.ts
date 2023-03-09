//DSIflix

import * as Prompt from "prompt-sync";

const prompt = Prompt();

/**
 * Interfaz Streamable
 */

export interface Streamable<T> {
  buscar(parametro: string, valor: string): T[];
  addElement(element: T): void;
  getElements(): T[];
}

/**
 * Clase que que define una colección de streamable
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  /**
   * Constructor de la clase
   */
  constructor(protected lista: T[]) {}
  /**
   * Añade un elemento a la lista
   */
  addElement(element: T): void {
    this.lista.push(element);
  }
  /**
   * Busca un elemento de tipo parametro con valor valor
   */
  abstract buscar(parametro: string, valor: string): T[];
  abstract getElements(): T[];
}

/**
 * Tipo de dato documental
 */
export type documental = {
  titulo: string;
  fecha: number;
  duracion: number;
  genero: string;
};
/**
 * Clase que define una colección de documentales
 */
export class Documental extends BasicStreamableCollection<documental> {
  /**
   * Constructor de la lista
   * @param documentales Lista de documentales
   */
  constructor(private documentales: documental[]) {
    super(documentales);
  }
  /**
   * Buscar una lista de documentales que coincidan con el tipo y el valor.
   * @param opcion Tipo de parametro
   * @param valor Valor del parametro
   * @returns Lista de documentales
   */
  buscar(opcion: string, valor: string): documental[] {
    let resultado: documental[] = [];
    switch (opcion) {
      case "titulo":
        resultado = this.getElements().filter((aux) => aux.titulo == valor);
        break;
      case "fecha":
        resultado = this.getElements().filter((aux) => aux.fecha == +valor);
        break;
      case "genero":
        resultado = this.getElements().filter((aux) => aux.genero == valor);
        break;
      case "duracion":
        resultado = this.getElements().filter((aux) => aux.duracion == +valor);
        break;
      default:
        console.log("No existe");
    }
    return resultado;
  }

  /**
   * Retorna los documentales que hay en la lista
   */
  getElements(): documental[] {
    return this.documentales;
  }
}

/**
 * Tipo de dato serie
 */
export type serie = {
  titulo: string;
  fecha: number;
  duracion: number;
  genero: string;
  numeroTemporadas: number;
  numeroCapitulos: number;
};
/**
 * Clase que define una colección de series
 */
export class Serie extends BasicStreamableCollection<serie> {
  /**
   * Constructor de la lista
   * @param series Lista de series
   */
  constructor(private series: serie[]) {
    super(series);
  }
  /**
   * Buscar una lista de series que coincidan con el tipo y el valor.
   * @param opcion Tipo de parametro
   * @param valor Valor del parametro
   * @returns Lista de series
   */
  buscar(opcion: string, valor: string): serie[] {
    let resultado: serie[] = [];
    switch (opcion) {
      case "titulo":
        resultado = this.getElements().filter((aux) => aux.titulo == valor);
        break;
      case "fecha":
        resultado = this.getElements().filter((aux) => aux.fecha == +valor);
        break;
      case "genero":
        resultado = this.getElements().filter((aux) => aux.genero == valor);
        break;
      case "duracion":
        resultado = this.getElements().filter((aux) => aux.duracion == +valor);
        break;
      case "numeroTemporadas":
        resultado = this.getElements().filter(
          (aux) => aux.numeroTemporadas == +valor
        );
        break;
      case "numeroCapitulos":
        resultado = this.getElements().filter(
          (aux) => aux.numeroCapitulos == +valor
        );
        break;
      default:
        console.log("No existe");
    }
    return resultado;
  }

  /**
   * Retorna las series que hay en la lista
   */
  getElements(): serie[] {
    return this.series;
  }
}

/**
 * Tipo de dato pelicula
 */
export type pelicula = {
  titulo: string;
  fecha: number;
  duracion: number;
  genero: string;
  clasificacion: string;
  director: string;
};

/**
 * Clase que define una colección de peliculas
 */
export class Pelicula extends BasicStreamableCollection<pelicula> {
  /**
   * Constructor de la lista
   * @param peliculas Lista de peliculas
   */
  constructor(private peliculas: pelicula[]) {
    super(peliculas);
  }
  /**
   * Buscar una lista de peliculas que coincidan con el tipo y el valor.
   * @param opcion Tipo de parametro
   * @param valor Valor del parametro
   * @returns Lista de peliculas
   */
  buscar(opcion: string, valor: string): pelicula[] {
    let resultado: pelicula[] = [];
    switch (opcion) {
      case "titulo":
        resultado = this.getElements().filter((aux) => aux.titulo == valor);
        break;
      case "fecha":
        resultado = this.getElements().filter((aux) => aux.fecha == +valor);
        break;
      case "genero":
        resultado = this.getElements().filter((aux) => aux.genero == valor);
        break;
      case "duracion":
        resultado = this.getElements().filter((aux) => aux.duracion == +valor);
        break;
      case "clasificacion":
        resultado = this.getElements().filter(
          (aux) => aux.clasificacion == valor
        );
        break;
      case "director":
        resultado = this.getElements().filter((aux) => aux.director == valor);
        break;
      default:
        console.log("No existe");
    }
    return resultado;
  }
  /**
   * Retorna las peliculas que hay en la lista
   */
  getElements(): pelicula[] {
    return this.peliculas;
  }
}
