import React from "react";

const Task = ({task, deleteTask, completeTask}) => {
    return (
        //Se a tarefa for marcada como completa, então tachar texto para indicar.
        <div className="task" style={{textDecoration: task.isCompleted ? "line-through" : ""}}> 
            <div> 
                <p>{task.text}</p>
            </div>
            <div>
                <button className="complete" onClick={() => completeTask(task.id)}><img src="../assets/images/complete.png" width="25px" height="25px" alt=""/></button> 
                <button className="delete" onClick={() => deleteTask(task.id)}><img src="../assets/images/delete.png" width="25px" height="25px" alt=""/></button>
            </div> 
        </div>
    )
}

export default Task;