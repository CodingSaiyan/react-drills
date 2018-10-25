import React from 'react';
import Todo from "./Todo"

export default function List(props) {
    let list = props.tasks.map( (todo, i) => {
        return (
            <Todo key={i} task={todo} />
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}