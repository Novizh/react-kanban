import React from 'react';
import Navbar from '../components/Navbar';

function EditForm() {
    return(
        <React.Fragment>
            <Navbar />
            <section class="container my-5">
                <div class="card edit-task">
                    <div class="card-header">
                        Edit Task
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="mb-3">
                                <label for="title" class="form-label">Task Title</label>
                                <input name="title" type="text" class="form-control" />
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <input name="description" type="text" class="form-control" />
                            </div>
                            <button type="submit" class="btn btn-primary mb-3 mx-1">Edit</button>
                            <a class="btn btn-danger mb-3 mx-1" href="/#">Cancel</a>
                        </form>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default EditForm;