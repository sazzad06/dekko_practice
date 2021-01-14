import React,{Component} from 'react'
class setState2 extends Component{
    constructor(){
      super()
      this.state={
      name:"sazzad",
      age:70
  
      }
  }
  changeName(a){
      this.setState({age:70})

  }
  render(){

    return <div>
        <button onClick={this.changeName.bind(this,"avee")}></button>
        </div>
  }
}
export default setState2;