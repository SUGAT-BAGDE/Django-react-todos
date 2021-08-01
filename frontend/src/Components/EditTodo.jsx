import React,{ Component} from 'react'
import {withRouter, Redirect} from 'react-router-dom'
import axios from "axios";

class EditTodo extends Component {
    constructor(props){
        super(props)
        this.state = {
            title : "",
            desc : "",
            redirect: false
        }
        this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault()
        if (this.state.title==="" || this.state.desc==="") {
            alert("Title or Description Cannot Be Blank")
            return
        }
        axios({
            url:`/edittodo/${this.props.match.params.id}`,
            method:"post",
            headers:{
                'fromreact':"yes"
            },
            data:JSON.stringify({title:this.state.title, desc:this.state.desc})
        }).then((res)=>{
            this.setState({redirect:true})
        }).catch((err)=>{
            this.setState({redirect:true})
            console.warn(err);
        })
    }


    componentDidMount(){
        axios({
            method:'get',
            url:`/gettodo/${this.props.match.params.id}`,
            headers:{
                'fromreact':"yes"
            }
          }).then((res)=>{
              try{
                  if (res.data.message === "404 not found"){
                      this.setState({redirect:true})
                      return
                  }
              }catch(err){
              }
              this.title = res.data.title
              this.desc = res.data.desc
              this.setState({ title: res.data.title, desc:res.data.desc})
          }).catch((err)=>{
            console.log(err)
          })
    }
    render() {
        return (
            <>
            {this.state.redirect===true? <Redirect to="/"/>:
                <div onSubmit={this.submit}>
                    <div className="container">
                    <h2 className="text-center my-3">Edit Todo</h2>
                    <form className="my-2">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Todo Title</label>
                        <input type="text" value={this.state.title} onChange={(e)=>{this.setState({ title: e.target.value})}} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Todo Description</label>
                        <input type="text" value={this.state.desc} onChange={(e)=>{this.setState({ desc: e.target.value})}} className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Done</button>
                </form>
                </div>
                </div>
            }
        </>
        )
    }
}


export default withRouter(EditTodo);