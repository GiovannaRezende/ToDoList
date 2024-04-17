import { useState } from 'react';
import Task from './components/task';
import TaskForm from './components/taskForm';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estudar React e JavaScript",
      isCompleted: false,
    }
  ]);

  const addTask = (text) => {
    const newTasks = [...tasks, {
      id: Math.floor(Math.random() * 1000), //Gera até 1000 IDs aleatórios para cada tarefa criada
      text,
      isCompleted: false,   
      },
    ];

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks];
    const filteredTodos = newTasks.filter((task) => task.id !== id ? task : null);
    setTasks(filteredTodos);
  }

  const completeTask = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) => task.id === id ? task.isCompleted = !task.isCompleted : task);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <h1>Lista de tarefas</h1>
      <div className="body">
        <TaskForm addTask={addTask}/>
        {tasks.map((task) => (
          <Task task={task} deleteTask={deleteTask} completeTask={completeTask}/>
        ))}
      </div>
    </div>
  );
}

export default App;
