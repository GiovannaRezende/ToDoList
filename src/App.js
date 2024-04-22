import { useState } from 'react';
import Task from './components/task';
import TaskForm from './components/taskForm';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Finalizar o projeto 'Lista de tarefas' usando ReactJS",
      isCompleted: true,
    }
  ]);

  const addTask = (text) => {
    const newTasks = [...tasks, {
      id: Math.floor(Math.random() * 5000), //Gerar até 5000 IDs aleatórios para adicionar tarefas.
      text,
      isCompleted: false,   
      },
    ];

    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = [...tasks];
    const filteredTasks = newTasks.filter((task) => task.id !== id ? task : null);
    setTasks(filteredTasks);
  }

  const completeTask = (id) => {
    const newTasks = [...tasks];
    newTasks.map((task) => task.id === id ? task.isCompleted = !task.isCompleted : task);
    setTasks(newTasks);
  }

  return (
    <div className="container">
      <div className="box">
      <div className="head">
        <h1>Lista de tarefas</h1>
      </div>
      <div className="body">
        <TaskForm addTask={addTask}/>
        {tasks.map((task) => (
          <Task task={task} deleteTask={deleteTask} completeTask={completeTask}/>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
