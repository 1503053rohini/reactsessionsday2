import React, {PureComponent} from 'react';

export default class HelloWorld3 extends PureComponent
{
  constructor(props)
  {
    super(props)
     this.state ={
       Name :'rohini'
     }
  this.changeName = this.changeName.bind(this);

  };
  changeName()
  {
   var sal =this.state.Name;
    sal ='rohini jadhav';
    this.setState({Name:sal});
  }
  render()
{
   return (
    <div>
        <button onClick={this.changeName}>ChangeName</button>
        <div>{this.state.firstName}</div>
    </div>
  )
  
}
 
}