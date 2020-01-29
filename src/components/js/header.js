import React, { Component } from "react";


class Header extends Component{
    render(){
        return (
           <header className="jumbotron">
               <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
           </header>
        )
    }
}
export default Header;