import React from "react";
import "./counter.css";

function Counter(props) {

    return (
      <div className="jumbotron jumbotron-fluid">
      <div className="container">
      <h1 className="display-4 text-center"> MEMORY GAME </h1>
      <h6 className="display-4 text-center"> Choose every tile. Don't guess any twice!</h6>
      <p className="card-text text-center"> Your Score = {props.score} </p>
      <p className="card-text text-center"> Best Score = {props.bestScore} </p>
      </div>
    </div>
    );
  }

export default Counter;