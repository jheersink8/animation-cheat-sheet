import './assets/style.css';
import './assets/twoDimensionStyle.css';
import './assets/threeDimensionalStyle.css';
import './assets/thinkingThreeDimensionStyle.css';

import React from 'react';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import TwoDimensionalGrid from './Components/TwoDimensionalGrid';
import ThinkingThreeDimensions from './Components/ThinkingThreeDimensions';
import ThreeDimensionalGrid from './Components/ThreeDimensionalGrid';
import Transitions from './Components/Transitions';
import Animations from './Components/Animations';

export default function App() {
  const [activeLink, setActiveLink] = useState('Home');
  return (
    <>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      {activeLink === 'Home' && <Home />}
      {activeLink === 'TwoDimensionalGrid' && <TwoDimensionalGrid />}
      {activeLink === 'ThinkingThreeDimensions' && <ThinkingThreeDimensions />}
      {activeLink === 'ThreeDimensionalGrid' && <ThreeDimensionalGrid />}
      {activeLink === 'Transitions' && <Transitions />}
      {activeLink === 'Animations' && <Animations />}
    </>
  )
}