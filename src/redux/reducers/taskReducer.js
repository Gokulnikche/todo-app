import { ADD_TASK, DELETE_TASK, FETCH_TASKS_SUCCESS } from '../actions/taskActions';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: state.length + 1, ...action.payload }];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case FETCH_TASKS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default taskReducer;
