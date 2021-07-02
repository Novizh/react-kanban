import React from 'react';
import Navbar from '../components/Navbar';

function Register() {
    return(
        <React.Fragment>
            <Navbar />
            <section className="container my-5">
                <div className="card register">
                    <div className="card-header">
                        Register
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="username" className="form-labe  l">Full name</label>
                                <input name="username" type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input name="email" type="email" className="form-control" required />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input name="password" type="password" className="form-control" id="password" required />
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