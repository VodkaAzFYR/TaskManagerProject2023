import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { addTask, editTask } from '../redux/tasksSlice';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { taskId } = useParams();
    const task = useSelector(state =>
        state.tasks.find(task => task.id.toString() === taskId)
    );

    useEffect(() => {
        if (task) {
            setTitle(task.title);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task) {
            dispatch(editTask({ ...task, title }));
        } else {
            dispatch(addTask({ id: Date.now(), title }));
        }
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Wpisz nazwę zadania"
            />
            <button type="submit" className='button'>{task ? 'Aktualizuj' : 'Dodaj'}</button>
        </form>
    );
};

export default TaskForm;
