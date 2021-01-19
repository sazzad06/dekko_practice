import React, { Component } from 'react';

class Form4 extends Component {
    constructor(){

        super();
        this.state={
            fname:"",
            lname:"",
            Email:"",
            Mobile:""
        }
    }
    onchangeHandler(event){
        var newname=event.target.name
        var newvalue=event.target.value
        this.setState({[newname]:newvalue})

    }
    render() {
        return (
            <div>
                <p>first name :{this.state.fname}</p>
                <p>last name : {this.state.lname}</p>
                <p> Email : {this.state.Email}</p>
                <p>mobile : {this.state.Mobile}</p>
                
                <form>
                <input onChange={this.onchangeHandler} name="fname" type="text" Placeholder="fname"></input><br></br>
                <input onChange={this.onchangeHandler} name="lname" type="text" Placeholder="lname"></input><br></br>
                <input onChange={this.onchangeHandler} name="Email" type="text" Placeholder="Email"></input><br></br>
                <input onChange={this.onchangeHandler} name="Mobile" type="text" Placeholder="Mobile"></input><br></br>
                <input  name="submit" type="submit" value="save now"></input>
                
                </form>
            </div>
        );
    }
}

export default Form4;