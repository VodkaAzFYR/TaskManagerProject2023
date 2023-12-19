import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/add-task">Add Task</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/add-task" element={<TaskForm />} />
                    <Route path="/edit-task/:taskId" element={<TaskForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
