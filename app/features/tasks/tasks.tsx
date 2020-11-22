import React, { useState } from 'react';
import TasksViewComponent, {
  Layout,
} from '../../components/task/TasksView.component';
import Task from '../../models/task';

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [layout, setLayout] = useState<Layout>('list');

  function addTask() {
    const task = new Task(`test${tasks.length}`, 'todo');
    console.log('add task', task);
    setTasks([...tasks, task]);
  }

  function toggleLayout() {
    const newLayout = layout === 'list' ? 'kanban' : 'list';
    setLayout(newLayout);
  }

  return (
    <div>
      <button onClick={addTask} type="button">
        Add task
      </button>
      <button onClick={toggleLayout} type="button">
        toggle layout
      </button>
      <div>Your tasks:</div>
      <TasksViewComponent tasks={tasks} layout={layout} />
    </div>
  );
}
