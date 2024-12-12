import React, {Component} from "react";

interface FuncPropsInterface{
    onClick: ()=> void;    //no return vaks
}

class FuncProps extends Component<FuncPropsInterface>{
    render(){
        return(
            <div>
                <h3>This button is from function as props:-</h3>
                <button onClick={this.props.onClick}>Click Here!</button>
            </div>
        )
    }
}
export default FuncProps;