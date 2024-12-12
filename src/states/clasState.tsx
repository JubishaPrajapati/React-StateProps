import React, {Component} from "react";

interface CounterState{
    count: number;  //count is of type number 
}

class CounterinClass extends Component<{}, CounterState>{
    state: CounterState={    //obj literal
        count:0
    }

    increment =()=>{
        this.setState({count: this.state.count +1});
    }
    decrement=() =>{
        this.setState({count: this.state.count -1});
    }

    render(){
        return(
            <div>
                <h3>Counter app with classes with state</h3>
                <p>Count: {this.state.count}</p>       {/*initial state is zero*/}
                <button onClick={this.increment}>Increase</button>
                <button onClick={this.decrement}>Decrease</button>
            </div>
        )
    }
}
export default CounterinClass;