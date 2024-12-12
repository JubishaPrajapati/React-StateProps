import React, {Component} from "react";

interface BasicClassInterface{
    grade:number;
    school: string;
}

class BasicPropsClass extends Component<BasicClassInterface>{
    render(){
        return(
            <div>
                <h4>I am basic props where val is passed from parent comp and output is as below:-</h4>
                <p>Hello, I study in grade: { this.props.grade} and I am from {this.props.school} school. </p>
            </div>
        )
         
    }
}

export default BasicPropsClass;