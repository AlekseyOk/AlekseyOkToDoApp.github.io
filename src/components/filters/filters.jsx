import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import './filters.css';

const FILTERS_BTN = [
  {
    text: 'All',
    id: 'all',
  },
  {
    text: 'Old',
    id: 'old'
  },
  {
    text: 'Hight',
    id: 'hight',
  },
  {
    text: 'Medium',
    id: 'medium',
  },
  {
    text: 'Low',
    id: 'low'
  },
  {
    text: 'No priority',
    id: 'no priority'
  }
];

const Filters = ({ changeFilter }) => (
  <div className='filters'>
    <div className='btn-group'>
      {FILTERS_BTN.map(({ text, id }) => (
        <Button 
        variant='outline-light'
        onClick={()=>{changeFilter(id)}}
        key={id}
        >{text}</Button>
      ))}
    </div>
  </div>
);

Filters.propTypes = {
  amount: PropTypes.number,
  activeFilter: PropTypes.string,
  changeFilter: PropTypes.func
}

Filters.defaultProps = {
  amount: 0,
  activeFilter: 'all',
  changeFilter: () => {}
}

export default Filters;
