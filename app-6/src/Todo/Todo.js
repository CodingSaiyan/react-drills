import React from 'react';

function Todo(props) {
    let display = props.list.map((item, i) => {
        return <h2 key={i}>{item}</h2>
    })
    return (
        <div>
        {display}
        </div>
    )
}

export default Todo