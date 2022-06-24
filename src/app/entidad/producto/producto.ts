import { Pais } from "../pais/pais";

export class Producto {

    codigo!: number;
    descripcion!: string ;
    precio!: number;
    stock!:number;
    comestible: boolean = false;
    pais!: Pais;


    constructor(codigo: number, descripcion: string, precio: number, stock:number,comestible: boolean)   
    {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.comestible = comestible;
    }



}
