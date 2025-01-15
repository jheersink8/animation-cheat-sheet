import { useState } from 'react';
import TransitionStep2Property from "./Transition Children/TransitionStep2Property"
import TransitionStep2Duration from "./Transition Children/TransitionStep2Duration"
import TransitionStep2Timing from "./Transition Children/TransitionStep2Timing"
import TransitionStep2Delay from "./Transition Children/TransitionStep2Delay"
import TransitionStep2ShortHand from "./Transition Children/TransitionStep2ShortHand"

export default function TransitionStep2() {
    const [activeButton, setActiveButton] = useState('TransitionStep2Property');
    function handleClick(buttonName) {
        setActiveButton(buttonName)
    };

    return (
        <>
            <h3 className='cardDescription col-2'>Step 2</h3>
            <div className='col-10'>
                <div className='row'>

                    <h3 className="cardAction">Define the Transition</h3>
                    <div className="cardContainer">
                        <h6 className="col-12 p-3">The transitions can have 4 values that can be changed:</h6>
                        <ul>
                            <li>transition-property (required)</li>
                            <li>transition-duration (required)</li>
                            <li>transition-timing-function (optional)</li>
                            <li>transition-delay (optional)</li>
                        </ul>
                        <h6 className="col-12 p-3">Click each button below to see how each transition property can be defined! </h6>
                        
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <button className={`transition-switch ${activeButton === 'TransitionStep2Property' ? "transition-clicked" : ""}`} onClick={() => handleClick("TransitionStep2Property")}>Transition-Property</button>
                            <button className={`transition-switch ${activeButton === 'TransitionStep2Duration' ? "transition-clicked" : ""}`} onClick={() => handleClick("TransitionStep2Duration")}>Transition-Duration</button>
                            <button className={`transition-switch ${activeButton === 'TransitionStep2Timing' ? "transition-clicked" : ""}`} onClick={() => handleClick("TransitionStep2Timing")}>Transition-Timing-Function</button>
                            <button className={`transition-switch ${activeButton === 'TransitionStep2Delay' ? "transition-clicked" : ""}`} onClick={() => handleClick("TransitionStep2Delay")}>Transition-Delay</button>
                            <button className={`transition-switch ${activeButton === 'TransitionStep2ShortHand' ? "transition-clicked" : ""}`} onClick={() => handleClick("TransitionStep2ShortHand")}>Transition Short Hand</button>
                        </div>
                    </div>

                    {activeButton === "TransitionStep2Property" && <TransitionStep2Property />}
                    {activeButton === "TransitionStep2Duration" && <TransitionStep2Duration />}
                    {activeButton === "TransitionStep2Timing" && <TransitionStep2Timing />}
                    {activeButton === "TransitionStep2Delay" && <TransitionStep2Delay />}
                    {activeButton === "TransitionStep2ShortHand" && <TransitionStep2ShortHand />}
                </div>
            </div>
        </>
    )
}