import React from 'react';




import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

// ToDo List::

const ThingsToDo = [

  { task: '', id: 1 , completed: false },
  { task: '', id: 2 , completed: false },
  { task: '', id: 3 , completed: false },
  { task: '', id: 4 , completed: false },
  
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

addNewTodo = e => {
  e.preventDefault();
  this.setState({
    taskList: [
      ...this.state.taskList,
        { task: this.state.task,
        id: Date.now(),
        completed: false
      }
    ],
    task: ''
  })
}


toggleCompleted = id => {
  this.setState({
    taskList: this.state.taskList.map(thing => {
      if(thing.id === id) {
        return {
          ...thing,
          completed: !thing.completed
          }
        }
        return thing;
    })
  })
}



clearCompleted = e => {
  e.preventDefault();
  this.setState({
    taskList: this.state.taskList.filter(todo => !todo.completed)
  })
}


  
  render() {
    return (
      <div className="listInfo">

      <div>
        <h2>JOT!</h2>
      </div>


    <TodoList 
        info={this.state.taskList}
        toggleCompleted={this.toggleCompleted}
    />

      <div className="inputs">

    <TodoForm 
        task={this.state.task}
        addNewTodo={this.addNewTodo}
        handleChanges={this.handleChanges}
        clearCompleted={this.clearCompleted}
        
        
    />
      </div>
      
    <Todo/>

        
      </div> // main div
    );
  }
}

export default App;
