import React,{Component} from 'react'

class NestedState extends Component{

    constructor(){

        super()
        var employeeInfo={

        name: "sazzad",
        age:["30","80","50","60"],
        weight:{class7:70,
            class8:80,
            class9:50

        },
        village:"Chittagong",
        HD:"chittagong",
        Blood: "o positive"
        }
        
        console.log()
        this.state = employeeInfo;

    }
     render(){

            return<div>
                <h1>Name={this.state.age[2]}</h1>
                <h1>weight={this.state.weight.class7}</h1>
                <h1>village={this.state.village}</h1>
                <h1>HD={this.state.HD}</h1>
                <h1>Blood={this.state.Blood}</h1>
            </div>
        }
    }


export default NestedState;