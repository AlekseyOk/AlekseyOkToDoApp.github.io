import React from 'react';
import {  Navbar } from 'react-bootstrap';
import ButtonLogin from '../button-login/button-login';
import  ModalAddTask  from '../modal-add-task/modal-add-task';
import { withAuth } from '../auth/auth';
import Filters from '../filters/filters';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types';
import './header.css';

const Header = withAuth(({taskTextTitle, 
                          handleInputTitleChange, 
                          focusAfterEnterOnTitle, 
                          handleInputPriorityChange, 
                          onChange, 
                          value, 
                          priority,
                          clearState, 
                          addTaskClickOk, 
                          closeTab, 
                          isAuthorized,
                          isTasksExist,
                          changeFilter}) => (
  <div className="header">
      <Navbar bg="dark" variant="dark" className="headerWrapper">
        
        <Container>
          <Row>
          
            <Col xl={{ span: 5, offset: 3 }} lg={{ span: 6, offset: 2 }} md={{ span: 8, offset: 0 }} sm={{ span: 10, offset: 1 }} xs={{ span: 12, offset: 1 }}>
              {isAuthorized && isTasksExist && <Filters changeFilter={changeFilter} />}
            </Col>

            <Col xl={{ span: 2, offset: 0 }} lg={{ span: 2, offset: 0 }} md={{ span: 3, offset: 0 }} sm={{ span: 3, offset: 3 }} xs={{ span: 3, offset: 3 }}>
              {isAuthorized &&  <ModalAddTask 
                                  taskTextTitle={taskTextTitle} 
                                  handleInputTitleChange={handleInputTitleChange} 
                                  focusAfterEnterOnTitle={focusAfterEnterOnTitle} 
                                  handleInputPriorityChange={handleInputPriorityChange}
                                  onChange={onChange}
                                  value={value}
                                  priority={priority}
                                  clearState={clearState}
                                  addTaskClickOk={addTaskClickOk}
                                  closeTab={closeTab}
                                /> }
            </Col>

            <Col xl={{ span: 2, offset: 0 }} lg={{ span: 2, offset: 0 }} md={{ span: 1, offset: 0 }} sm={{ span: 3, offset: 0 }} xs={{ span: 4, offset: 0 }}>
              <ButtonLogin/>
            </Col>

          </Row>
        </Container>
     
    </Navbar>
  </div>
));

Header.propTypes = {
  taskTextTitle: PropTypes.string,
  handleInputTitleChange: PropTypes.func, 
  focusAfterEnterOnTitle: PropTypes.func,
  handleInputPriorityChange: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  priority: PropTypes.string,
  clearState: PropTypes.func, 
  addTaskClickOk: PropTypes.func,
  closeTab: PropTypes.func,
  isAuthorized: PropTypes.bool,
  isTasksExist: PropTypes.bool,
  changeFilter: PropTypes.func,
}

Header.defaultProps = {
  taskTextTitle: '',
  handleInputTitleChange: () => {},
  focusAfterEnterOnTitle: () => {},
  handleInputPriorityChange: () => {},
  onChange: () => {},
  value: '',
  priority: '',
  clearState: () => {},
  addTaskClickOk: () => {},
  closeTab: () => {},
  isTasksExist: false,
  changeFilter: () => {}
}

export default Header;
