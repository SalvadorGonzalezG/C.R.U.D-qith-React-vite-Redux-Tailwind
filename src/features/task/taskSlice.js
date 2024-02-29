// Slice de mis tasks: un slice es una parte de todo el estado.

import { createSlice } from '@reduxjs/toolkit'
// inicializando el estado:
const initialState = [
    {
        id: "1",
        title: "task 1",
        description: 'task 1 descriptión:',
        completed: false
    },
    {
        id: "2",
        title: "task 2",
        description: 'task 2 descriptión:',
        completed: false
    }
]

// Slice que sera exportado al store.
export const tasksSlice = createSlice({
    name: 'tasks', // nombre del slice
    initialState: initialState, // cunado mi app inicie su estado inicial sera un arreglo vacio.

    // Con este objeto podremos crear funciones para poder actualizar el initialState
    reducers: {
        addTask: (state, action) => { // añadimos una funcion que nos permita añadir algo
            state.push(action.payload)
        },
// definimos una funcion llamada deleteTask que toma el estado y una acion como parametros.
        deleteTask: (state, action) => {
// Busca la taera dentro del estado que coincida con el id proporcionado en la accion.
            const taskFound = state.find(task => task.id === action.payload)
            if(taskFound){ // comprobamos si seencontro la tarea
// Si se encontro la tarea, la elimina del estado utilizando splice
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})

// 
export const {addTask, deleteTask} = tasksSlice.actions

// Exportamos desde tasksSlice su reducer
export default tasksSlice.reducer
