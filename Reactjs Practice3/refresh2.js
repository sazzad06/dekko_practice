import React,{Component} from 'react'
class refresh2 extends Component{
    constructor(){

        super();
        this.refreshNow=this.refreshNow.bind(this);
    }
    
    refreshNow(){

        this.forceUpdate();
    }


    render (){

        return(
         <div>
         <button onClick={this.refreshNow}>Refresh button</button>
         <h1>{Math.random()}</h1>
         </div>

        )
    }
}
export default refresh2