import React from 'react';
import {completeTodo, deleteTodo} from '../redux/actions';
import { store } from '../redux/store';

const TodoItem = (props) => {
  const onItemClick = (e) => {
    e.preventDefault();
    store.dispatch(completeTodo(props.index));
  }
  const onDeleteClicked = (e) => {
    e.preventDefault();
    store.dispatch(deleteTodo(props.index));
  }

    return(
      <div>
        <label onClick={onItemClick} style={{textDecoration: props.completed? 'line-through':'none', cursor: 'pointer'}}>{props.message.trim()}</label>
        <label onClick={onDeleteClicked} style={{textDecoration: 'none', cursor: 'pointer'}}> [x]</label>
      </div>
    );
  
}

export default TodoItem;
