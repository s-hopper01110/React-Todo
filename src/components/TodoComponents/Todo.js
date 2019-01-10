
import React from 'react';
import './Todo.css'

function Todo (props) {
    const{ toggleCompleted, thing } = props;

    

    
    return (

        <p 
        
        className={`thing.completed ? 'completed' : null`}
        // style={{ textDecoration: props.thing.completed ? 'line-through' : '' }}
        onClick={ e => toggleCompleted(thing.id)}
    
        >

        {/* {props.thing.task} */}

        </p>

        // <div>
        
        // {/* {props.thing.task} */}
        
        // </div>
    )
}

export default Todo;