import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="your name" ></input><br></br>
                    <input type="text" placeholder="your name" ></input><br></br>
                    <input type="submit" value="submit data" ></input>
                </form>    
            </div>
        );
    }
}

export default Form;