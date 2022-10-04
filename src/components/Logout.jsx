import React, { Component } from 'react'

export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.setItem("remail","");
        localStorage.setItem("pid","undefined");
        localStorage.setItem("did","undefined");
        window.location.href="/";
    }
  render() {
    return (
      <div className="card col-sm-4 offset-sm-4">
        
        
             </div>
    )
  }
}
