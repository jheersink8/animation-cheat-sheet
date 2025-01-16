import { useState } from "react";
import SVGTransitions from "./SVGTransitions"
import { TransitionJSExplination, TransitionJSActive } from "./TransitionsCode";

export default function TransitionStep3JS() {
    const [parentClass, setParentClass] = useState("JSBegin");
    const [svgClass, setSvgClass] = useState("JSSVGBegin");

    const runChangeClass = () => {
        parentClass === "JSBegin" ? (setParentClass("JSEnd"), setSvgClass("JSSVGEnd")) : (setParentClass("JSBegin"), setSvgClass("JSSVGBegin"));
    };

    return (
        <>
            {/* JS solutions */}
            <h3 className="cardAction">JavaScript Solutions</h3>
            <div className="cardContainer">
                <h6 className="col-12 p-3">JavaScript based triggers offer more flexibility than CSS triggers. For example, you can assign the animation to a button (or any element that’s not the element you’re transitioning). For these demonstrations, we’ll simplify the transition slightly so that we can focus more on what’s happening with the trigger.<br></br><br></br>
                    There are dozens of ways JavaScript can be used to set these triggers up, but two popular areas of focus are by changing the class of an element from one class to another, and using event listeners (click, mouseenter, mouseleave, keydown, keyup, or scroll) to trigger the transition. Each of these are demonstrated below.

                </h6>
                <div className="row hover">

                    <h5 className="col-12" style={{ textAlign: "center" }}>Class Change</h5>

                    <div className="col-12"><SVGTransitions start={parentClass} svgStart={svgClass} /></div>

                    <div className="col-12 mb-5" style={{ display: "flex", justifyContent: "center" }}>
                        <button style={{ width: "35%" }} onClick={runChangeClass}>Click Me!</button>
                    </div>

                    <TransitionJSExplination />
                    <TransitionJSActive />

                </div>
            </div>
        </>
    )
}