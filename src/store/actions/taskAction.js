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
        action: SET_TASKS,
        payload: data
    }
}

export function setTaskDetail(data) {
    return {
        action: SET_TASK_DETAIL,
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
            // this.tasks = response.data.data
            console.log(response.data);
            // dispatch(setTasks(data))
        })
        .catch((error) => {
            toastr.error('Something went wrong!')
            console.log(error);
        })
    }
}