import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { partition } from 'lodash';
import styles from './TaskKanbanView.component.css';
import Task from '../../models/task';
import TaskComponent from './Task.component';

export default function TaskKanbanViewComponent(props: any): JSX.Element {
  const { tasks } = props;
  const columnNames = ['todo', 'in_progress', 'done'];
  const partitionnedTasks = partition(tasks, 'status');
  const [columns, setColumns] = useState<any>(partitionnedTasks);

  useEffect(() => {
    const newTasks = partition(tasks, 'status');
    setColumns(newTasks);
  }, [tasks]);

  const columnsConfig = {
    todo: 'todo',
    in_progress: 'in_progress',
    done: 'done',
  };

  function onDragEnd() {
    console.log('end drag');
  }

  return (
    <div className={styles.dragDropZone}>
      <DragDropContext onDragEnd={onDragEnd}>
        {columnNames.map((columnName, columnIndex) => (
          <Droppable droppableId={columnName} key={columnName}>
            {(provided: any, snapshot: any) => (
              <div ref={provided.innerRef}>
                <h1>{columnName}</h1>
                <div>
                  {(columns[columnIndex] || []).map(
                    (item: Task, index: number) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {() => <TaskComponent task={item} />}
                      </Draggable>
                    )
                  )}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
}
