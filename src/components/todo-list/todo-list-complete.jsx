import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';

import ToDoItemComplete from '../todo-item/todo-item-complete';

const ToDoListComplete = ({ tasksList, removeTask, completeTask, editTaskTitle, editTask }) => (
  <ListGroup className="todo-list">
    {tasksList.map(({ id, text, isCompleted, textTitle, date, priority }) => (
      <ToDoItemComplete 
      removeTask={removeTask}
      editTask={editTask} 
      editTaskTitle={editTaskTitle} 
      date={date} 
      priority={priority} 
      textTitle={textTitle} 
      completeTask={completeTask} 
      id={id} 
      key={id} 
      text={text} 
      isCompleted={isCompleted} 
      />
    ))}
    </ListGroup>
);

ToDoListComplete.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
}

ToDoListComplete.defaultProps = {
  tasksList: [],
  removeTask: () => {} 
}

export default ToDoListComplete;
