import React, {useState} from "react";

const NumberListinArray : React.FC =()=>{
    const [num,setNum]= useState<number[]>([]);

    const addNum= ()=>{
        setNum([...num,num.length+1]);   //... is used to copy all ele of existing arr into new arr
    }

    return(
        <div>
            <h3>Number list with stateArray</h3>
            <button onClick={addNum}>Add Numbers</button>
            <ul>
                {num.map((numbers,index)=>(
                    <li key={index}> {numbers}</li>     //key is speacial prop that helps react identify which items has been changed added or removed  
                ))}
            </ul>
            
        </div>
    )
}
export default NumberListinArray ;

