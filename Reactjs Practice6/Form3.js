import React, { Component } from 'react';

class Form3 extends Component {

    constructor(){
        super()
        this.state={

          fname:"",
          lname:"",
          Email:"",
          Mobile:""

        }
    }
    onchangeHandler(event){
        var inputname=event.target.name
        var inputvalue=event.target.value
        this.setState({[inputname]:inputvalue})
        
        if(inputname==="fname"){
            var namepattern=/^[A-Za-z]+$/;
            if(!namepattern.test(inputvalue)){
                   this.setState({fname:"fname is invalid"});
                
            }

        }
        if(inputname==="lname"){
            var namepattern=/^[A-Za-z]+$/;
            if(!namepattern.test(inputvalue)){
                this.setState({lname:"lname is invalid"});
             
         }



        }
        if(inputname==="Email"){
            var emailpattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
            if(!emailpattern.test(inputvalue)){
                this.setState({Email:"Email is invalid"});
            
        }
    }
        if(inputname==="Mobile"){
            if(!Number(inputvalue))
            this.setState({Mobile:"this is not valid"});
            
        }

    }
    
    render()
     {
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
    

export default Form3;