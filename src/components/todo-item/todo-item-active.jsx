import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Button, Badge, ButtonGroup } from 'react-bootstrap';
import { withAuth } from '../auth/auth'
import Edit from '../input-edit/input-edit'

import './todo-item.css';
 

const ToDoItemActive = withAuth(({ text, isCompleted, removeTask, completeTask, id, date, textTitle, priority, editTaskTitle, editTask, isAuthorized }) => (
  <li className={`todo-item ${isCompleted  && 'none'}`}>
        <ListGroup.Item>
            
            <p className="task-title">{textTitle}</p>

            <div className="task-text"> {text} </div>

            { isAuthorized && <div className='verticalButtons'>

             <ButtonGroup vertical>
                <Button onClick={()=>{completeTask(id)}} variant="outline-secondary" size="sm">
                    complete
                </Button>
                <Button onClick={()=>{removeTask(id)}} variant="outline-secondary" size="sm">
                   remove
                </Button>
                <Edit id={id} editTask={editTask} editTaskTitle = {editTaskTitle} textTitle = {textTitle} text={text}/>
            </ButtonGroup>  
            
            </div> }

             <p className="date">{date}</p>

            { priority==='low' &&  <div className="badge"><Badge variant="light">Low priority</Badge></div>}
            { priority==='medium' &&  <div className="badge"><Badge variant="secondary" >Medium priority</Badge></div>}
            { priority==='hight' &&  <div className="badge"><Badge variant="dark" >Hight priority</Badge></div>}
            
        </ListGroup.Item>
  </li>
));

ToDoItemActive.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
  id: PropTypes.number,
  date: PropTypes.string,
  textTitle: PropTypes.string,
  priority: PropTypes.string,
  editTaskTitle: PropTypes.func,
  editTask: PropTypes.func,
  isAuthorized: PropTypes.bool,
}

ToDoItemActive.defaultProps = {
  text: '',
  isCompleted: false,
  removeTask: () => {},
  completeTask: () => {},
  id: 0,
  date: '',
  textTitle: '',
  priority: '',
  editTaskTitle: () => {},
  editTask: () => {}
}

export default ToDoItemActive;
