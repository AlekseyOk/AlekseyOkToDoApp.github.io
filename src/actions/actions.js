import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, CHANGE_FILTER, EDIT_TASK_TITLE, EDIT_TASK } from '../constants';

export const addTask = (id, text, textTitle, isCompleted, date, priority) => ({
  type: ADD_TASK,
  id,
  text,
  textTitle,
  isCompleted,
  date,
  priority
});

export const removeTask = id => ({
  type: REMOVE_TASK,
  id
});

export const completeTask = id => ({
  type: COMPLETE_TASK,
  id
});

export const changeFilter = activeFilter => ({
  type: CHANGE_FILTER,
  activeFilter,
})

export const editTaskTitle = (id, newTaskTitle) => ({
  type: EDIT_TASK_TITLE,
  id,
  newTaskTitle
})

export const editTask = (id, newTask) => ({
  type: EDIT_TASK,
  id,
  newTask
})