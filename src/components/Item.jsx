import React from 'react';

function Item() {
    return(
        <div className="card-header mt-1">
            <p>Task Title</p>
            <div className="icons">
                <button className="btn btn-success mx-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-check"></i>
                </button>
                    <ul className="dropdown-menu bg-success">
                        <li v-if="task.category !== 'Backlog'" className="dropdown-item text-light">Backlog</li>
                        <li v-if="task.category !== 'Development'" className="dropdown-item text-light">Development</li>
                        <li v-if="task.category !== 'Production'" className="dropdown-item text-light">Production</li>
                        <li v-if="task.category !== 'Done'" className="dropdown-item text-light">Done</li>
                    </ul>
                <a className="btn btn-info mx-1 text-white" href="/#">
                    <i className="far fa-edit"></i>
                </a>
                <a className="btn btn-danger mx-1" href="/#">
                    <i className="fas fa-trash-alt"></i>
                </a>
            </div>
        </div>
    )
}

export default Item;