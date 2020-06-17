import React, { Component } from "react";

class NavBar extends Component{
    state = {
        webSiteName: "Sort Master"
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <h1 className="navbar-brand">{this.state.webSiteName}</h1>
            </nav>
        )
    }
}

export default NavBar;