

// importar modulos
//import { TodoList } from './classes/todo-list.class';
//import { Todo } from './classes/todo.class';
import {Todo, TodoList} from './classes'; //busca el index.js de la carpeta classes por defecto
import { crearTodoHtml } from './js/componentes';
//import {saludar} from './js/componentes'; //se puede omitir el .js y quedar './js/componentes'
import './styles.css';

export const todoList = new TodoList();

//const tarea = new Todo('Aprender JavaScript');

// agrega la tarea con el método, al arreglo del objeto todoList
//todoList.nuevoTodo(tarea);

//console.log(todoList);

//crearTodoHtml(tarea); //agrega al html la tarea, mediante la función del componente.js de la carpeta js

//localStorage.setItem('mi-key','abc123');
//sessionStorage.setItem('mi-key','abc1234');

todoList.todos.forEach(todo=> crearTodoHtml(todo)); //muestra las tareas almacenadas en el localstorage