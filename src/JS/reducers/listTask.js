// IMPORTATION

import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../actionTypes/listTask";

// INITIAL STATE
const initialState = {
    toggle: false,
    listTasks: [
        {id: Math.random(), text:"Task 1 ", isDone: false},
        {id: Math.random(), text:"Task 2 ", isDone: false}
    ]
}

// PURE FUNCTION
const listReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK: return {...state, listTasks: [...state.listTasks, payload]}
        case DELETE_TASK: return {...state, listTasks: state.listTasks.filter(el => el.id !== payload)}
        case DONE_TASK: return {...state, listTasks: state.listTasks.map((el) => (el.id === payload ? {...el, isDone: !el.isDone}: el))}
        case EDIT_TASK: return {...state, listTasks: state.listTasks.map((el) => (el.id === payload.id ? {...el, text: payload.newTask}: el))}
        default:
            return state
    }
}

// EXPORTATION

export default listReducer;