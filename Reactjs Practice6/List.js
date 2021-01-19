import React, { Component } from 'react';

class List extends Component {

    mydatachild(data){

        return <option>{data}</option>
    }
    render() {
        const country=['Bangladesh','India','china','Canada']
        const dataitem=country.map(this.mydatachild)        
        return (
            <div>
                <select>
                    {dataitem}
                 </select>   
                
            </div>
        );
    }
}

export default List;