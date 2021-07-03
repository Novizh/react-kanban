import React, { useEffect } from 'react';
import Task from './Task';
import AddForm from './AddForm';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks } from '../store/actions/taskAction';


function Category(props) {
    const dispatch = useDispatch();
    const tasks = useSelector(state => state.taskReducer.data);
    
    
    useEffect(() => {
        dispatch(getTasks());
        // eslint-disable-next-line
    }, [])
    
    function filterTaskByCategory() {
        return tasks.filter((task) => task.category === props.category.title)
    }

    return(
        <div className="card mt-3 mx-2 col-lg-2 col-md-6 col-sm-6 col-12">
            <div className="card-header">
                <h4>{props.category.title}</h4>
            </div>
            <div className="card-body">
                {/* Task, map and wrap it in React Draggable */}
                {
                    filterTaskByCategory().map((task) => {
                        return <Task key={task.id} task={task}/>
                    })
                }
            </div>
            {/* Add Form */}
            <AddForm category={props.category.title}/>
        </div>
    )
}

export default Category;