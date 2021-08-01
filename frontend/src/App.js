import { Header } from "./Components/Header";
import { Addtodo } from "./Components/Addtodo";
import { Todolist } from "./Components/Todolist";
import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { About } from "./Components/About";
import EdiTodo from "./Components/EditTodo";

function App() {
  const [todos, setTodos] = useState([])

  const refresstodos = () =>{
    axios({
      method:'get',
      url:'/allTodos',
      headers:{
        'fromreact':"yes"
      }
    }).then((res)=>{
      setTodos(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  const deletetodo = (id) => {
    axios({
      method:'get',
      url:`/deletetodo/${id}`,
      headers:{
        'fromreact':"yes"
      }
    }).then((res)=>{
      if (res.data.message === null) {
        console.log(res)
        return
      }
      setTodos(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (

    <Router>
      <Header refresstodos={refresstodos}/>
      <div>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/edittodo/:id">
            <EdiTodo/>
          </Route>
          <Route exact path="/">
            <Addtodo setTodos={setTodos}/>
            <Todolist todos={todos} setTodos={setTodos} refresstodos={refresstodos} deletetodo={deletetodo}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
