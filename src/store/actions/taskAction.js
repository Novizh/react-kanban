import { SET_TASKS, SET_TASK_DETAIL } from '../actionTypes';
import axios from '../../api/config';
import toastr from 'toastr';
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

export function setTasks(data) {
    return {
        type: SET_TASKS,
        payload: data
    }
}

export function setTaskDetail(data) {
    return {
        type: SET_TASK_DETAIL,
        payload: data
    }
}

export function getTasks() {
    return (dispatch, getState) => {
        axios({
            method: 'GET',
            url: `/tasks`,
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then((response) => {
            dispatch(setTasks(response.data.data));
        })
        .catch((error) => {
            toastr.error('Something went wrong!');
            console.log(error);
        })
    }
}

export function createTask(payload) {
    return (dispatch, getState) => {
        axios({
            method: 'POST',
            url: `/tasks`,
            headers: {
                access_token: localStorage.getItem('access_token')
            },
            data: {
                title: payload.title,
                description: payload.description,
                category: payload.category
            }
        })
        .then((response) => {
            toastr.success('Task created successfully!');
            dispatch(getTasks());
        })
        .catch((error) => {
            if (error.message === 'Request failed with status code 400') {
                toastr.error('Please fill out the required fields!');
            } else {
                toastr.error('Something went wrong');
            }
            console.log(error);
        })
    }
}

export function getTaskById(id) {
    return (dispatch, getState) => {
        axios({
            method: 'GET',
            url: `/tasks/${id}`,
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then((response) => {
            dispatch(setTaskDetail(response.data.data));
        })
        .catch((error) => {
            toastr.error('Something went wrong');
            console.log(error);
        })
    }
}

export function updateTask(payload) {
    return (dispatch, getState) => {
        axios({
            method: 'PUT',
            url: `/tasks/${payload.id}`,
            headers: {
                access_token: localStorage.getItem('access_token')
            },
            data: {
                title: payload.title,
                description: payload.description
            }
        })
        .then((response) => {
            toastr.success('Task edited successfully!');
            dispatch(getTasks());
        })
        .catch((error) => {
            if (error.message === 'Request failed with status code 400') {
                toastr.error('Please fill out the required fields!');
            } else if (error.message === 'Request failed with status code 401') {
                toastr.error(`You can't edit a task that isn't yours!`);
            } else {
                toastr.error('Something went wrong');
            }
            console.log(error);
        })
    }
}

export function changeTaskCategory(payload) {
    return (dispatch, getState) => {
        axios({
            method: 'PATCH',
            url: `/tasks/${payload.id}`,
            headers: {
                access_token: localStorage.getItem('access_token')
            },
            data: {
                category: payload.category
            }
        })
        .then((response) => {
            toastr.success('Task category changed successfully!');
            dispatch(getTasks());
        })
        .catch((error) => {
            if (error.message === 'Request failed with status code 401') {
                toastr.error(`You can't change the category of a task that isn't yours!`);
            } else {
                toastr.error('Something went wrong');
            }
            console.log(error);
        })
    }
}

export function deleteTask(id) {
    return (dispatch, getState) => {
        axios({
            method: 'DELETE',
            url: `/tasks/${id}`,
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
        .then((response) => {
            toastr.success('Task deleted successfully!');
            dispatch(getTasks());
        })
        .catch((error) => {
            if (error.message === 'Request failed with status code 401'){
                toastr.error(`You can't delete a task that isn't yours!`);
            } else {
                toastr.error(`Something went wrong!`);    
            }
            console.log(error);
        })
    }
}