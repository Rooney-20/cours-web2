import { useState } from "react";
import "./Colorbox.css"

const colorTable = ["red", "green", "blue", "yellow", "purple"];

const Colorbox = () => {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <div style={{ backgroundColor: colorTable[colorIndex] }}>
      <button onClick={() => setColorIndex((colorIndex+1) % colorTable.length)} >
        <h3> {colorTable[colorIndex]} </h3> 
      </button>
    </div>
  );
};


export default Colorbox;