import {useState} from "react";

const  UpdateTaskForm = ({updateTask, task}) => {

    const [value, setValue] = useState(task.text);

    const handleTask = (e) => { 
        e.preventDefault()
        if (!value) return; //Verificar se há valor para adicionar tarefa.
        updateTask(value, task.id); //Adicionar o valor a criação da tarefa.
        setValue(""); //Limpar campos após adicionar tarefa.
        console.log();
    }

    return (
        <div className="taskForm">
            <form onSubmit={handleTask}>
                <input type="text" placeholder="Edite a tarefa..." value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">Editar</button>
            </form>
        </div>
    )
}

export default UpdateTaskForm;