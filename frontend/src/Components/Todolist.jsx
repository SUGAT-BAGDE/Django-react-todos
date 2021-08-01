import { Todo } from "./Todo";
import React, { Component } from 'react'

export class Todolist extends Component {
    componentDidMount(){
        this.props.refresstodos()
    }

    render() {
        return (
            <div className="container">
                <h3 className="text-center">Todo List</h3>
                {this.props.todos.length===0? <h4>No Todo To Display</h4>:
                    this.props.todos.map((todo, index)=>{
                    return <Todo todo={todo} onDelete={this.props.deletetodo} key={index}/>
                })
                }
            </div>
        )
    }
}

