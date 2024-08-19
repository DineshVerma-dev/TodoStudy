import axios from 'axios';
import { addNewTodo, getAllTodo, toggletodo, updatetodo, deletetodo } from "../reducer/todosReducer"; // Import the actions from the slice

// const API_URL = 'https://todoapp-sooty-eight.vercel.app';

export const addNewTodoAsync = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`/todos`, { data });
        dispatch(addNewTodo(res.data)); 
    } catch (error) {
        console.error('Error in addNewTodo API', error.message);
        // Optionally, handle the error in your UI
    }
};

export const getAllTodosAsync = () => async (dispatch) => {
    try {
        const res = await axios.get(`/todos`);
        dispatch(getAllTodo(res.data)); 
    } catch (error) {
        console.error('Error in calling getAllTodos API', error.message);
        // Optionally, handle the error in your UI
    }
};

export const toggletodoAsync = (id) => async (dispatch) => {
    try {
        const res = await axios.patch(`/todos/${id}/toggle`); // Make sure your backend handles this endpoint
        dispatch(toggletodo(res.data)); 
    } catch (error) {
        console.error('Error in calling toggletodo API', error.message);
        // Optionally, handle the error in your UI
    }
};

export const updatetodoAsync = (id, data) => async (dispatch) => {
    try {
        const res = await axios.patch(`/todos/${id}`, { data });
        dispatch(updatetodo(res.data));  // Dispatch the updated todo to the store
    } catch (error) {
        console.error('Error in calling updatetodoAsync API', error.message);
        // Optionally, handle the error in your UI
    }
};

export const deletetodoAsync = (id) => async (dispatch) => {
    try {
        await axios.delete(`/todos/${id}`);
        dispatch(deletetodo({ id }));  // Assuming you only need the ID to remove the item from the store
    } catch (error) {
        console.error('Error in calling deletetodoAsync API', error.message);
        // Optionally, handle the error in your UI
    }
};
