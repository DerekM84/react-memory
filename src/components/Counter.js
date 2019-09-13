import React from "react";
import "./counter.css";


class Counter extends React.Component {
state = {
    score:0,
    bestScore:0,
    initalScore:0
}

increment = () => {
    this.setState({ count: this.state.score + 1 });
  };

decrement = () => {
    this.setState({ count: this.state.score - 1 });
  };

resetScore = () => {
    this.setState({ score: this.state.initialScore});
}


// onClick={this.handleIncrement}

render() {
    return (

      <div className="jumbotron jumbotron-fluid">
      <div className="container">
      <h1 className="display-4 text-center"> MEMORY GAME</h1>
      <h3 className="display-4 text-center"> Choose every tile without guessing any twice!</h3>
       
      <p className="card-text text-center">Your Score = {this.state.score} </p>
      <p className="card-text text-center">Best Score = {this.state.score} </p>
      </div>
    </div>
      
    );
  }
}

export default Counter;