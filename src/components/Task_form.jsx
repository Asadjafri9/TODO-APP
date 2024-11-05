import { useState } from "react";
import Tag from "./tag";
import "./task_form.css";
function Task_form({setTasks}) {
  const [TaskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });
  const checkTag = (tag) => {
    return TaskData.tags.some((item) => item === tag);
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const selectTag = (tag) => {
    if (TaskData.tags.some((item) => item === tag)) {
      const filterTags = TaskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks(prev=>
    {
      return [...prev , TaskData]
    }
    )
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    })
  };

  return (
    <>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            name="task"
            value={TaskData.task}
            className="task_input"
            placeholder="Enter Your Task"
            onChange={(e) => handleChange(e)}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag
                tagName="HTML"
                selectTag={selectTag}
                selectedTag={checkTag('HTML')}
              ></Tag>
              <Tag
                tagName="CSS"
                selectTag={selectTag}
                selectedTag={checkTag('CSS')}
              ></Tag>
              <Tag
                tagName="JavaScript"
                selectTag={selectTag}
                selectedTag={checkTag('JavaScript')}
              ></Tag>
              <Tag
                tagName="React"
                selectTag={selectTag}
                selectedTag={checkTag('React')}
              ></Tag>
            </div>
            <div>
              <select
                name="status"
                value={TaskData.status}
                className="task_status"
                onChange={handleChange}
              >
                <option value="todo">To Do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                +Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
}

export default Task_form;
