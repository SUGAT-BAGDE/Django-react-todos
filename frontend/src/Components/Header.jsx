import React from 'react'
import { Link } from "react-router-dom";

export const Header = (props) => {
    let mystyle = {
        cursor:"pointer",
        border:"0px",
        outline:"none",
        background:"rgba(0,0,0,0)"
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Todo List</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <button className="nav-link" onClick={props.refresstodos} style={mystyle}>Refresh Todos</button>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
