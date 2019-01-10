import React from 'react';

function TodoForm(props) {
  return (
    <form onSubmit={props.addNewTodo}>
      
      <input
        value={props.task}
        type="text"
        name="task"
        placeholder="Goal: Stay Focused! "
        onChange={props.handleChanges}
      />

    <button type="add">Track my thought!</button>
    <button type="clear">Scratch that.</button>



    </form>
  );
}

export default TodoForm;