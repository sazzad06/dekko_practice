import react from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
 
const alertMe=(a)=>{

    alert(a)
}



function bootstrap (){


return (
<button  className="btn btn-primary m-5"> Click the button</button>

    );


    
}


const Arrow=(props)=>{

    return (
        <button onclick={alert.bind(this,"This alert for arrow function")} className="btn btn-light"> Click the arrow button</button>

    );

}    

export default Arrow;
