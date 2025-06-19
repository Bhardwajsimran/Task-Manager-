import React from 'react';

function TaskItem({ task, onUpdate, onDelete }) {
  return (
    <div>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <button onClick={() => onUpdate(task._id, { status: task.status === 'Complete' ? 'Incomplete' : 'Complete' })}>
        Toggle Status
      </button>
      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
