interface pasajero1 {
    nombre: string;
    hijos?: string[];
}


const pasajero10: pasajero1 = {
    nombre: 'Fernando',
}

const pasajero20: pasajero1 = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel'],
}


function imprimirHijos( pasajeros: pasajero1 ): void {

    const cuantosHijos = pasajeros.hijos?.length || 0;

    console.log( cuantosHijos );
    
}


imprimirHijos(pasajero10);