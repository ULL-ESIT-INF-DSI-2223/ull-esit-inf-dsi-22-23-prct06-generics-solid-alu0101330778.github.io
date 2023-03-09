# Práctica 6: Clases e interfaces genéricas. Principios SOLID
## Desarrollo de sistemas informáticos

#### Curso 22/23
#### Jairo Alonso Abreu
#### Universidad de La Laguna

## Tareas previas.
Se ha aceptado la asginación de Github Classroom y se ha clonado el repositorio en local. Además se han instalado las dependencias de `Instanbul` y `coveralls` para poder realizar los tests y la cobertura de los mismos. Sin embargo debido a que se implementó casi que al terminar los ejercicios hay pocos builds.

```json
"coveralls": "^3.1.1",
"nyc": "^15.1.0",
```

## Ejercicios.
### [Ejercicio 1](/src/ejercicio_1.ts): DSIflix.

Para desarrollar el modelo de datos ha sido necesario crear la interfaz genérica `Streamable` que contiene los métodos `buscar`, `addElement` y `getElements`. Además se ha creado la clase abstracta `BasicStreamableCollection` que implementa la interfaz `Streamable` y que contiene un atributo `lista` de tipo `T[]`. Esta clase abstracta se ha utilizado para crear las clases `Documental`, `Serie` y `Pelicula` que heredan de ella y que implementan los métodos `buscar` y `getElements`.

#### Interface Streamable

La interfaz contiene los métodos `buscar`, `addElement` y `getElements` que se implementan en la clase abstracta `BasicStreamableCollection`.
- `buscar`: Recibe dos parametros, el primero es el atributo por el cual se va a buscar y el segundo es el valor del atributo.
- ``addElement`: Añade un elemento a la lista.
- `getElements`: Devuelve la lista de elementos.

```ts
export interface Streamable<T> {
    buscar(parametro: string, valor: string): T[];
    addElement(element: T): void;
    getElements(): T[];
}
```

#### Clase Abstracta BasicStreamableCollection

Esta clase define el atributo `lista` de tipo `T[]` y contiene los métodos `buscar`, `addElement` y `getElements` que se implementan en las clases `Documental`, `Serie` y `Pelicula`.
```ts
export abstract class BasicStreamableCollection<T> implements Streamable<T> {

    constructor(protected lista: T[]){}
    
    addElement(element: T): void {
        this.lista.push(element);
    }
    abstract buscar(parametro: string, valor: string): T[];
    abstract getElements(): T[];
}
```

#### Clase Documental

Para realizar la clase `Documental` se ha creado un tipo `documental` que contiene los atributos `titulo`, `fecha`, `duracion`, `genero`. Además se ha creado el constructor que recibe un array de `documental` y se le pasa al constructor de la clase abstracta `BasicStreamableCollection`. Por último se ha implementado el método `buscar` y `getElements`.
El método de `buscar` implementa un switch que recibe el parametro por el cual se va a buscar y el valor del atributo. Se filtra la lista de `documental` por el valor dado y se devuelve el resultado.

```ts
export type documental = {
    titulo: string;
    fecha: number;
    duracion: number;
    genero: string;
}

export class Documental extends BasicStreamableCollection<documental>{
    
    constructor (private documentales: documental[]) {
        super(documentales);
    }
    
    buscar(opcion: string, valor: string): documental[] {
        let resultado: documental[] = [];
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

    getElements(): documental[] {
        return this.documentales;
    }

}
```

#### Clase Serie

La clase `Serie` funciona de manera idéntica a la clase `Documental` pero con unos atributos diferentes. En este caso los atributos son `titulo`, `fecha`, `duracion`, `genero`, `numeroTemporadas` y `numeroCapitulos`.
```ts
export type serie = {
    titulo: string;
    fecha: number;
    duracion: number;
    genero: string;
    numeroTemporadas: number;
    numeroCapitulos: number;
}

export class Serie extends BasicStreamableCollection<serie>{
    
    constructor (private series: serie[]) {
        super(series);
    }
    
