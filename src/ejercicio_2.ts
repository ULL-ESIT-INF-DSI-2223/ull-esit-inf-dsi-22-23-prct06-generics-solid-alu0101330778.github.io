//Lista

/**
 * Clase generica de datos que define una lista
 */
export class Lista<T> {
  private lista: T[] = [];

  constructor(lista: T[]) {
    this.lista = lista;
  }
  /**
   * Añade un elemento al final de la lista
   * @param elemento Elemento a añadir
   */
  public add(elemento: T): void {
    this.lista[this.length()] = elemento;
  }

  /**
   * Devuelve el elemento de la lista en la posición index
   * @param index Posición del elemento
   * @returns Elemento de la lista
   */
  public getbyindex(index: number): T {
    return this.lista[index];
  }

  /**
   * Une dos listas
   * @param lista Lista a unir
   * @returns Lista unida
   */
  public append(lista: Lista<T>): Lista<T> {
    for (let i = 0; i < lista.length(); i++) {
      this.add(lista.lista[i]);
    }
    return this;
  }
  /**
   * Une varias listas
   * @param listas Listas a unir
   * @returns Lista unida
   */
  public concatenate(listas: Lista<T>[]): Lista<T> {
    for (let i = 0; i < listas.length; i++) {
      this.append(listas[i]);
    }
    return this;
  }
  /**
   * Filtra la lista en base a una funcion predicado
   * @param predicado Funcion predicado
   * @returns Lista filtrada
   */
  public filter(predicado: (elemento: T) => boolean): Lista<T> {
    const listaFiltrada: T[] = [];
    const listaresult = new Lista(listaFiltrada);
    for (let i = 0; i < this.length(); i++) {
      if (predicado(this.lista[i])) {
        listaresult.add(this.lista[i]);
      }
    }
    return listaresult;
  }
  /**
   * Calcula el tamaño de la lista
   * @returns El tamaño de la lista
   */
  public length(): number {
    let flag = true;
    let contador = 0;
    while (flag) {
      if (this.lista[contador] != null) {
        contador++;
      } else {
        flag = false;
      }
    }
    return contador;
  }
  /**
   * Actua con una funcion sobre todos los parámetros de la lista y devuelve una lista con los resultados
   * @param funcion Funcion a aplicar
   * @returns Lista con los resultados
   */
  public map(funcion: (elemento: T) => T): Lista<T> {
    const listaMap: T[] = [];
    const listaresult = new Lista(listaMap);
    for (let i = 0; i < this.length(); i++) {
      listaresult.add(funcion(this.lista[i]));
    }
    return listaresult;
  }
  /**
   * Reduce la lista a un valor
   * @param funcion Funcion a aplicar
   * @returns Valor resultante
   */
  public reduce(funcion: (acumulador: T, elemento: T) => T, acumulador: T): T {
    for (let i = 0; i < this.length(); i++) {
      acumulador = funcion(acumulador, this.lista[i]);
    }
    return acumulador;
  }

  /**
   * Devuelve la lista invertida
   * @returns Lista invertida
   */
  public reverse(): Lista<T> {
    const listaReverse: T[] = [];
    const listaresult = new Lista(listaReverse);
    for (let i = this.length() - 1; i >= 0; i--) {
      listaresult.add(this.lista[i]);
    }
    return listaresult;
  }
  /**
   * Actua con una funcion sobre todos los parámetros de la lista
   * @param funcion Funcion a aplicar
   */
  public forEach(funcion: (elemento: T) => void): void {
    for (let i = 0; i < this.length(); i++) {
      funcion(this.lista[i]);
    }
  }
}
