import "./Task_column.css";
import TaskCard from "./TaskCard";
function Task_Column({ name, icon, tasks, status,handleDelete }) {
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={icon} alt="" />
          {name}
        </h2>
        {tasks.map(
          (task, index) =>
            task.status === status && <TaskCard key={index} title ={task.task} tags = {task.tags} 
            handleDelete = {handleDelete}
            index = {index}
            />
        )}
      </section>
    </>
  );
}

export default Task_Column;
