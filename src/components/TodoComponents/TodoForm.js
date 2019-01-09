import React from 'react';

function TodoForm(props) {
  return (
    <form>
      
      <input
        value={props.inputText}
        type="text"
        placeholder="Goal: Stay Focused! "
        onChange={props.handleChanges}
      />

    <button type="add">Track my thought!</button>
    <button type="clear">Scratch that.</button>



    </form>
  );
}

export default TodoForm;