    buscar(opcion: string, valor: string): serie[] {
        let resultado: serie[] = [];
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

    getElements(): serie[] {
        return this.series;
    }

}
```

#### Clase Pelicula

La Clase `Pelicula` también funciona idéntica a las clases anteriores pero con unos atributos diferentes. En este caso los atributos son `titulo`, `fecha`, `duracion`, `genero`, `clasificacion` y `director`.

```ts
export type pelicula = {
    titulo: string;
    fecha: number;
    duracion: number;
    genero: string;
    clasificacion: string;
    director: string;
}

export class Pelicula extends BasicStreamableCollection<pelicula>{
    
    constructor (private peliculas: pelicula[]) {
        super(peliculas);
    }
    
    buscar(opcion: string, valor: string): pelicula[] {
        let resultado: pelicula[] = [];
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

    getElements(): pelicula[] {
        return this.peliculas;
    }

}
```

Una vez implementadas las clases se ha procedido a testear cada clase. Para ello se han instanciado los objetos de prueba.

```ts
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
```
Para probarlos se han usado todas los metodos posibles de cada clase.

Clase Pelicula
```ts
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
```

Clase Serie
```ts
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
```

Clase Documental
```ts
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
```

Y podemos ver como los tests pasan correctamente.
```
Testeo de DSIflix.
    Clase Pelicula.
      ✔ Añadir una nueva pelicula
      ✔ Buscar por titulo
      ✔ Buscar por fecha
      ✔ Buscar por duracion
      ✔ Buscar por genero
      ✔ Buscar por clasificacion
      ✔ Buscar por director
    Clase Serie.
      ✔ Añadir una nueva serie
      ✔ Buscar por titulo
      ✔ Buscar por fecha
      ✔ Buscar por duracion
      ✔ Buscar por genero
      ✔ Buscar por numero de temporadas
      ✔ Buscar por numero de capitulos
    Clase Documental.
      ✔ Añadir un nuevo documental
      ✔ Buscar por titulo
      ✔ Buscar por fecha
      ✔ Buscar por duracion
      ✔ Buscar por genero

  19 passing (81ms)
```

### [Ejercicio 2](/src/ejercicio_2.ts): Lista y operaciones.

Para implementar el ejercicio 2 se ha creado una clase `Lista` que contiene un array de elementos de tipo T. Se ha realizado sin la utilización de funciones de `Array.prototype` y se han desarrollado los siguietnes métodos:
- `add()`: Añade una elemento al final de la lista.
- `getbyindex()`: Devuelve el elemento de la lista que se encuentra en la posición indicada.
- `append()`: Añade todos los elementos de una lista a otra.
- `concatenate()`: Añade todos los elementos de un array de listas a otra.
- `filter()`: Filtra los elementos de una lista según un predicado.
- `length()`: Devuelve el número de elementos de la lista.
- `map()`: Aplica una función a todos los elementos de la lista.
- `reduce()`: Reduce la lista a un único valor.
- `reverse()`: Invierte el orden de los elementos de la lista.
- `forEach()`: Recorre todos los elementos de la lista.

```ts
export class Lista<T> {
    private lista: T[] = [];
    
    constructor(lista: T[]) {
        this.lista = lista;
    }
    public add(elemento: T): void {
        this.lista[this.length()] = elemento;
    }

    public getbyindex(index: number): T {
        return this.lista[index];
    }

    public append(lista: Lista<T>): Lista<T> {
        for (let i = 0; i < lista.length(); i++) {
            this.add(lista.lista[i]);
        }
        return this;
    }

    public concatenate(listas: Lista<T>[]): Lista<T> {
        for (let i = 0; i < listas.length; i++) {
            this.append(listas[i]);
        }
        return this;
    }
    
    public filter(predicado: (elemento: T) => boolean): Lista<T> {
        const listaFiltrada: T[] = [];
       const listaresult =  new Lista(listaFiltrada);
        for (let i = 0; i < this.length(); i++) {
            if (predicado(this.lista[i])) {
                listaresult.add(this.lista[i]);
            }
        }
        return listaresult;
    }
    
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
    
    public map(funcion: (elemento: T) => T): Lista<T> {
        const listaMap: T[] = [];
        const listaresult =  new Lista(listaMap);
        for (let i = 0; i < this.length(); i++) {
            listaresult.add(funcion(this.lista[i]));
        }
        return listaresult;
    }
    
