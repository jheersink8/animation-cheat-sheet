import './assets/style.css';
import './assets/twoDimensionStyle.css';
import './assets/thinkingThreeDimensionStyle.css';

import React from 'react';
import TwoDimensionalGrid from './Components/TwoDimensionalGrid';
import ThinkingThreeDimensions from './Components/ThinkingThreeDimensions';
import ThreeDimensionalGrid from './Components/ThreeDimensionalGrid';

function App() {

  return (
    <>
      <TwoDimensionalGrid />
      <ThinkingThreeDimensions />
      {/* <ThreeDimensionalGrid /> */}
    </>
  )
}

export default App
