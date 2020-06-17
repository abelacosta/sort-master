import React, { Component } from "react";

class NavBar extends Component{
    state = {
        webSiteName: "Sort Master"
    }

    styles = {
        fontSize: 28
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <h1 style={this.styles} className="navbar-brand">{this.state.webSiteName}</h1>
            </nav>
        )
    }
}

export default NavBar;