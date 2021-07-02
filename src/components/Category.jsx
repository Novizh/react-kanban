import React from 'react';
import Item from './Item';
import AddForm from './AddForm';

function Category() {
    return(
        <div className="card mt-3 mx-2 col-md-3 col-sm-3">
            <div className="card-header">
                <h4>Category Name</h4>
            </div>
            <div className="card-body">
                {/* Items map and wrap it in React Draggable */}
                <Item />
            </div>
            {/* Add Form */}
            <AddForm />
        </div>
    )
}

export default Category;