import React from 'react';

export default function Todo (props){
        return (
            <div className="App">
                <p>{props.task}</p>
            </div>
        )
}