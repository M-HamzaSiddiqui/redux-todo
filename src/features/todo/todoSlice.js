import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text:"hello"}],
    btnText:"AddTodo",
    selectedId:"1"

}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, input} = action.payload;
             const todo = {
                id,
                text: input
             }  
             console.log(todo.id)
            state.todos = state.todos.map((prevTodo) => prevTodo.id === state.selectedId ? todo : prevTodo)
             console.log("updated", input)
             console.log(state.todos)
          
        },
        changeText: (state, action) => {
            state.btnText = action.payload
        },
        changeId: (state, action) => {
            state.selectedId = action.payload
        }
    }
})

export const {addTodo, removeTodo, updateTodo, changeText, changeId} = todoSlice.actions

export default todoSlice.reducer