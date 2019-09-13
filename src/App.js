import React from 'react';
import './App.css';
import Counter from "./components/Counter.js";
import tiles from "./components/tiles.json";
import Tile from "./components/Tile";

class App extends React.Component {

  state = {
    tiles
  }

  // removeFriend = id => {
   
  //   const friends = this.state.friends.filter(friend => friend.id !== id);

  //   this.setState({ friends });

  // };

  render() {

    return (

      <div className="body">
         <Counter />
         <div className="tiles-container">
      {this.state.tiles.map(e => (
        <Tile id = {e.id} key = {e.id} img = {e.img} />
        ))}
        </div>
      </div>

      );
  }
    
}

export default App;
