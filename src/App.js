import './App.css';
import { Component } from 'react';
class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0
  }

  good = () => {
     this.setState((prevstate)=>({good: prevstate.good + 1}))
     this.setState((prevstate)=>({total: prevstate.total + 1}))
  }

    neutral = () => {
     this.setState((prevstate)=>({neutral: prevstate.neutral + 1}))
     this.setState((prevstate)=>({total: prevstate.total + 1}))
  }

    bad = () => {
     this.setState((prevstate)=>({bad: prevstate.bad + 1}))
     this.setState((prevstate)=>({total: prevstate.total + 1}))
  }

  positiv = () => {
    if(this.total !== 0){
    const procent = ( this.state.good / this.state.total) * 100
    return Math.round(procent)
    }
  }



  render() {
    return (
      <div className="App">
        <p>Please leave feedback</p>
        <button onClick={this.good}>Good</button>
        <button onClick={this.neutral}>Neutral</button>
        <button onClick={this.bad}>Bad</button>
        {this.state.total > 0 ? (
          <>
          <p>Statistics</p>
        <p>Good: <span> {this.state.good}</span></p>
        <p>Neutral: <span>{this.state.neutral}</span></p>
        <p>Bad: <span>{this.state.bad}</span></p>
        <p>total: <span>{this.state.total}</span></p>
        <p>Positiv feedback: <span>{this.positiv()}%</span></p></>
        ) : (
          <p>There is no feedback</p>
        )}
      </div>
    );
  }
}
export default App;
