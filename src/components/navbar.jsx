import React, { Component } from "react";

class NavBar extends Component{
    state = {
        webSiteName: "SortMaster"
    }

    render(){
        return (
            <nav class="navbar navbar-expand-sm bg-light">
                <a class="navbar-brand">{this.state.webSiteName}</a>
            </nav>
        )
    }
}

export default NavBar;