import React from 'react';

const ToDoItem = (props) => {
    return (props.tasks.map( item => <li key={item.id}>{item.task}</li>))
}



export default ToDoItem;
