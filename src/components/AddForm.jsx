import React from 'react';

function AddForm() {
    return(
        <React.Fragment>
            <div v-show="!showAddForm" className="card-footer text-muted">
                <i className="fas fa-plus mt-1 me-3"></i>
                Add a card...
            </div>
            <div className="card-footer add-form">
                <form className="mw-100">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Task Title</label>
                        <input name="title" type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input name="description" type="text" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3 mx-1">Add</button>
                    <a className="btn btn-danger mb-3 mx-1" href="/#">Cancel</a>
                </form>
            </div>
        </React.Fragment>
    )
}

export default AddForm;