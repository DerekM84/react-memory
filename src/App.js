import React from 'react';
import './App.css';
import Counter from "./components/Counter.js";
import tiles from "./components/tiles.json";
import Tile from "./components/Tile";

class App extends React.Component {

  state = {
    score:0,
    initialScore: 0,
    bestScore: 0,
    tiles
  }

  handleClicked = id => {
   let goodGuess = false;
   const newArray = this.state.tiles.map(tile => {
     const thisTile = {...tile};
    if (id === thisTile.id) {
        if (!tile.clicked) {
          tile.clicked = true;
          goodGuess = true;
          return tile;
        }
    }
    return thisTile;
   })

    if (goodGuess) {
      this.handleGoodGuess(newArray);
    }
    else {
      this.handleBadGuess(newArray);
    }
  }

handleGoodGuess = arr => {
  let shuffled = this.shuffle(arr);
  this.setState({ tiles : shuffled });
  this.setState({ score: this.state.score + 1 });
  if (this.state.score >= this.state.bestScore) {
    this.setState({ bestScore: this.state.score + 1 });
}
}

handleBadGuess = arr => {
  this.setState({ score: this.state.initialScore });
  const resetArray = arr.map(tile => {
    tile.clicked = false;
    return tile;
  });
  let resetShuffle = this.shuffle(resetArray);
  this.setState({ tiles: resetShuffle });
}

shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = Math.floor(Math.random() * (i + 1));
      let l = Math.floor(Math.random() * (i + 1));
      let m = Math.floor(Math.random() * (i + 1));
      let n = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
      [arr[i], arr[k]] = [arr[k], arr[i]];
      [arr[i], arr[l]] = [arr[l], arr[i]];
      [arr[i], arr[m]] = [arr[m], arr[i]];
      [arr[m], arr[i]] = [arr[i], arr[m]];
      [arr[j], arr[l]] = [arr[l], arr[j]];
      [arr[i], arr[n]] = [arr[n], arr[i]];



      return arr;
    }
  };


  render() {
    return (
      <div className="body">
        <Counter score={this.state.score} bestScore={this.state.bestScore} />
        <div className="tiles-container">
          {this.state.tiles.map(tile => (
            <Tile id={tile.id} key={tile.id} img={tile.img} handleClicked={this.handleClicked} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
