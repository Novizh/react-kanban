import React from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import EditForm from './pages/EditForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouteGuard from './components/RouteGuard';

function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <RouteGuard exact path ="/">
                        <Home />
                    </RouteGuard>
                    <Route path ="/tasks/:id">
                        <EditForm />
                    </Route>
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default App;
