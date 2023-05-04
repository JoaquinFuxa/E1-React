import React from 'react'
import AddTask from './todolist'
import { Button } from './todolistStyle';
import TaskCard from '../taskCard/taskCard';

const TodoList = () => {
    const [tasks, setTasks] = React.useState([]);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };

    const handleDeleteAll = () => {
        setTasks([]);
      };

  return (
    <>
        <AddTask onSubmit={handleAddTask}/>
        <ul>
            {tasks.map((task, index) => (
            <TaskCard key={index}>{task}</TaskCard>
        ))}
        </ul>
        <Button onClick={handleDeleteAll}>Borrar todo</Button>
    </>
  )
}

export default TodoList