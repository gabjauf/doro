/* eslint-disable react/jsx-props-no-spreading */
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

  function onDragEnd({ source, destination }) {
    console.log('end drag', source, destination);
  }

  return (
    <div className={styles.dragDropZone}>
      <DragDropContext onDragEnd={onDragEnd}>
        {columnNames.map((columnName, columnIndex) => (
          <div key={columnName} className={styles.column}>
            <h3>
              {columnName} {(columns[columnIndex] || []).length}
            </h3>
            <Droppable droppableId={columnName}>
              {(provided: any, snapshot: any) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <div>
                    {(columns[columnIndex] || []).map(
                      (item: Task, index: number) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(draggableProvided: any) => (
                            <div
                              className={styles.draggableCard}
                              ref={draggableProvided.innerRef}
                              {...draggableProvided.draggableProps}
                              {...draggableProvided.dragHandleProps}
                            >
                              <TaskComponent task={item} />
                            </div>
                          )}
                        </Draggable>
                      )
                    )}
                  </div>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}
