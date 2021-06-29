import { Producto, calculaISV1 } from './06-desestructuracion-funcion';
/* 
        ====Codigo de Typescript====
*/

const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100,
    },
    {
        desc: 'Telefono 2',
        precio: 150,
    },
];

const [total, isv] = calculaISV1( carritoCompras );

console.log('Total', total);
console.log('ISV', isv)