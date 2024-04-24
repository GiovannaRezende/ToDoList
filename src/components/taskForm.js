import {useState} from "react";

const TaskForm = ({addTask}) => {

    const [value, setValue] = useState("");

    const handleTask = (e) => { 
        e.preventDefault()
        if (!value) return; //Verificar se há valor para adicionar tarefa.
        addTask(value); //Adicionar o valor a criação da tarefa.
        setValue(""); //Limpar campos após adicionar tarefa.
    }

    return (
        <div className="taskForm">
            <form onSubmit={handleTask}>
                <input type="text" placeholder="Digite uma tarefa..." value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default TaskForm;