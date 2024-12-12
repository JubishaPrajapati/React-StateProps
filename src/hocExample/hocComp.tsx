import React, {useEffect, useState} from "react";
import withLoading from "./hoc";

function MyComp(props:any){
    return <div>hello, {props.name}</div>
}

const CompWithLoading= withLoading(MyComp);

function App() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => {
        setLoading(false); // After 2 seconds, set loading to false
      }, 2000);
    }, []);
  
    return (
      <div>
     <CompWithLoading loading={loading} name="Alice" /> 
    
{/* <MyComp name="Rita"/> */}

      </div>
    );
  }
  
  export default App;