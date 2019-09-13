import React from "react";
import "./tile.css";
import Counter from "./Counter.js";

function Tile(props) {

return (

    <div className="tile" data-id={props.id} onClick={() => props.handleClicked(props.id)}>
        <img className="tile-image" src={props.img}/>
    </div>
)
}
export default Tile;
