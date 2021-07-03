import { SET_TASKS, SET_TASK_DETAIL } from '../actionTypes';

const initialState = {
    data: [],
    categories: [
        {
            "id": 1,
            "title": "Backlog"
        },
        {
            "id": 2,
            "title": "Development"
        },
        {
            "id": 3,
            "title": "Production"
        },
        {
            "id": 4,
            "title": "Done"
        }
    ],
    taskDetails: {}
}

function taskReducer(state = initialState, action) {
    if (action.type === SET_TASKS) {
        return {...state, data: action.payload}
    } else if (action.type === SET_TASK_DETAIL) {
        return {...state, taskDetails: action.payload}
    }
    return state
}

export default taskReducer;