





export class Todo {

    static fromJson ({id, tarea, completado, creado}){ 
        //esto permite recuperar lo almacenado en el json y transformarlo en instancias
        // para usar sus propios métodos sin problemas

        const tempTodo = new Todo(tarea);

        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;

        return tempTodo;
    }
    constructor (tarea) {

        this.tarea = tarea;

        this.id = new Date().getTime(); // id que se genera obteniendo la hora horaminutosegundomilisegundo

        this.completado = false;

        this.creado = new Date();

    }

}