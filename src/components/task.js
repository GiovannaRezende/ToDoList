import React from "react";

const Task = ({task, deleteTask, completeTask}) => {
    return (
        <div className="todo" style={{textDecoration: task.isCompleted ? "line-through" : ""}}>
            <div className="task">
                <p>{task.text}</p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTask(task.id)}>Completar</button>
                <button className="delete" onClick={() => deleteTask(task.id)}>Remover</button>
            </div> 
            </div>
    )
}

export default Task;