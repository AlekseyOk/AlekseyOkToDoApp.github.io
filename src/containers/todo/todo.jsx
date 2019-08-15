import React, { Component } from 'react';
import { connect } from "react-redux"
import { addTask, removeTask, completeTask, changeFilter, editTaskTitle, editTask } from "../../actions/actions"
import ToDoListActive from '../../components/todo-list/todo-list-active';
import ToDoListComplete from '../../components/todo-list/todo-list-complete';
import { withAuth } from "../../components/auth/auth";
import Header from '../../components/header/header';
import { getDate, filterTasks } from '../../functions'

import './todo.css';

const ToDo = withAuth(class extends Component {

  state = {
    taskText: '',
    taskTextTitle: '',
    priority: 'no priority'
  }

  handleInputPriorityChange = (priority) => {
    this.setState({
      priority: priority,
    })
  }
  
  handleInputChange = ({ currentTarget: { value } }) => {
    this.setState({
      taskText: value,
    })
  }
  handleInputTitleChange = ({ currentTarget: { value } }) => {
    this.setState({
      taskTextTitle: value,
    })
  }

  focusAfterEnterOnTitle = ({ key }) => {
    if (key === 'Enter') {
     document.querySelector('#inputId').focus();
    }
  }

  addTaskClickOk = () => {
    const { taskText, taskTextTitle, priority } = this.state;
      const { addTask } = this.props;

      addTask((new Date()).getTime(), taskText, taskTextTitle, false, getDate(), priority);

      this.setState({
        taskText: '',
        taskTextTitle: '',
        priority: 'no priority'
      });
  }

  clearState = () => {
    this.setState({
      taskText: '',
      taskTextTitle: '',
      priority: 'no priority'
    })
  }

  getActiveTasksCounter = (tasks) => tasks.filter(task => !task.isCompleted).length;
  
  getCompleteTasksCounter = (tasks) => tasks.filter(task => task.isCompleted).length;

  render() {
    const { taskText, taskTextTitle, priority } = this.state;
    const { tasks, removeTask, completeTask, filters, changeFilter, editTaskTitle, editTask, isAuthorized } = this.props;
    const isTasksExist = tasks && tasks.length > 0;
    const filteredTasks = filterTasks(tasks, filters);
    const taskCounterActive = this.getActiveTasksCounter(tasks);
    const taskCounterComplete = this.getCompleteTasksCounter(tasks);

    return (
      <React.Fragment>
      <Header 
      taskTextTitle={taskTextTitle} 
      handleInputTitleChange={this.handleInputTitleChange} 
      focusAfterEnterOnTitle={this.focusAfterEnterOnTitle}
      handleInputPriorityChange={this.handleInputPriorityChange} 
      onChange = {this.handleInputChange} 
      value = {taskText}
      priority={priority}
      clearState={this.clearState}
      addTaskClickOk={this.addTaskClickOk}
      closeTab={this.closeTab}
      changeFilter={changeFilter}
      activeFilter={filters}
      isTasksExist = {isTasksExist}
      />
      <div className="todo-wrapper">
      { isTasksExist || <h2 className="noTasks"> No Tasks</h2>}
      { isAuthorized || <h2 className="plsLogin"> Please, Login</h2>}
      <h4 className={taskCounterActive ? "titleCounter" : 'none'} >{`To Do (${taskCounterActive})` }</h4>
        {isTasksExist && <ToDoListActive 
          editTask={editTask} 
          editTaskTitle={editTaskTitle} 
          tasksList={filteredTasks} 
          removeTask={removeTask} 
          completeTask={completeTask}
          />}
      <h4 className={taskCounterComplete ? "titleCounter" : 'none'} >{`Completed (${taskCounterComplete})`}</h4>
        {isTasksExist && <ToDoListComplete 
          editTask={editTask} 
          editTaskTitle={editTaskTitle} 
          tasksList={filteredTasks} 
          removeTask={removeTask} 
          completeTask={completeTask}/>}
      </div>
      </React.Fragment>
    );
  }
});

const mapStateToProps = store => {
  return {
    tasks: store.tasks,
    filters: store.filters
  }
}

export default connect(mapStateToProps,{addTask, removeTask, completeTask, changeFilter, editTaskTitle, editTask})(ToDo);
