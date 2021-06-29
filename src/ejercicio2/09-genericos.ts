function queTipoSoy1<T>( argumento: T ) {
    return argumento;
}

let soyString1 =  queTipoSoy1('Hola Mundo');

let soyNumero1 =  queTipoSoy1<number>( 100 );

let arreglo1 =  queTipoSoy1( [100, 2, 3, 4, 5 ]);

let explicito1 =  queTipoSoy1<string>( 'Hola Mundo' );

/* Se usa cuando se ocupan varios valores, pero se mantiene tipado y entendible. */