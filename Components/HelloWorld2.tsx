import React,{Component} from 'react';

export default class HelloWorld2 extends Component{
constructor(props)
{
  super(props)
  this.state={
    firstName:"Rohini",
    lastName: "Jadhav",
    salary: 120,
    words: ["a", "b", "r"]
  }
  this.increaseSalary = this.increaseSalary.bind(this);
  this.addWords = this.addWords.bind(this);

};

increaseSalary()
{
  this.setState({
    salary:this.state.salary+200
  })
  //to modify the state immediately
   this.setState((state)=>({
    salary:state.salary+200
  }));
   this.setState((state)=>({
    salary:state.salary+200
  }));

  //mutating state is not good
  // const sal =this.state.salary;
  // sal =500;
  // this.setState({salary:sal});
  ///////////////
 
}
addWords()
{
   const word = this.state.words;
  word.push("s");
  this.setState({words:word});
}
render()
{
   return (
    <div>
        <button onClick={this.increaseSalary}>IncreaseSalary</button>
        <button onClick={this.addWords}>AddWords</button>
        <div>{this.state.firstName}</div>
        <div>{this.state.lastName}</div>
        <div>{this.state.salary}</div>
        <div>{this.state.words}</div>
    </div>
  )
  
}
}

