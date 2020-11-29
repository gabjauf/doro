import React from 'react';
import Task from '../../models/task';
import styles from './Task.component.css';

export default function TaskComponent(props: any): JSX.Element {
  const { task }: { task: Task } = props;

  return (
    <div className={styles.card}>
      <h3>{task.title}</h3>
      <span>{task.status}</span>
    </div>
  );
}
