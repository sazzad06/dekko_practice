import React, { Component } from 'react';
import reactDOM from 'react-dom';
class ReactDom3 extends Component {
     
    mypic(){

        var imgid =document.getElementById("imgid");
        reactDOM.findDOMNode(imgid).src="https://unsplash.com/photos/6MNmDi1hc_Y";
    }

    render() {
        return (
            <div>
                <button onClick={this.mypic}>Change image</button><br></br>
                <img id="imgid"src="https://unsplash.com/photos/xsGxhtAsfSA"></img>
            </div>
        );
    }
}

export default ReactDom3;