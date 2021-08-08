import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskCategory, deleteTask } from '../store/actions/taskAction';
import { useHistory } from 'react-router-dom';

function Task(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    function handleChangeTaskCategory(payload) {
        dispatch(changeTaskCategory(payload));
    }

    function handleUpdateTask(id) {
        history.push(`/tasks/${id}`);
    }

    function handleDeleteTask(id) {
        dispatch(deleteTask(id));
    }

    return(
        <div className="card-header mt-1">
            <p>{props.task.title}</p>
            <div className="icons">
                <button className="btn btn-success mx-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-check"></i>
                </button>
                    <ul className="dropdown-menu bg-success">
                        {
                            props.task.category === 'Backlog' ? (
                                <React.Fragment>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Development', id: props.task.id})} className="dropdown-item text-light">Development</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Production', id: props.task.id})} className="dropdown-item text-light">Production</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Done', id: props.task.id})} className="dropdown-item text-light">Done</li>
                                </React.Fragment>
                            ) : props.task.category === 'Development' ? (
                                <React.Fragment>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Backlog', id: props.task.id})} className="dropdown-item text-light">Backlog</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Production', id: props.task.id})} className="dropdown-item text-light">Production</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Done', id: props.task.id})} className="dropdown-item text-light">Done</li>
                                </React.Fragment>
                            ) : props.task.category === 'Production' ? (
                                <React.Fragment>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Backlog', id: props.task.id})} className="dropdown-item text-light">Backlog</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Development', id: props.task.id})} className="dropdown-item text-light">Development</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Done', id: props.task.id})} className="dropdown-item text-light">Done</li>
                                </React.Fragment>
                            ) : props.task.category === 'Done' ? (
                                <React.Fragment>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Backlog', id: props.task.id})} className="dropdown-item text-light">Backlog</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Development', id: props.task.id})} className="dropdown-item text-light">Development</li>
                                    <li onClick={() => handleChangeTaskCategory({category: 'Production', id: props.task.id})} className="dropdown-item text-light">Production</li>
                                </React.Fragment>
                            ) : (
                                <React.Fragment></React.Fragment>
                            )
                        }
                    </ul>
                <button onClick={() => handleUpdateTask(props.task.id)} className="btn btn-info mx-1 text-white">
                    <i className="far fa-edit"></i>
                </button>
                <button onClick={() => handleDeleteTask(props.task.id)} className="btn btn-danger mx-1" data-bs-toggle="tooltip" data-bs-placement="bottom">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>
    )
}

export default Task;