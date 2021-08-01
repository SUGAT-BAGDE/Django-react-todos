import React,{ useState } from 'react'
import axios from "axios";

export const Addtodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault()
        if (title==="" || desc==="") {
            alert("Title or Description Cannot Be Blank")
            return
        }
        axios({
            url:"/addtodo",
            method:"post",
            headers:{
                'fromreact':"yes"
            },
            data:JSON.stringify({title:title, desc:desc})
        }).then((res)=>{
            props.setTodos(res.data)
        }).catch((err)=>{
            console.warn(err);
        })
        setTitle("")
        setDesc("")
    }

    return (
        <div className="container">
            <h2 className="text-center my-3">Add a Todo</h2>
            <form className="my-2" onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Add Todo</button>
        </form>
        </div>
    )
}
