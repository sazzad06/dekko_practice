import react from 'react';

function Button(props){
    function DoThis(a)
    {
        alert(a);

    }


return(

<div>
    <button onClick={DoThis.bind(this,"this from function")}>Click me</button>
<h1>name:{props.name} and age:{props.age}</h1>
</div>
);


}
export default Button;