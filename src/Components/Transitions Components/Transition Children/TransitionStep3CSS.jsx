import SVGTransitions from "./SVGTransitions"
import { TransitionCSSHover, TransitionCSSActive } from "./TransitionsCode";

export default function TransitionStep3CSS() {
    return (
        <>
            {/* Transition-Property */}
            <h3 className="cardAction">CSS Solutions</h3>
            <div className="cardContainer">
                <h6 className="col-12 p-3">CSS triggers rely (most commonly) on pseudo-classes. Some pseudo-classes that can be used for triggers are:<br></br><br></br>
                    <ul>
                        <li>:hover – Trigger occurs when you hover over the element</li>
                        <li>:focus – Triggers when you tab to element or click a button</li>
                        <li>:active – Trigger occurs when you click and hold over the element</li>
                        <li>:checked – Transition is triggered when a checkbox, radio button, or toggle switch is checked</li>
                        <li>:target – Trigger starts when an element is targeted by an anchor link</li>
                    </ul>
                    Remember with our example that we created a starting state for our styling (how the element looks when you first load the page) and an ending state for the styling (how the element looks after the transition is triggered). With CSS triggers, you simply put the pseudo-class on the ending state as seen in the examples below. In these examples, we’ll demonstrate “:hover” and “:active” pseudo-classes.
                </h6>
                <div className="row hover">

                    <h5 className="col-6" style={{ textAlign: "center" }}>:hover (hover your mouse over the image)</h5>
                    <h5 className="col-6" style={{ textAlign: "center" }}>:active (click and hold the image below)</h5>
                   
                    <div className="col-6"><SVGTransitions start={"CSSHover"} /></div>
                    <div className="col-6"><SVGTransitions start={"CSSActive"} /></div>


                    <TransitionCSSHover />
                    <TransitionCSSActive />

                </div>
            </div>
        </>
    )
}