    public reduce(funcion: (acumulador: T, elemento: T) => T, acumulador: T): T {
        for (let i = 0; i < this.length(); i++) {
            acumulador = funcion(acumulador, this.lista[i]);
        }
        return acumulador;
    }
    
    public reverse(): Lista<T> {
        const listaReverse: T[] = [];
        const listaresult =  new Lista(listaReverse);
        for (let i = this.length() - 1; i >= 0; i--) {
            listaresult.add(this.lista[i]);
        }
        return listaresult;
    }
    
    public forEach(funcion: (elemento: T) => void): void {
        for (let i = 0; i < this.length(); i++) {
            funcion(this.lista[i]);
        }
    }
}
```
Debido a la restriccion de no utilizar funciones de `Array.prototype` se han tenido que crear nuevos métodos que permitan realizar las operaciones de la lista. A continuación se muestran los tests que se han realizado para comprobar el correcto funcionamiento de los métodos.

Para ello ha sido necesario instanciar un par de listas de diferentes tipos de datos.
```ts
let lista1 = new Lista([1,2,3,4,5,6,7,8,9,10]);
const listaunir = new Lista([12,13,14,15,16,17,18,19,20]);
const lista2 = new Lista(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]);
const listaconcat = new Lista(["k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]);
const listaconcat2 = new Lista(["u", "v", "w", "x", "y", "z"]);
let lista3 = new Lista([serie1, serie2, serie3]);
```
Se ha aprovechado a probar también con la clase `Serie` que se ha creado en el ejercicio 1.

```ts
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
```

Se han realizado un test por cada método viendo como acepta todos los datos y han salido correctamente.
```
Testeo de Listas
    Clase Lista.
      ✔ Añadir un elemento
      ✔ Unir dos listas
      ✔ Concatenar varias listas
      ✔ Filtrar varias listas
      ✔ Retornar el tamaño de una lista
      ✔ Mapear una lista
      ✔ Reducir una lista a un acumulador
      ✔ Reverse a una lista
      ✔ forEach de una lista

    28 passing (81ms)
```

### [Ejercicio 3](/src/ejercicio_3.ts): Actualización Biblioteca Musical.

Para este ejercicio se han tenido que crear las clases `Discografia` y `Single`. Y se ha tenido que modificar las clases `Disco`, `Cancion`, `Artista` y `Biblioteca Musical`.

#### Clase Discografia

La Clase `Discografia` es una clase genérica que recibe un tipo que debe ser un `Disco` o un `Single`. Esta clase tiene los siguientes atributos:
- `discografia`: Lista de discos o singles.
Y los métodos:
- `getDiscografia()`: Devuelve la lista entera de discos o singles.
- `setDiscografia(discografia: T[])`: Establece la lista entera de discos o singles.
- `getdiscos()`: Devuelve la lista de discos.
- `getsingles()`: Devuelve la lista de singles.

```ts
class Discografia<T extends (Disco | Single)> {
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

    getdiscos(): Disco[] {
        const discos: Disco[] = [];
        this.discografia.forEach((element) => {
            if (element instanceof Disco) {
                discos.push(element);
            }
        });
        return discos;
    }

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
```

#### Clase Biblioteca Musical.

La Clase biblioteca musical es la que se ha tenido que modificar para que acepte los nuevos tipos de datos. Se han tenido que modificar los metodos de mostrar información por pantalla debido a que la forma de acceder a los discos y singles ha cambiado.

```ts
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

  mostrartabladisco(nombre: string) {
    for (let i = 0; i < this.artistas.length; i++) {
      for (
        let j = 0;
        j < this.getArtistas()[i].getDiscografia().getdiscos().length;
        j++
      ) {
        if (
          this.getArtistas()[i].getDiscografia().getdiscos()[j].getNombre() == nombre
        ) {
          console.table(this.getArtistas()[i].getDiscografia().getDiscografia()[j]);
          console.table(
            this.getArtistas()[i].getDiscografia().getdiscos()[j].get_elementos()
          );
        }
      }
    }
  }

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
            this
              .getArtistas()
              [i].getDiscografia().getDiscografia()[j].get_elementos()[k].getNombre() == nombre
          ) {
            console.table(
              this.getArtistas()[i].getDiscografia().getDiscografia()[j].get_elementos()[k]
            );
          }
        }
      }
    }
  }

}
```
#### Clase Artista

En la Clase Artista se ha tenido que cambiar el tipo de datos de discografía. Como se puede ver ahora es un objeto genérico que solo acepta discos o singles por lo que los métodos asociados a la discografía también han sido modificados.
```ts
class Artista {
  nombre: string;
  numeroOyentes: number;
  discografia: Discografia<Disco | Single>;

