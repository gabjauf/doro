import React, { useState } from 'react';
import LayoutSelector from '../../components/layout-selector/Layout-selector.component';
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

  function layoutSelected(selectedLayout: Layout) {
    setLayout(selectedLayout);
  }

  return (
    <div>
      <button onClick={addTask} type="button">
        Add task
      </button>
      <LayoutSelector layoutSelected={layoutSelected} />
      <div>Your tasks:</div>
      <TasksViewComponent tasks={tasks} layout={layout} />
    </div>
  );
}
