import { Todo } from './todo.class';

export class TodoList {


    constructor () {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    //Métodos

    nuevoTodo (todo) {
        // agregando la tarea al arreglo
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo (id) {
        this.todos = this.todos.filter(todo => todo.id != id); //va a regresar un nuevo arreglo sobre escribiendo los valores en this.todos
        this.guardarLocalStorage();
    }

    marcarCompletado (id) {

        for (const todo of this.todos){
            if (todo.id == id){ //si el id todo que se evalua es igual al  id que se recibe
                todo.completado = !todo.completado; // el todo completado será igual a la negación del todo.completado
                this.guardarLocalStorage();
                break; //break para salir del ciclo
            }
        }
    }

    eliminarCompletados () {
        
        this.todos = this.todos.filter(todo => !todo.completado); //todos los todos que no estén completados
        this.guardarLocalStorage();
        
    }

    guardarLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage(){
        if(localStorage.getItem('todo')){
            this.todos = JSON.parse(localStorage.getItem('todo'));
            //console.log('Cargar todos: ',this.todos);
        } else {
            this.todos = [];
        }

        this.todos = this.todos.map(obj => Todo.fromJson(obj) ); //por lo de objeto del json  a instancia 
    }

}