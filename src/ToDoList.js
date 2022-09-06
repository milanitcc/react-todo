import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todoList, handleToggle, handleFilter}) => {
    return (
        <div>
            {todoList.map(todo => {
                return (
                    <ToDo todo={todo} key={todo.id} handleToggle={handleToggle} />
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;