  constructor(nombre: string, numeroOyentes: number, discografia: Discografia<(Disco | Single)>) {
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
```

#### Clase Disco

Para la clase disco se han tenido que añadir dos métodos nuevos que son get_size y get_elementos. Estos métodos son necesarios para poder acceder a los elementos de la clase disco. Estos métodos también se han añadido a la clase single debido a la naturalez del programa, lo que nos facilita la búsqueda de información.
```ts
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
```

#### Clase Cancion

La Clase Cancion es la única que no se ha modificado.

```ts
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
```

#### Clase Single

Se ha creado la clase single que es bastante parecida a la clase cancion. La única diferencia es que la clase cancion tiene un atributo más que es el número de reproducciones y el atributo single. Se han tenido que añadir los métodos `get_size` y `get_elementos` para poder acceder a los elementos de la clase single.
```ts
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
```

Para poder testear el rpograma en tiempo real se ha creado un menu con un `while` que recoge las opciones de búsqueda y muestra los resultados.

```ts
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
```

Se han creado las siguientes instancias de objetos para comprobar que todo funciona correctamente.

```ts
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
```
Ejemplo: búsqueda por artista: `Artista2`

```
1. Mostrar toda la tabla
2. Mostrar tabla de un artista
3. Mostrar tabla de un disco
4. Mostrar tabla de una cancion
5. Salir
Introduce una opcion:2
Introduce el nombre del artista: Artista2
┌───────────────┬─────────────────────────────────────────────────┬────────────┐
│    (index)    │                   discografia                   │   Values   │
├───────────────┼─────────────────────────────────────────────────┼────────────┤
│    nombre     │                                                 │ 'Artista2' │
│ numeroOyentes │                                                 │    2000    │
│  discografia  │ [ [Disco], [Disco], [Single], ... 1 more item ] │            │
└───────────────┴─────────────────────────────────────────────────┴────────────┘
┌─────────────┬─────────┬─────────┬──────────┬──────────┐
│   (index)   │    0    │    1    │    2     │    3     │
├─────────────┼─────────┼─────────┼──────────┼──────────┤
│ discografia │ [Disco] │ [Disco] │ [Single] │ [Single] │
└─────────────┴─────────┴─────────┴──────────┴──────────┘
┌──────────────────┬───────────┬───────────┬───────────┬───────────┬───────────┬──────────┐
│     (index)      │     0     │     1     │     2     │     3     │     4     │  Values  │
├──────────────────┼───────────┼───────────┼───────────┼───────────┼───────────┼──────────┤
│      nombre      │           │           │           │           │           │ 'Disco3' │
│ fechaLanzamiento │           │           │           │           │           │          │
│    canciones     │ [Cancion] │ [Cancion] │ [Cancion] │ [Cancion] │ [Cancion] │          │
└──────────────────┴───────────┴───────────┴───────────┴───────────┴───────────┴──────────┘
┌──────────────────┬───────────┬───────────┬──────────┐
│     (index)      │     0     │     1     │  Values  │
├──────────────────┼───────────┼───────────┼──────────┤
│      nombre      │           │           │ 'Disco4' │
│ fechaLanzamiento │           │           │          │
│    canciones     │ [Cancion] │ [Cancion] │          │
└──────────────────┴───────────┴───────────┴──────────┘
┌──────────┬───────┬───────────┐
│ (index)  │   0   │  Values   │
├──────────┼───────┼───────────┤
│  nombre  │       │ 'Single3' │
│ duracion │       │     5     │
│ generos  │ 'Pop' │           │
└──────────┴───────┴───────────┘
┌──────────┬───────┬───────────┐
│ (index)  │   0   │  Values   │
├──────────┼───────┼───────────┤
│  nombre  │       │ 'Single4' │
│ duracion │       │     6     │
│ generos  │ 'Pop' │           │
└──────────┴───────┴───────────┘
```

Ejemplo: búsqueda por disco: `Disco3`

```
1. Mostrar toda la tabla
2. Mostrar tabla de un artista
3. Mostrar tabla de un disco
4. Mostrar tabla de una cancion
5. Salir
Introduce una opcion:3
Introduce el nombre del disco: Disco3
┌──────────────────┬───────────┬───────────┬───────────┬───────────┬───────────┬──────────┐
│     (index)      │     0     │     1     │     2     │     3     │     4     │  Values  │
├──────────────────┼───────────┼───────────┼───────────┼───────────┼───────────┼──────────┤
│      nombre      │           │           │           │           │           │ 'Disco3' │
│ fechaLanzamiento │           │           │           │           │           │          │
│    canciones     │ [Cancion] │ [Cancion] │ [Cancion] │ [Cancion] │ [Cancion] │          │
└──────────────────┴───────────┴───────────┴───────────┴───────────┴───────────┴──────────┘
┌─────────┬─────────────┬──────────┬─────────────┬────────┬──────────────────────┐
│ (index) │   nombre    │ duracion │   generos   │ single │ numeroReproducciones │
├─────────┼─────────────┼──────────┼─────────────┼────────┼──────────────────────┤
│    0    │ 'Cancion1'  │    3     │ [ 'Rock' ]  │  true  │         100          │
│    1    │ 'Cancion2'  │    4     │ [ 'Rock' ]  │  true  │         200          │
│    2    │ 'Cancion8'  │    10    │ [ 'Salsa' ] │  true  │         800          │
│    3    │ 'Cancion9'  │    11    │ [ 'Rock' ]  │  true  │         900          │
│    4    │ 'Cancion10' │    12    │ [ 'Rock' ]  │  true  │         1000         │
└─────────┴─────────────┴──────────┴─────────────┴────────┴──────────────────────┘
```
Ejemplo: búsqueda por Cancion: `Cancion7` y `Single2`
Cancion7
```
1. Mostrar toda la tabla
2. Mostrar tabla de un artista
3. Mostrar tabla de un disco
4. Mostrar tabla de una cancion
5. Salir
Introduce una opcion:4
Introduce el nombre de la cancion: Cancion7
┌──────────────────────┬────────┬────────────┐
│       (index)        │   0    │   Values   │
├──────────────────────┼────────┼────────────┤
│        nombre        │        │ 'Cancion7' │
│       duracion       │        │     9      │
│       generos        │ 'Rock' │            │
│        single        │        │    true    │
│ numeroReproducciones │        │    700     │
└──────────────────────┴────────┴────────────┘
```
Single2
```
1. Mostrar toda la tabla
2. Mostrar tabla de un artista
3. Mostrar tabla de un disco
4. Mostrar tabla de una cancion
5. Salir
Introduce una opcion:4
Introduce el nombre de la cancion: Single2
┌──────────┬─────────┬───────────┐
│ (index)  │    0    │  Values   │
├──────────┼─────────┼───────────┤
│  nombre  │         │ 'Single2' │
│ duracion │         │     4     │
│ generos  │ 'Salsa' │           │
└──────────┴─────────┴───────────┘
```
No se han usado tests para este ejercicio debido a la natrualeza del menú.

## Conclusiones
Al principio las interfaces y clases geneéricas pueden resultar difíciles de entender o de implementar, sin embargo me han servido estas practicas para entender mejor el funcionamiento de estas y como se pueden implementar en un proyecto. Además ha sido interesante ver como funciona el cubrimiento del código con `coveralls` e `instabul`

## Referencias
- [Biblioteca Musical Practica 5](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct05-objects-classes-interfaces-alu0101330778.github.io/blob/main/src/ejercicio-1.ts)
- [Práctica 6](https://ull-esit-inf-dsi-2223.github.io/prct06-generics-solid/)
- [Página web de Typedoc](https://typedoc.org/)
- [Repositorio de Github](https://github.com/ULL-ESIT-INF-DSI-2223/ull-esit-inf-dsi-22-23-prct06-generics-solid-alu0101330778.github.io)