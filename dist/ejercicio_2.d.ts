export declare class Lista<T> {
    private lista;
    constructor(lista: T[]);
    add(elemento: T): void;
    getbyindex(index: number): T;
    append(lista: Lista<T>): Lista<T>;
    concatenate(listas: Lista<T>[]): Lista<T>;
    filter(predicado: (elemento: T) => boolean): Lista<T>;
    length(): number;
    map(funcion: (elemento: T) => T): Lista<T>;
    reduce(funcion: (acumulador: T, elemento: T) => T, acumulador: T): T;
    reverse(): Lista<T>;
    forEach(funcion: (elemento: T) => void): void;
}
