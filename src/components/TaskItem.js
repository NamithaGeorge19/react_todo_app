import React from 'react';
import './TaskItem.css';
import { MdClose } from 'react-icons/md';

const TaskItem = ({ task, onDelete }) => {
  const dateValue = new Date(task.taskDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <div className="task-item">
      <h3 className="task-desc">{task.taskDesc}</h3>
      <div className="task-date">Task Date: {dateValue}</div>
      <div className="task-close">
        <MdClose onClick={() => onDelete(task.taskId)} />
      </div>
    </div>
  );
};

export default TaskItem;
