import React,{Component} from 'react'

class condition3 extends Component{

 constructor(){
     super()
    this.state={
        login:true
    }
 }
 render(){

    return(
        this.state.login?
        (
            <h1>is true</h1>
        )
        :
        (
           <h1>is false</h1> 
        )
 
        }
    }