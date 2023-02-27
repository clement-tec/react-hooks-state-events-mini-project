import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selectCategory, setSelectCategory] = useState("All")

  const handleDelete = (deleteTask) =>{
    setTasks(tasks.filter(task => task.text !== deleteTask))
  }

  const handleSelectCategory = (category) =>{
    setSelectCategory(category)
  }

  const filteredTasks = tasks.filter(task => task.category === selectCategory || selectCategory === "All")

  const addNewTask = (newTask) => {
    console.log(newTask)
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories= {CATEGORIES} selectCategory = {selectCategory} handleSelectCategory= {handleSelectCategory} />
      <NewTaskForm categories= {CATEGORIES.filter(category =>category !== "All")} addNewTask= {addNewTask}/>
      <TaskList tasks = {filteredTasks} handleDelete= {handleDelete}/>
    </div>
  );

}

export default App;