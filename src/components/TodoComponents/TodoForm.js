import React from 'react';

function TodoForm(props) {
  return (
    
    <form onSubmit={props.addNewTodo}>
      <div>

        <div class="input">
          <label for="tasks">Today's Thoughts...</label>
      
    <input
        value={props.task}
        type="text"
        name="task"
        // placeholder="Enter today's goals..."
        autocomplete="off"
        onChange={props.handleChanges}
    />
        </div>
      
      </div> 
      {/* ^main div */}

    <button type="add">Track my thought!</button>
    <button type="clear">Scratch that.</button>



    </form>
  );
}

export default TodoForm;