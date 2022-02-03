import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <p>No Tasks Added</p>
      </div>
    );
  }
  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.taskId} task={task} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
