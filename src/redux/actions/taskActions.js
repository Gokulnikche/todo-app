export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await fetch('/api/tasks');
    const data = await response.json();
    dispatch({ type: FETCH_TASKS_SUCCESS, payload: data });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
};
