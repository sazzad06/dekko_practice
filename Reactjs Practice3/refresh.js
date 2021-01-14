import React,{Component} from 'react'

class refresh extends Component{
   constructor(){
       super();
       this.refershNow=this.refershNow.bind(this);
   }

    refershNow(){

        this.forceUpdate();
    }
 render(){

    return(

       <div>
           <button onclick={this.refreshNow}>Refresh Button</button>
           <h1>{Math.random()}</h1>

       </div>

    )
 }


}