import React, { useState } from 'react';
import TaskList from './components/TaskList';
import './App.css';
import TaskForm from './components/TaskForm';

const taskArray = [];

function App() {
  const [taskList, setTaskList] = useState(taskArray);
  const lastId = taskArray.reduce(
    (max, item) => (Number(item.taskId) > max ? Number(item.taskId) : max),
    0
  );

  const onDeleteHandler = deleteId => {
    setTaskList(
      taskList.filter(task => Number(task.taskId) !== Number(deleteId))
    );
  };

  return (
    <div className="App">
      <TaskForm
        lastId={lastId}
        onSave={newTask => setTaskList([...taskList, newTask])}
      />
      <TaskList tasks={taskList} onDelete={onDeleteHandler} />
    </div>
  );
}

export default App;
