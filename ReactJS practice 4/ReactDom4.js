import React, { Component } from 'react';
import reactDOM from 'react-dom';

class ReactDom4 extends Component {
    myfunc(){
        var imgid=document.getElementById("imgid");
        reactDOM.findDOMNode(imgid).src="https://unsplash.com/photos/QJykaAsWhco";



    }
    render() {
        return (
            <div>
                <button onClick={this.myfunc()}>click my img</button>
                <img id="imgid"src="https://unsplash.com/photos/83ypHTv6J2M"></img>
            </div>
        );
    }
}

export default ReactDom4;