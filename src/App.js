import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

// ToDo List::

const ThingsToDo = [

  { task: 'Study', id: 1 , completed: false },
  { task: 'Work on Bullet Journal', id: 2 , completed: false },
  { task: 'Take dogs a bath', id: 3 , completed: false },
  { task: 'Cook Dinner', id: 4 , completed: false },

]


// you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      taskList: ThingsToDo,
      // inputText: 'hello'
      task:''
    }
  }

handleChanges = e => {
  this.setState({ [e.target.name]: e.target.value })
}




  
  render() {
    return (
      <div>
      <TodoList info={this.state.taskList}/>
      <TodoForm addNewTodo={this.addNewTodo}/>
        
      </div>
    );
  }
}

export default App;
