import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, EDIT_TASK_TITLE, EDIT_TASK } from '../constants';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list' });

if (!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: [],
  }
}

const tasks = (state = TASKS.tasks, { id, text, textTitle, isCompleted, type, date, priority, newTaskTitle, newTask }) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
          textTitle,
          isCompleted,
          date,
          priority
        }
      ];
    case REMOVE_TASK:
        return [...state].filter(task => task.id !== id);
    case COMPLETE_TASK:
        return [...state].map(task => {
          if(task.id === id) {
            task.isCompleted = !task.isCompleted;
          }
          return task;
        });
    case EDIT_TASK_TITLE:
      return [...state].map(task => {
        if(task.id === id) {
          task.textTitle = newTaskTitle;
        }
        return task;
      });
    case EDIT_TASK:
        return [...state].map(task => {
          if(task.id === id) {
            task.text = newTask;
          }
          return task;
        });
    default:
      return state;
  }
}

export default tasks;

