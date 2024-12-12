import React, { Component } from "react";

interface MyComponentProps {
    name: string;
}

interface MyComponentState {
    age: number;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
    constructor(props: MyComponentProps) {   //interface is passed as props:MycompProps
        super(props);
        this.state = {
            age: 30,
        };
    }

    render() {
        return (
            <div>
                <h3>This is from using both props and states</h3>
                <p>{this.props.name}</p>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }
}

export default MyComponent;
