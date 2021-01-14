import React,{Component} from 'react'
class condition1 extends Component{

    constructor(){
        super()
       this.state={
           login:true
       }
    }
    render(){
      if (this.state.login==true)
      {
          return <button>logout button</button>

      }
      else{
          return<button>login button</button>
      }
    }
}
export default condition2