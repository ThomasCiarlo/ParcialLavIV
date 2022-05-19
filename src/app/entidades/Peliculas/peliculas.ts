export class Peliculas {

    id!: number;
    Nombre!: string;
    tipo!: string;
    fecha_de_estreno!: number;
    cantidad_de_público!: number;
    Foto_de_la_película!: string;
    actor!: string;
    imagen!: string;

    constructor(id: number,nombre: string,tipo: string, actor: string,imagen: string)
    {
        this.id = id;
        this.Nombre = nombre;
        this.tipo = tipo;
        this.fecha_de_estreno = Date.now();
        this.actor= actor;
        this.imagen = imagen;
    }
}
