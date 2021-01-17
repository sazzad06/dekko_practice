import React, { Component } from 'react';

class Form2 extends Component {
    constructor(){
        super();
        this.state={
            name:""
        }
    }

    
    onChangeHandler(event){
        var newname=event.target.value;
        this.setstate({name:newname})

    }
    onsubmithandler(){
        alert(this.state.name);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onsubmithandler}>
                <p>please input on form</p>
                    <p>{this.state.name}</p>
                    <input onChange={this.onChangeHandler}type="text" placeholder="your name" ></input><br></br>
                    <input type="submit" value="submit data" ></input>
                </form>    
            </div>
        );
    }
}

export default Form2;