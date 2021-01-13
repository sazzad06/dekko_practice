import React,{Component} from 'react'

class NestedState extends Component{

    constructor(){

        super()
        var employeeInfo={

        name: "sazzad",
        age:"30",
        weight:"80",
        village:"Chittagong",
        HD:"chittagong",
        Blood: "o positive"
        }
        
        console.log()
        this.state = employeeInfo;

    }
     render(){

            return<div>
                <h1>Name={this.state.age}</h1>
                <h1>Name={this.state.weight}</h1>
                <h1>Name={this.state.village}</h1>
                <h1>Name={this.state.HD}</h1>
                <h1>Name={this.state.Blood}</h1>
            </div>
        }
    }


export default NestedState;