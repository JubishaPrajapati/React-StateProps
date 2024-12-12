import React from 'react';
import Parent from './props/parent';

import CounterinClass from './states/clasState';
import CounterinFunc from './states/funcState';
import NumberListinArray from './states/arrayState';
import UserinObj from './states/objState';
import GreetingProp from './props/propsGreet';
import BasicPropsClass from './props/basicPropsClass1';
import DefaultProps from './props/defaultProps';
import ArrayProps from './props/arrayProps';
import FuncProps from './props/funcProp';
import MyComponent from './stateAndProps';
import AxiosPost from './fetching/axiosPost';


import './App.css';

const App: React.FC = () => {

  //for func as prop
  const handleBtnClick = () => {
    alert("Button was clicked");
  };


  return (
    <div>
      {/* <h1>Welcome to Counter app</h1>
      <CounterinClass/>
      <CounterinFunc/>
      <NumberListinArray/>
      <UserinObj/>
      <GreetingProp name= "Rita"/> */}

      {/*class based component props and states */}
      {/* <MyComponent name="John Doe" /> */}

      {/*class based component props */}
      {/* <BasicPropsClass  grade={5}  school= "Paragon Public"  />
      <DefaultProps />
      <ArrayProps people={[{id:1 , name: "Abhishek"},{id:2, name:"Riya"}, {id:3, name:"Hishi"}]}/>
      <FuncProps onClick={handleBtnClick}/> */}

      {/* <Parent /> */}
      <AxiosPost />

    </div>
  )
}
export default App;


