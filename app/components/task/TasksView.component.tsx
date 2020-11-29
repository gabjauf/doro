import React from 'react';
import Task from '../../models/task';
import TaskKanbanViewComponent from './TaskKanbanView.component';
import TasksListViewComponent from './TasksListView.component';

export default function TasksViewComponent(props: any): JSX.Element {
  switch (props.layout) {
    case 'list':
      return <TasksListViewComponent tasks={props.tasks} />;
    case 'kanban':
      return (
        <TaskKanbanViewComponent
          tasks={props.tasks}
          updateStatus={props.updateStatus}
        />
      );
    default:
      return <div>Invalid Layout</div>;
  }
}
