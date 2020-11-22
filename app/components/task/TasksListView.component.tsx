import React from 'react';
import Task from '../../models/task';
import TaskComponent from './Task.component';

export default function TasksListViewComponent(props: any): JSX.Element {
  const { tasks } = props;
  const tasksList = tasks.map((task: Task) => (
    <TaskComponent task={task} key={task.id} />
  ));
  return <div>{tasksList}</div>;
}
