import React from 'react';
import './TaskForm.css';
import { useInput } from '../hooks/useInput';

const TaskForm = ({ onSave, lastId }) => {
  const [taskName, resetTask] = useInput('');
  const [taskDate, resetDate] = useInput('');

  const onSubmitHandler = event => {
    event.preventDefault();
    onSave({
      taskId: lastId + 1,
      taskDesc: taskName.value,
      taskDate: taskDate.value,
      taskCompleted: 'N',
    });
    resetTask();
    resetDate();
  };

  return (
    <form onSubmit={onSubmitHandler} className="form-data">
      <label htmlFor="task-desc">Task</label>
      <textarea required {...taskName} id="task-desc" rows="4" />
      <label htmlFor="task-date">Date</label>
      <input required {...taskDate} type="date" id="task-date" />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
