import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import ToDoItemActive from '../todo-item/todo-item-active';

const ToDoList = ({ tasksList, removeTask, completeTask, editTaskTitle, editTask }) => (
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

ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
}

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {} 
}

export default ToDoList;
