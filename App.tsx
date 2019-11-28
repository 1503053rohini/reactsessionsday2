import React from 'react';
import HelloWorld from './Components/HelloWorld';
import  HelloWorld2 from './Components/HelloWorld2';
import HelloWorld3 from './Components/HelloWorld3';

export default function App()
{
  return (
    <div>
      <HelloWorld name="rohini" myEventHandler={(data)=>alert('Hello,' +data)}/>
      <HelloWorld2 firstName="rohini" lastName="jadhav" salary="2000"/>
      <HelloWorld3/>
    </div>
  )
}