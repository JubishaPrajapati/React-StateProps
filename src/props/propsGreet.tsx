import React from "react";

interface GreetingInterface{
    name: string;
}

const GreetingProp : React.FC<GreetingInterface> =({name})=>{
    return <h1>Hello, {name}</h1>
}
export default GreetingProp;