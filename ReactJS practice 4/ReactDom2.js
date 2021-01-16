import React, { Component } from 'react';
import reactDOM from 'react-dom';
class ReactDom2 extends Component {

    myfun2(){
            
        var container=document.getElementById("id2");
        var element=<h1>this is changed react</h1>
        var callback1=function(){
            alert("this is alert function")
        }
        reactDOM.render(element,container,callback1);

    }

      render() {

       

        return (
            <div>
                <button onClick={this.myfun2}>please click</button>
                <h1 id="id2">This is react code</h1>
            </div>
        );
    }
}

export default ReactDom2;