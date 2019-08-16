import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl } from 'react-bootstrap';

import './todo-input-title.css';

const ToDoInputTitle = ({ value, onChange, focusAfterEnterOnTitle }) => (
  <InputGroup className="mb-3">
    <FormControl
      placeholder="task title"
      aria-label="title"
      aria-describedby="basic-addon1"
      className="todo-input-title"
      onChange={onChange}
      value={value}
      onKeyPress={focusAfterEnterOnTitle}
    />
  </InputGroup> 
);

ToDoInputTitle.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  focusAfterEnterOnTitle: PropTypes.func
}

ToDoInputTitle.defaultProps = {
  onChange: () => {},
  value: '',
  focusAfterEnterOnTitle: () => {}
}

export default ToDoInputTitle;
