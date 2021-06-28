import { isThisTypeNode } from "typescript"

interface SuperHeroes {
    nombre: string,
    edad: number,
    direccion : Direccion,
    mostrarDireccion: ()=> string ,
}

interface Direccion {
    calle: string,
    pais: string,
    ciudad: string, 
}

const superHeroes: SuperHeroes = {
    nombre : 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY',
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.calle + ', ' + this.direccion.ciudad + ', '
    }

}

/* Deconstruccion de objetos. */
const { nombre, edad, direccion : { calle, pais, ciudad} } = superHeroes;

console.log(calle)


/* Deconstruccion de arreglos */

const arreglo : String[] = ["Juan","Daniel","Fiallos"];

const [ , , p3] = arreglo;

console.log(p3)