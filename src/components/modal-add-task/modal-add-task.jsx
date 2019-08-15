import React, { useState } from 'react';
import { Button, Modal,  } from 'react-bootstrap';
import ToDoInputTitle from '../todo-input-title/todo-input-title';
import ToDoInput from '../todo-input/todo-input';
import './modal-add-task.css';

function ModalAddTask({ taskTextTitle, 
                        focusAfterEnterOnTitle, 
                        handleInputTitleChange,  
                        handleInputPriorityChange, 
                        onChange, 
                        value, 
                        priority, 
                        clearState, 
                        addTaskClickOk }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
      <React.Fragment>
        <Button className = 'addTask' variant='outline-light' onClick={handleShow}>Add Task</Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header >
            <ToDoInputTitle 
              focusAfterEnterOnTitle = {focusAfterEnterOnTitle} 
              onChange = {handleInputTitleChange} 
              value = {taskTextTitle}
            /> 
          </Modal.Header>
          <Modal.Body>
          <ToDoInput 
            handleInputPriorityChange={handleInputPriorityChange} 
            onChange = {onChange} 
            value = {value}
            priority={priority}
          /> 
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={()=>{handleClose(); clearState()}}>
              Close
            </Button>
          <Button variant='primary' onClick={()=>{addTaskClickOk(); handleClose()}}>Ok</Button>
          </Modal.Footer>
        </Modal>
    </React.Fragment>
    );
  }

export default ModalAddTask;