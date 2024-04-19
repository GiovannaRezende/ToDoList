import {useState} from "react";

const TaskForm = ({addTask}) => {

    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) return; //Validar se está vazio
        addTask(value); //Adicionar o valor
        setValue(""); //Limpar campos
    }

    return (
        <div className="taskForm">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite uma tarefa..." value={value} onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default TaskForm;