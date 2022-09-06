import React from 'react';

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div className={todo.complete ? 'strike' : ''} id={todo.id} onClick={handleClick}>
            {todo.task}
        </div>
    )
}

export default ToDo;