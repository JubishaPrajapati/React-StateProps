import React from "react";

function withLoading(Component:any){
    return function WithLoading({loading,...props}:any){
        return loading? <div>Loading...</div> : <Component {...props}/>;
    }
}
export default withLoading;