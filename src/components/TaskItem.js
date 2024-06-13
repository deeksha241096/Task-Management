import React, { useState } from "react";

function TaskItem({ task, removeTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleEdit = () => {
    editTask(task.id, { ...task, title, description });
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br /> <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <br />
          <button className="saveButton" onClick={handleEdit}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button className="editButton" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="deleteButton" onClick={() => removeTask(task.id)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
