import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";

const todosSlice = createSlice({
    name: "todos",
    initialState:{
        entities:null,
    },
    reducers: {
        todosReceved(state, action){
            state.entities=action.payload
        },
        todosCreate(state, action){
            state.entities.push(action.payload)
        },
        todosRemoved(state, action){
            state.entities= state.entities.filter(
                (c) => c.id!==action.payload
            )
        },
        todosUpdate(state, action){
            state.entities[
                state.entities.findIndex((u) => u.id === action.payload.id)
            ] = action.payload;
        },
    }
})
const { reducer: todosReducer, actions} = todosSlice;
const { todosReceved, todosRemoved, todosCreate, todosUpdate } = actions
export const loadTodos = () => async (dispatch)=>{
    try{
        let content = [] 
        await axios.get(TODOS_URL).then((res) => content = res.data)
        dispatch(todosReceved(content))
    } catch(error){
        console.log(error.message)
    }
};
export const removeTodo = (todoId)=> (dispatch)=>{
    dispatch(todosRemoved(todoId))
}
export const createTodo = (payload)=> (dispatch)=>{
    dispatch(todosCreate(payload))
}
export const updateTodo = (payload)=> (dispatch)=>{
    dispatch(todosUpdate(payload))
}
export const getTodos = () => (state)=>state.totos.entities
export default todosReducer;