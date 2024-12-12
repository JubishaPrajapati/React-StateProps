import React, {Component} from "react";

interface DefaultPropsInterface{
    name:string;
    address?:string;  //optional props
}
class DefaultProps extends Component<DefaultPropsInterface>{
    static defaultProps={   //default props
        name:"Ram",
        address:"Thamel",
    }

    render(){
        return <p>Hello, I am testing default props by passing name : {this.props.name} and address: {this.props.address} </p>;
    }
}
export default DefaultProps;