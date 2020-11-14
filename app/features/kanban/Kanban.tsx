import React, { useState } from 'react';
import TaskListComponent from '../../components/task/TaskList.component';
import Task from '../../models/task';

export default function Kanban() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask() {
    const task = new Task(`test${tasks.length}`, 'todo');
    setTasks([...tasks, task])
  }

  return (<div>
    <button onClick={addTask}>Add task</button>
    <div>Your tasks:</div>
    <TaskListComponent items={tasks}></TaskListComponent>
  </div>);
}
