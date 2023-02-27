import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  const tasksList = tasks.map(task => (
    <Task
    text= {task.text}
    category= {task.category}
    key= {task.text}
    handleDelete= {handleDelete}
    />
  ))

  return (
    <div className="tasks">
      {tasksList}
    </div>
  );
}

export default TaskList