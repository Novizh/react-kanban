import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useHistory } from 'react-router-dom';
import axios from '../api/config';
import toastr from 'toastr';
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

function Register() {
    const history = useHistory();

    const [ newUser, setNewUser ] = useState({
        username: '',
        email: '',
        password: ''
    })

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setNewUser({
            ...newUser,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        // dispatch(register(newUser));
        axios({
            method: 'POST',
            url: `/register`,
            data: {
                username: newUser.username,
                email: newUser.email,
                password: newUser.password
            }
        })
        .then((response) => {
            toastr.success('Account register successful!');
            history.push(`/login`);
        })
        .catch((error) => {
            toastr.error('Please enter a valid data!');
        })
    }

    return(
        <React.Fragment>
            <Navbar />
            <section className="container my-5">
                <div className="card register">
                    <div className="card-header">
                        Register
                    </div>
                    <div className="card-body">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-labe  l">Full name</label>
                                <input onChange={(event) => handleChange(event)} name="username" type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input onChange={(event) => handleChange(event)} name="email" type="email" className="form-control" required />
                                <div className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input onChange={(event) => handleChange(event)} name="password" type="password" className="form-control" id="password" required />
                            </div>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Register;