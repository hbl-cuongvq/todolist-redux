//libraries
import React from 'react';
//components
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import './App.css'


const App = () => {
    return (
      <div className = 'container'>
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    );
  
}

export default App;
