import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTaskById, updateTask } from '../store/actions/taskAction';

function EditForm() {
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const taskDetails = useSelector(state => state.taskReducer.taskDetails)
    const [ updatedTask, setUpdatedTask ] = useState({
        id: taskDetails.id,
        title: taskDetails.title,
        description: taskDetails.description
    });

    
    useEffect(() => {
        dispatch(getTaskById(params.id));
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        setUpdatedTask({
            ...taskDetails
        })
    }, [taskDetails])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setUpdatedTask({
            ...updatedTask,
            [name]: value
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(updatedTask);
        dispatch(updateTask(updatedTask));
        history.push(`/`);
    }

    return(
        <React.Fragment>
            <Navbar />
            <section className="container my-5">
                <div className="card edit-task">
                    <div className="card-header">
                        Edit Task
                    </div>
                    <div className="card-body">
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Task Title</label>
                                <input onChange={(event) => handleChange(event)} name="title" type="text" className="form-control" value={updatedTask.title} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <input onChange={(event) => handleChange(event)} name="description" type="text" className="form-control" value={updatedTask.description} />
                            </div>
                            <button type="submit" className="btn btn-primary mb-3 mx-1">Edit</button>
                            <a className="btn btn-danger mb-3 mx-1" href="/#">Cancel</a>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EditForm;