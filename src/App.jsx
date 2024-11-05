import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import TODO from "./assets/goal.png";
import Doing from "./assets/star.png";
import Completed from "./assets/double-tick.png";
import Task_Column from "./components/Task_Column";
import Task_form from "./components/Task_form";
function App() {
  const oldTasks = localStorage.getItem("tasks")
  const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[]);
  const handleDelete = (taskIndex) => {
    const deleteTask = tasks.filter((_, index) => index !== taskIndex);
    setTasks(deleteTask);
  };
  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
   
  }
  )
  return (
    <>
      <div className="app">
        <Task_form setTasks={setTasks}></Task_form>
        <main className="app_main">
          <Task_Column
            name="To do"
            icon={TODO}
            tasks={tasks}
            status="todo"
            handleDelete = {handleDelete}
          ></Task_Column>
          <Task_Column
            name="Doing"
            icon={Doing}
            tasks={tasks}
            status="doing"
            handleDelete = {handleDelete}
          ></Task_Column>
          <Task_Column
            name="Done"
            icon={Completed}
            tasks={tasks}
            status="done"
            handleDelete = {handleDelete}
          ></Task_Column>
        </main>
      </div>
    </>
  );
}

export default App;
