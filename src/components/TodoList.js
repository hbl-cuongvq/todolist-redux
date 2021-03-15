import React, {Component} from 'react';
import { store } from '../redux/store';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }
  componentWillMount(){
    store.subscribe(()=>{
      this.setState({
        items: store.getState().items ? store.getState().items : [],
      })
    });
  }
  render(){
    var items = [];
    this.state.items.forEach((item,index)=>{
        items.push(
          <TodoItem
            key={index}
            index={index}
            message={item.message}
            completed={item.completed}
          />
        )
      });
    if(!items.length){
      return(
        <div>
          <p>Please add task to do.</p>
        </div>
      );
    }
    else{
      return(
        <div>
          {items}
        </div>
      );
    }
  }
}

export default TodoList;
