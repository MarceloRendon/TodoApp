

export class TodoList {


    constructor () {
        this.todos = [];
    }

    //Métodos

    nuevoTodo (todo) {
        // agregando la tarea al arreglo
        this.todos.push(todo);
    }

    eliminarTodo (id) {

    }

    marcarCompletado (id) {

        for (const todo of this.todos){
            if (todo.id == id){ //si el id todo que se evalua es igual al  id que se recibe
                todo.completado = !todo.completado; // el todo completado será igual a la negación del todo.completado
                break; //break para salir del ciclo
            }
        }
    }

    eliminarCompletados () {
        
    }

}