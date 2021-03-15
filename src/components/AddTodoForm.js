import React, {Component} from 'react';
import {addTodo, clearTodo} from '../redux/actions';
import { store } from '../redux/store';

class AddTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      message: ''
    }
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    var message = this.state.message;
    if(message){
      store.dispatch(addTodo(message));
    }
    this.setState({
      message: ''
    });
  }
  onMessageChanged = (e) => {
    this.setState({
      message: e.target.value
    });
  }
  onClearButtonClicked= (e) =>{
    e.preventDefault();
    store.dispatch(clearTodo());
  }
  render(){
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" placeholder="New task" onChange={this.onMessageChanged} value={this.state.message}></input>
        <input type="submit" value="Add"></input>
        <input type="button" onClick={this.onClearButtonClicked} value="Clear All"></input>
      </form>
    );
  }
}

export default AddTodoForm;
