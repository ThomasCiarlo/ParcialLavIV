export class Producto {

    codigo!: number;
    descripcion!: string ;
    precio!: number;
    stock!:number;
    país!: string;
    comestible: boolean = false;


    constructor(codigo: number, descripcion: string, precio: number, stock:number, país: string,comestible: boolean)   
    {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.país = país;
        this.comestible = comestible;
    }



}
