import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../redux/tasksSlice';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Lista Zadań</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => dispatch(deleteTask(task.id))}>
                            Usuń
                        </button>
                        <Link to={`/edit-task/${task.id}`} className="button edit-button">
                        Edytuj
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
