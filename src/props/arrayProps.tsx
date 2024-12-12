import React, {Component} from "react";

interface Person{
    name: string;
    id: number;
}

interface PersonArrInterface{
    people: Person[];
}

class ArrayProps extends Component<PersonArrInterface>{
    render(){
        return(
            <div>
                <h3>The values from array props are:</h3>
                {this.props.people.map((x) => (
                    <div key = {x.id}>{x.name}</div>
                ))}
            </div>
        )
    }
}
export default ArrayProps;