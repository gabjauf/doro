/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { groupBy } from 'lodash';
import styles from './TaskKanbanView.component.css';
import Task from '../../models/task';
import TaskComponent from './Task.component';

export default function TaskKanbanViewComponent(props: any): JSX.Element {
  const { tasks, updateStatus } = props;
  const columnNames = ['todo', 'in_progress', 'done'];
  const groupedTasks = groupBy(tasks, 'status');
  const [columns, setColumns] = useState<any>(groupedTasks);

  useEffect(() => {
    const newTasks = groupBy(tasks, 'status');
    console.log('new tasks', newTasks, tasks);
    setColumns(newTasks);
  }, [tasks]);

  const columnsConfig = {
    todo: 'todo',
    in_progress: 'in_progress',
    done: 'done',
  };

  function onDragEnd({ source, destination }: any) {
    if (!source || !destination) {
      return;
    }
    console.log('end drag', source, destination);
    const column = columns[source.droppableId];
    const task = column[source.index];
    updateStatus(task, destination.droppableId);
  }

  return (
    <div className={styles.dragDropZone}>
      <DragDropContext onDragEnd={onDragEnd}>
        {columnNames.map((columnName, columnIndex) => (
          <div key={columnName} className={styles.column}>
            <h3>
              {columnName} {(columns[columnName] || []).length}
            </h3>
            <Droppable droppableId={columnName}>
              {(provided: any, snapshot: any) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={styles.dropZone}
                >
                  <div>
                    {(columns[columnName] || []).map(
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
