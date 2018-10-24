import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor() {
    super();
  	this.value1 = Math.floor(Math.random() * 100);
    this.value2 = Math.floor(Math.random() * 100);
    this.value3 = Math.floor(Math.random() * 100);
    this.proposedAnswer = Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;
    this.numQuestions = 0;
    this.numCorrect = 0;
  }
  state = {
  	
      value1 : this.value1,
      value2 : this.value2,
      value3 : this.value3,
      proposedAnswer : this.proposedAnswer,
  	  numQuestions : this.numQuestions,
      numCorrect : this.numCorrect
  }
    
  newQuestion = (tf) => {
    console.log(tf);
    let answer = this.value1 + this.value2 + this.value3
    console.log(answer === this.proposedAnswer);
      if (answer === this.proposedAnswer) {
        if(tf === true) {
      		this.numCorrect = this.numCorrect + 1;
          
        }
        else {
          this.numCorrect = this.numCorrect;
        }
      }
      else {
        if(tf === false) {
          console.log(tf);
      		this.numCorrect = this.numCorrect + 1;
        }
        else {
          this.numCorrect = this.numCorrect;
        }
        
      }
    this.value1 = Math.floor(Math.random() * 100);
	this.value2 = Math.floor(Math.random() * 100);
	this.value3 = Math.floor(Math.random() * 100);
	this.proposedAnswer = Math.floor(Math.random() * 3) + this.value1 + this.value2 + this.value3;
    
    this.numQuestions = this.numQuestions + 1;
    
    this.setState( {
      
      value1 : this.value1,
      value2 : this.value2,
      value3 : this.value3,
      proposedAnswer : this.proposedAnswer,
  	  numQuestions : this.numQuestions,
      numCorrect : this.numCorrect
    });
  }
    
	
      
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.value1} + ${this.value2} + ${this.value3} = ${this.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.newQuestion(true)}>True</button>
          <button onClick={() => this.newQuestion(false)}>False</button>
          <p className="text">
            Your Score: {this.numCorrect}/{this.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
