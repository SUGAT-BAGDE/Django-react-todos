import React from 'react'
import { Link } from "react-router-dom";

export const Todo = (props) => {
    return (
        <>
            <div>
                <h4>{props.todo.title}</h4>
                <p>{props.todo.desc}</p>
                <div>
                    <button className="btn btn-danger btn-sm" onClick={()=>{props.onDelete(props.todo.id)}}>Done</button>
                    <Link className="btn btn-primary btn-sm mx-2" to={`/edittodo/${props.todo.id}`}>Edit</Link>
                </div>
            </div>
            <hr/>
        </>
    )
}
