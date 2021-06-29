
export interface Producto {
    desc: string,
    precio: number
}

const telefono: Producto = {
    desc: 'iphone',
    precio: 150,
}

const tableta: Producto = {
    desc: 'Ipad Mini',
    precio: 150,
}


export function calculaISV1( productos: Producto[] ): number[] {
    let total = 0;
    /* A traves de llaves podemos extaer exactamente el dato del objeto. */
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [ total, total * 0.15 ] ;
    
}


/* const articulos = [ telefono, tableta ];

const [ total, isv ] = calculaISV1( articulos );

console.log('ISV: ', total);
console.log('Total', isv); */