function classDecorator1<T extends { new (...args: any[]): {} }>(
    constructor: T
)   {
        return class extends constructor {
            newProperty = 'new property';
            hello = "override";
        }
    }

/* Expande la clase para añadir funcionalidades */
@classDecorator1
class MiSuperClase1 {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}


console.log( MiSuperClase1 );

const miClase1 = new MiSuperClase1();

console.log( miClase1.miPropiedad )