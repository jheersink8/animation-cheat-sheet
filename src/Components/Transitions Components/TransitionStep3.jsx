import { useState } from 'react';
import SVGTransitions from "./Transition Children/SVGTransitions";
import TransitionStep3CSS from "./Transition Children/TransitionStep3CSS";
import TransitionStep3JS from "./Transition Children/TransitionStep3JS";

export default function TransitionStep3() {
    const [activeButton, setActiveButton] = useState('CSS');
    function handleClick(buttonName) {
        setActiveButton(buttonName)
    };

    return (
        <>
            <h3 className='cardDescription col-2'>Step 3</h3>
            <div className='col-10'>
                <div className='row'>
                    <h3 className="cardAction">Define the triggering event for your transition(s)</h3>

                    <div className="cardContainer">
                        <h6 className='col-12 p-3'>With the styling and transitions defined, the final thing that’s needed is the actual trigger that sets the transition off. The two common ways to set up a trigger for a transition are done with “JavaScriptless” means (i.e. pure CSS) or methods that do leverage JavaScript. Let’s use our existing transition and apply different triggers to it! <span className="emphasis">Click the buttons below to look at examples of each type.</span></h6>
                        <br></br>
                        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                            <button className={`transition-switch ${activeButton === 'CSS' ? 'transition-clicked' : ''}`} onClick={() => handleClick("CSS")}>CSS Only Solutions</button>
                            <button className={`transition-switch ${activeButton === 'JS' ? 'transition-clicked' : ''}`} onClick={() => handleClick("JS")}>JavaScript Solutions</button>
                        </div>
                    </div>

                    {activeButton === "CSS" && <TransitionStep3CSS />}
                    {activeButton === "JS" && <TransitionStep3JS />}
                </div>
            </div>
        </>
    )
}