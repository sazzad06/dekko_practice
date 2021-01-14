import React,{Component} from 'react'


class State extends Component{

    constructor(){

        super()
        this.state={

        name: "sazzad",
        age:"30",
        weight:"80",
        village:"Chittagong",
        HD:"chittagong",
        Blood: "o positive"
        }

    }
     render(){

            return<div>
                <h1>Name={this.state.name}</h1>
                <h1>Name={this.state.age}</h1>
                <h1>Name={this.state.weight}</h1>
                <h1>Name={this.state.village}</h1>
                <h1>Name={this.state.HD}</h1>
                <h1>Name={this.state.Blood}</h1>
            </div>
        }
    }


export default State;