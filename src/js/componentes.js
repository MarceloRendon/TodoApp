// importaciones
import { Todo } from "../classes";

import { todoList} from "../index";

// referencias en el HTML

const divTodoList = document.querySelector('.todo-list'); //todo-list es una clase del html index principal

const txtInput = document.querySelector('.new-todo'); //apunta a la clase new-todo del input ubicado en el index.html

const btnBorrarTodos = document.querySelector('.clear-completed'); //apunta al boton que dice eliminar completados

const ulFiltros = document.querySelector('.filters'); // seleccionar los filtros

const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {

    const htmlTodo = `
    <li class="${(todo.completado) ? 'completed' : '' }" data-id="${todo.id}">
						<div class="view">
							<input class="toggle" type="checkbox" ${(todo.completado) ? 'checked' : ''}>
							<label>${todo.tarea}</label>
							<button class="destroy"></button>
						</div>
						<input class="edit" value="Create a TodoMVC template">
	</li>    
    `;
    const div = document.createElement('div'); // crea un elemento div html

    div.innerHTML = htmlTodo; // el inner html inyecta el código de la constante htmlTodo al div

    divTodoList.append(div.firstElementChild); //el append agrega la constante div al documento
                        //extrae el primer elemento

    return div.firstElementChild; //retorna el div
}


// eventos

txtInput.addEventListener('keyup', (event) => {
    

    if (event.code === "Enter" && txtInput.value.length > 0) { //captura cuando presiona enter y ingresa en el if
        // el txtInput.value.length > 0 evita que entre al if si el largo del string en el input es 0
        const nuevoTodo = new Todo(txtInput.value);
        //console.log(txtInput.value);
        todoList.nuevoTodo(nuevoTodo); //llamando el método del todoList y se le agrega el nuevo todo

        crearTodoHtml(nuevoTodo); //crea el todo para visualizarlo en el html
        txtInput.value = ''; // una vez que se apreta enter, el txt input vuelve a estar vacío
        console.log(todoList);
    }

});

divTodoList.addEventListener('click', (event) => {
    //console.log('Click');
    //console.log(event.target.localName);
    const nombreElemento = event.target.localName; //input, label o button
    const todoElemento = event.target.parentElement.parentElement; //permite tener la referencia al <li>

    const todoId = todoElemento.getAttribute('data-id'); //obtiene el id

    if (nombreElemento.includes('input')) { // hizo click en el check
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed'); //permite que se tache la tarea marcada en el checkbox
    } else if (nombreElemento.includes('button')) { // hizo click en la X, hay que borrar el todo
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento); // eliminando el elemento html
    }


    //console.log(todoList);
});


btnBorrarTodos.addEventListener('click', () => {
    todoList.eliminarCompletados();

    for (let i = divTodoList.children.length-1; i>=0; i--){ //for inverso

        const elemento = divTodoList.children[i]; //recupera todo el elemento <li>

        if(elemento.classList.contains('completed')){ //si la clase contiene completed (completado)
            divTodoList.removeChild(elemento); //lo remueve
        }

    }

});



ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    if( !filtro ){ return; }

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');

    for( const elemento of divTodoList.children ) {

        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {

            case 'Pendientes':
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;

        }


    }



});