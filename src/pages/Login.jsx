import React from 'react';
import Navbar from '../components/Navbar';

function Login() {
    return (
        <React.Fragment>
            <Navbar />
            <section className="container my-5">
                <div className="card login">
                    <div className="card-header">
                        Login
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" name="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" name="password" className="form-control" required />
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