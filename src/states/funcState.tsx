import React, {useState} from "react";

const CounterinFunc: React.FC=()=>{
    const [count,setCount]= useState<number>(0);

    return(
        <div>
            <h3>Counter app with function with state</h3>
            <p> Current Count: {count}</p>
            <button onClick={()=> setCount(count+1)}>Increase</button>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
        </div>
    )
}
export default CounterinFunc;