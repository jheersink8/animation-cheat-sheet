import SVGTransitions from "./Transition Children/SVGTransitions";
import { TransitionBackgroundColorCode, TransitionFillColorCode, TransitionTransformationsCode, TransitionAllCode, TransitionDuration, TransitionTimingFunction, TransitionDelay } from "./Transition Children/TransitionsCode";
import TransitionStep2Property from "./Transition Children/TransitionStep2Property"
import TransitionStep2Duration from "./Transition Children/TransitionStep2Duration"
import TransitionStep2Timing from "./Transition Children/TransitionStep2Timing"
import TransitionStep2Delay from "./Transition Children/TransitionStep2Delay"

export default function TransitionStep2() {
    return (
        <>
            <h3 className='cardDescription col-2'>Step 2</h3>
            <div className='col-10'>
                <div className='row'>

                    <h3 className="cardAction">Define the Transition Property</h3>
                    <div className="cardContainer">
                        <h6 className="col-12 p-3">The transition property has 4 values that can be changed:</h6>
                        <ul>
                            <li>transition-property (required)</li>
                            <li>transition-duration (required)</li>
                            <li>transition-timing-function (optional)</li>
                            <li>transition-delay (optional)</li>
                        </ul>
                        <h6 className="col-12 p-3">We'll cover each one below! </h6>
                    </div>

                    <TransitionStep2Property />
                    <TransitionStep2Duration />
                    <TransitionStep2Timing />
                    <TransitionStep2Delay />      
                </div>
            </div>
        </>
    )
}