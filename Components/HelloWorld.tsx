import React from 'react';

function HelloWorld(props)
{
  return (
    <div>
        <div>Hello, {props.name}</div>
        <button onClick={()=>props.myEventHandler(props.name)}>Click Me </button>
    </div>
  )
};


export default HelloWorld;