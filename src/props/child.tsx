import React, { Component } from 'react';

interface ChildProps {
  sendMessage: (message: string) => void;
}

class Child extends Component<ChildProps> {
  sendMessageToParent = () => {
    this.props.sendMessage('Hello from Child!');   //passing hello as arg in func sendMessage func that is passed from parent comp
  };

  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <button onClick={this.sendMessageToParent}>Send Message</button>
      </div>
    );
  }
}

export default Child;
