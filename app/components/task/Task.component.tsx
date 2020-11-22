import React from 'react';
import Task from '../../models/task';
import styles from './Task.component.css';

export default function TaskComponent(props: any): JSX.Element {
  const { task }: { task: Task } = props;

  return (
    <div className={styles.card}>
      <h1>{task.title}</h1>
      <span>{task.status}</span>
    </div>
  );
}
