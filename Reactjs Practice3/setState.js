import React,{Component} from 'react'

class setState extends Component{
  constructor(){
    super()
    this.state={
    name:"sazzad",
    age:70

    }
}
    ChangeName(a){
        this.setState({name:a})
        

  }
    render(){

        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.ChangeName.bind(this,"Avee")}>change your name</button>
       
            </div>
    }


}
export default setState