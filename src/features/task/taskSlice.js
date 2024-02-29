// Slice de mis tasks: un slice es una parte de todo el estado.

import { createSlice } from '@reduxjs/toolkit'

// Slice que sera exportado al store.
export const tasksSlice = createSlice({
    name: 'tasks', // nombre del slice
    initialState: [], // cunado mi app inicie su estado inicial sera un arreglo vacio.

    // Con este objeto podremos crear funciones para poder actualizar el initialState
    reducers: {

    }
})

// Exportamos desde tasksSlice su reducer
export default tasksSlice.reducer
