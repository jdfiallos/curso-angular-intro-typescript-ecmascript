
class PersonaNormal1 {
    
    constructor( public nombre: string, 
        public direccion: string,
    ) {}

}

class Heroe1 extends PersonaNormal1 {

    constructor( 
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string,
        ) {
        super( nombreReal, 'New York' );
    }

}

const ironman1 =  new Heroe1('Ironman', 45, 'Tony');

console.log(ironman1);