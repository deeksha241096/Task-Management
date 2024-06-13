import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, removeTask, editTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          editTask={editTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
