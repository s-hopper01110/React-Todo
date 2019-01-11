
import React from 'react';
import './Todo.css'
// import { list } from 'postcss';

function Todo (props) {
    // const{ toggleCompleted, lists } = props;

    

    
    return (

        <p 
        
        className={ 'thing.completed' ? 'completed' : null }
        style={{ textDecoration: props.lists.completed ? 'line-through' : '' }}
        onClick={ e => props.toggleCompleted(props.lists.id)}
    
        >
        
        {props.lists.task}
         

        </p>

        
    )
}

export default Todo;