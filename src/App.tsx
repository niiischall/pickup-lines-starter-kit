import React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const handlePickupLine = () => {
    console.log("Pick-Up Line!");
  }

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        🧀 Hey there!
        </div>
        <div className="bio">
        <span>Welcome to Pick-Up Lines!</span>
        <button className="button" onClick={handlePickupLine}>
          Wave at Me
        </button>
      </div>
    </div>
    </div>
  );
}

