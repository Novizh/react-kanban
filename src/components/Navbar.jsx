import React from 'react';
import { Link, useHistory } from 'react-router-dom';
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

function Navbar() {
    const history = useHistory();

    function handleLogout() {
        localStorage.clear();
        toastr.success('Logout successful!');
        history.push(`/login`);
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark text-light bg-custom shadow">
            <div className="container-fluid">
                <a className="navbar-brand mx-1" href="/#">Kanban</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {
                            localStorage.getItem('access_token') ? (
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link className="nav-link btn btn-custom text-light mx-1" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn btn-custom text-light mx-1" href="/#" onClick={() => handleLogout()}>Logout</a>
                                    </li>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <li  className="nav-item">
                                        <Link className="nav-link btn btn-custom text-light mx-1" to="/register">Register</Link>
                                    </li>
                                    <li  className="nav-item">
                                        <Link className="nav-link btn btn-custom text-light mx-1" to="/login">Login</Link>
                                    </li>
                                </React.Fragment>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;