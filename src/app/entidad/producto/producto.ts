export class Producto {

    codigo!: number;
    descripcion!: string ;
    precio!: number;
    stock!:number;
    paiss!: string;
    comestible: boolean = false;


    constructor(codigo: number, descripcion: string, precio: number, stock:number, pais: string,comestible: boolean)   
    {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.paiss = pais;
        this.comestible = comestible;
    }



}
