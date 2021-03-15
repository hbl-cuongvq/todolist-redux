import {combineReducers} from 'redux';
import { ActionType } from '../constants/constants';

function todos(state = [], action){
  var newState = state;
  switch (action.type) {
    case ActionType.ADD_TODO:
      newState.push({
        message: action.message,
        completed: false
      });
      break;
    case ActionType.COMPLETE_TODO:
      newState[action.index].completed = !newState[action.index].completed;
      break;
    case ActionType.DELETE_TODO:
      newState.splice(action.index, 1);
      break;
    case ActionType.CLEAR_ALL:
      newState = [];
      break;
    default:
      break;
  }
  return newState;
}

export const todoApp = combineReducers({
  items: todos,
});
