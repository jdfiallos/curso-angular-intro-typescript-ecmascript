let arreglo: string[] = ["Arreglo", "de","strings"]

let arreglo2: (string | number)[] = ["El comandandte", "CR", 7]

arreglo2.push(10, "eterno")

console.log(arreglo2)


/* Objetos */

interface Personaje1 {
    nombre: string;
    edad: number;
    habilidades: string[];
    puebloNatal1?: string;
};

interface Rutash {
    url1: string;
    estado1: boolean;
};

const ruta1: Rutash = {
    url1: 'wwww.face.com',
    estado1: true,
};

const jdfiallos: Personaje1 = {
    nombre: 'Juan',
    edad: 95,
    habilidades: ["Volar","Super fuerza"],
};

jdfiallos.puebloNatal1 = 'Paleta';

console.log(jdfiallos.nombre);

console.table( jdfiallos )