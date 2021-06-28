function suma21(numero1: number, numero2: number, base: number): number {
    return numero1 * base;
};

const suma21flecha = (numero1: number, numero2?: number, base: number = 2): number => {
    return numero1 * base;
};

console.log(suma21flecha(10,5));


interface PersonajeTLOR {
    nombre: string;
    pv: number;
    mostrarHP: () =>void;
}

function curar21(personaje: PersonajeTLOR, curarX: number): void {
    personaje.pv += curarX;
}


const nuevoPersona: PersonajeTLOR = {
    nombre: 'xlr8',
    pv: 50,
    mostrarHP() {
        console.log(this.pv)
    }
}

curar21(nuevoPersona, 50);

nuevoPersona.mostrarHP()