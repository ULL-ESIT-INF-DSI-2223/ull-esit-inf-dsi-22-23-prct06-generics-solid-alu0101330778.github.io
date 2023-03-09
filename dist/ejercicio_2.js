"use strict";
//Lista
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lista = void 0;
class Lista {
    lista = [];
    constructor(lista) {
        this.lista = lista;
    }
    add(elemento) {
        this.lista[this.length()] = elemento;
    }
    getbyindex(index) {
        return this.lista[index];
    }
    append(lista) {
        for (let i = 0; i < lista.length(); i++) {
            this.add(lista.lista[i]);
        }
        return this;
    }
    concatenate(listas) {
        for (let i = 0; i < listas.length; i++) {
            this.append(listas[i]);
        }
        return this;
    }
    filter(predicado) {
        const listaFiltrada = [];
        const listaresult = new Lista(listaFiltrada);
        for (let i = 0; i < this.length(); i++) {
            if (predicado(this.lista[i])) {
                listaresult.add(this.lista[i]);
            }
        }
        return listaresult;
    }
    length() {
        let flag = true;
        let contador = 0;
        while (flag) {
            if (this.lista[contador] != null) {
                contador++;
            }
            else {
                flag = false;
            }
        }
        return contador;
    }
    map(funcion) {
        const listaMap = [];
        const listaresult = new Lista(listaMap);
        for (let i = 0; i < this.length(); i++) {
            listaresult.add(funcion(this.lista[i]));
        }
        return listaresult;
    }
    reduce(funcion, acumulador) {
        for (let i = 0; i < this.length(); i++) {
            acumulador = funcion(acumulador, this.lista[i]);
        }
        return acumulador;
    }
    reverse() {
        const listaReverse = [];
        const listaresult = new Lista(listaReverse);
        for (let i = this.length() - 1; i >= 0; i--) {
            listaresult.add(this.lista[i]);
        }
        return listaresult;
    }
    forEach(funcion) {
        for (let i = 0; i < this.length(); i++) {
            funcion(this.lista[i]);
        }
    }
}
exports.Lista = Lista;
