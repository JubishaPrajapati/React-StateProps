import React, {Component} from "react";
import Child from "./child";

//parent to child props pass example by using class comp in app.tsx as well
  interface ParentState {
    message: string;
  }
  
  class Parent extends Component<{}, ParentState> {
    constructor(props: {}) {
      super(props);
      this.state = {
        message: "I am msg before state change",
      };
    }
    
    //callback function
    handleMessageChange = (message: string) => {
      console.log({message});
      this.setState({ message });
    };
  
    render() {
      return (
        <div>
          <h1>Parent Component</h1>
          <p>Message from child: {this.state.message}</p>
          <Child sendMessage={this.handleMessageChange} />
        </div>
      );
    }
  }
  
  
export default Parent ;
