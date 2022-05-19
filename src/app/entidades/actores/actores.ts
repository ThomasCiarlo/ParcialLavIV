export class Actores {

    nombre!: string;
    apellido!: string;
    nacionalidad!: string;

    constructor(nombre: string, apellido: string, bandera: string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = bandera;
    }

}
