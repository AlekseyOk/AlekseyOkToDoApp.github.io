import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import ToDoItemActive from '../todo-item/todo-item-active';

const ToDoListActive = ({ tasksList, removeTask, completeTask, editTaskTitle, editTask }) => (
  <ListGroup className='todo-list'>
    {tasksList.map(({ id, text, isCompleted, date, textTitle, priority }) => (
      <ToDoItemActive 
      removeTask={removeTask} 
      editTask={editTask} 
      editTaskTitle={editTaskTitle} 
      priority={priority} 
      textTitle={textTitle} 
      date={date} 
      completeTask={completeTask} 
      id={id} 
      key={id} 
      text={text} 
      isCompleted={isCompleted} 
      />
    ))}
    </ListGroup>
);

ToDoListActive.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  editTaskTitle: PropTypes.func,
  editTask: PropTypes.func
}

ToDoListActive.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {},
  editTaskTitle: () => {},
  editTask: () => {}
}

export default ToDoListActive;
