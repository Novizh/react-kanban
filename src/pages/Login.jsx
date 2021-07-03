import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from '../api/config';
import toastr from 'toastr';
import { getTasks } from '../store/actions/taskAction';
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-bottom-right",
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

function Login() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setUser({
            ...user,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        axios({
            method: 'POST',
            url: `/login`,
            data: {
                email: user.email,
                password: user.password
            }
        })
        .then((response) => {
            toastr.success('Login successful!');
            localStorage.setItem('access_token', response.data.access_token);
            dispatch(getTasks());
            history.push(`/`);
        })
        .catch((error) => {
            toastr.error('Email or password incorrect!');
        })
    }

    return (
        <React.Fragment>
            <Navbar />
            <section className="container my-5">
                <div className="card login">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-body">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input onChange={(event) => handleChange(event)} type="email" name="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onChange={(event) => handleChange(event)} type="password" name="password" className="form-control" required />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3">Login</button>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Login;