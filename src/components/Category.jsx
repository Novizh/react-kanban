import React from 'react';
import Task from './Item';
import AddForm from './AddForm';

function Category() {
    return(
        <div className="card mt-3 mx-2 col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="card-header">
                <h4>Category Name</h4>
            </div>
            <div className="card-body">
                {/* Task, map and wrap it in React Draggable */}
                <Task />
            </div>
            {/* Add Form */}
            <AddForm />
        </div>
    )
}

export default Category;