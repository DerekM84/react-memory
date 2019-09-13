import React from 'react';
import './App.css';
import Counter from "./components/Counter.js";
import tiles from "./components/tiles.json";
import Tile from "./components/Tile";

class App extends React.Component {

  state = {
    // newTiles: tiles,
    // initialTiles: tiles,
    // score: 0,
    initialScore: 0,
    bestScore: 0,
    tiles
  }

  handleClicked = id => {
    

    let remainingTiles = this.state.newTiles.filter(tile => tile.id !== id);

    this.setState({ newTiles: remainingTiles });
    this.increment();


    if (goodGuess) {
      // shuffle(newTiles);
      // increment();
    }
    else {
      // 
    }
  }

  increment = () => {
    this.setState({ score: this.state.score + 1 });
    if (this.state.score > this.state.bestScore) {
      this.setState({ bestScore: this.state.score });
    }
  };

  reset = () => {
    this.setState({ score: this.state.initialScore });
    this.setState({ newTiles: this.state.initialTiles });

  }

  render() {

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    return (
      <div className="body">

        <Counter score={this.state.score} bestScore={this.state.bestScore} />

        <div className="tiles-container">
          {this.state.newTiles.map(tile => (
            <Tile id={tile.id} key={tile.id} img={tile.img} handleClicked={this.handleClicked} />
          ))}
        </div>

      </div>
    );
  }
}

export default App;
