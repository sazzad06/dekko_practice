import React,{Component} from 'react'

class Practice extends Component{
     doThisFromClass(a){
        alert(a);
    }
    doThisFromClass2(b){
        alert(b)
    }
   render(){
    
        return <div>
            <button onClick={this.doThisFromClass.bind(this,"this from function1")}>click me</button>
            <button onClick={this.doThisFromClass2.bind(this,"this from function2")}>click me</button>
            
        <h1> this is my practice:{this.props.name}</h1>
        </div>
   }
}
export default Practice