import React from 'react';
import Task from '../../models/task';
import TaskComponent from './Task.component';

export default function TaskListComponent(props: any): JSX.Element {
  const tasks: Task[] = props.items;
  const tasksList = tasks.map((task) => (<TaskComponent task={task}></TaskComponent>))
  return (
    <div>
      {tasksList}
    </div>
  );
}
