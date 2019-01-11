// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
// import Todo from './components/TodoComponents/Todo';

function TodoList(props) {

    return (
    <div>
        {props.info.map(lists => {
            return <Todo toggleCompleted={props.toggleCompleted} lists={lists}/>
        })}

     </div>
        )
    }

    export default TodoList;