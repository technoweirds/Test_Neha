import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Mydate extends React.Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date(),
      showMessage: false
    }
    this.show=this.show.bind(this);
  }
  show(){
    this.setState({showMessage: true});
    return this.state.date; 
  }
  render(){
    return(
      <div>
        <h2>Hey Neha Mishra Here !!!!</h2>
         {this.state.showMessage && <p>{this.state.date.toString()}</p>}
        <button onClick={this.show}>Get Time</button>
      </div>
    );
  }
}

render(<Mydate />, document.getElementById('root'));
