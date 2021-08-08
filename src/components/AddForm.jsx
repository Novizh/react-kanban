import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTask } from '../store/actions/taskAction';

function AddForm(props) {
    const dispatch = useDispatch();

    const [ showForm, setShowForm ] = useState(false);
    const [ newTask, setNewTask ] = useState({
        title: '',
        description: '',
        category: props.category
    });

    function handleShowForm() {
        setShowForm(true);
    }

    function handleHideForm() {
        setShowForm(false);
    }

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setNewTask({
            ...newTask,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(createTask(newTask));
        setShowForm(false);
    }

    return(
        <React.Fragment>
            {
                showForm ? (
                    <div className="card-footer add-form">
                        <form onSubmit={(event) => handleSubmit(event)} className="mw-100">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Task Title</label>
                                <input onChange={(event) => handleChange(event)} name="title" type="text" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input onChange={(event) => handleChange(event)} name="description" type="text" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3 mx-1">Add</button>
                            <a onClick={() => handleHideForm()} className="btn btn-danger mb-3 mx-1" href="/#">Cancel</a>
                        </form>
                    </div>        
                ) : (
                    <div onClick={() => handleShowForm()} className="card-footer text-muted">
                        <i className="fas fa-plus mt-1 me-3"></i>
                        Add a card...
                    </div>
                )
            }
        </React.Fragment>
    )
}

export default AddForm;