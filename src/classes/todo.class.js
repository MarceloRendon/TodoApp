





export class Todo {

    constructor (tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime(); // id que se genera obteniendo la hora horaminutosegundomilisegundo

        this.completado = false;

        this.creado = new Date();

    }

}