import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class ReactDOM1 extends Component {
     
    myFun(){
        var container=document.getElementById("id1");
        var element=<h1>i am from ReactDOM</h1>
        var callback=function(){
            alert("this is callback function");
        }
        ReactDOM.render(element,container,callback);


    }

    render() {
    
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="id1">This is reactDOM</h1>
            </div>
        );
    }
}

export default ReactDOM1;