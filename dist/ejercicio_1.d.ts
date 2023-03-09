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
export declare abstract class BasicStreamableCollection<T> implements Streamable<T> {
    protected lista: T[];
    constructor(lista: T[]);
    addElement(element: T): void;
    abstract buscar(parametro: string, valor: string): T[];
    abstract getElements(): T[];
}
export type documental = {
    titulo: string;
    fecha: number;
    duracion: number;
    genero: string;
};
export declare class Documental extends BasicStreamableCollection<documental> {
    private documentales;
    constructor(documentales: documental[]);
    buscar(opcion: string, valor: string): documental[];
    getElements(): documental[];
}
export type serie = {
    titulo: string;
    fecha: number;
    duracion: number;
    genero: string;
    numeroTemporadas: number;
    numeroCapitulos: number;
};
export declare class Serie extends BasicStreamableCollection<serie> {
    private series;
    constructor(series: serie[]);
    buscar(opcion: string, valor: string): serie[];
    getElements(): serie[];
}
export type pelicula = {
    titulo: string;
    fecha: number;
    duracion: number;
    genero: string;
    clasificacion: string;
    director: string;
};
export declare class Pelicula extends BasicStreamableCollection<pelicula> {
    private peliculas;
    constructor(peliculas: pelicula[]);
    buscar(opcion: string, valor: string): pelicula[];
    getElements(): pelicula[];
}
