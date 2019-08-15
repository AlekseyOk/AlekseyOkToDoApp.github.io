import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, DropdownButton, Dropdown  } from 'react-bootstrap';

import './todo-input.css';

const ToDoInput = ({ value, onChange, handleInputPriorityChange, priority}) => (
  <div className="todo-input-wrapper">
    <InputGroup >
    <FormControl
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      placeholder="Write the task and click Ok"
      onChange={onChange}
      value={value}
      id ="inputId"
    />
    <DropdownButton
      as={InputGroup.Append}
      variant="outline-secondary"
      title={priority}
      id="input-group-dropdown-2"
    >
      {priority !== 'hight' && <Dropdown.Item onClick={()=>{handleInputPriorityChange('hight')}} >Hight</Dropdown.Item>}
      {priority !== 'medium' && <Dropdown.Item onClick={()=>{handleInputPriorityChange('medium')}} >Medium</Dropdown.Item>}
      {priority !== 'low' && <Dropdown.Item onClick={()=>{handleInputPriorityChange('low')}} >Low</Dropdown.Item>}
      {priority !== 'no priority' && <Dropdown.Item onClick={()=>{handleInputPriorityChange('no priority')}} >No priority</Dropdown.Item>}
    </DropdownButton>
  </InputGroup>
  </div>
);

ToDoInput.propTypes = {
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  value: PropTypes.string,
}

ToDoInput.defaultProps = {
  onChange: () => {},
  onKeyPress: () => {},
  value: '',
}

export default ToDoInput;
