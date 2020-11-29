import React from 'react';
import { Layout } from '../../models/layout';
import styles from './Layout-selector.component.css';

export default function LayoutSelector(props: any): JSX.Element {
  const layouts = [
    { name: 'list', icon: 'fas fa-list' },
    { name: 'kanban', icon: 'fab fa-trello' },
  ];

  function layoutSelected(layout: Layout) {
    props.layoutSelected(layout);
  }

  return (
    <div className={styles.card}>
      {layouts.map((layout, index) => (
        <button
          key={layout.name}
          type="button"
          onClick={() => layoutSelected(layout.name as Layout)}
        >
          <i className={layout.icon} />
        </button>
      ))}
    </div>
  );
}
