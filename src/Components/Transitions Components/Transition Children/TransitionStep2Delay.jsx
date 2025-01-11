import SVGTransitions from "./SVGTransitions";
import { TransitionDelay } from "./TransitionsCode";

export default function TransitionStep2Delay() {
    return (
        <>
            {/* Transition-Delay */}
            <h3 className="cardAction">Transition Delay</h3>
            <div className="cardContainer">
                <h6 className="col-12 p-3">Lastly, the <span className="emphasis">transition-delay</span> property states when the transition will start after the state change is triggered. The examples below have a delay of 0, 1, 2, and 3 seconds.
                    <span className="emphasis"> Hover in and out of the border area</span> below to see the transitions in action.</h6>
                <div className="row hover">

                    <h5 className="col-3" style={{ textAlign: "center" }}>No delay</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>1 Second Delay</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>2 Second Delay</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>3 Second Delay</h5>

                    <div className="col-3"><SVGTransitions start={"delay0"} /></div>
                    <div className="col-3"><SVGTransitions start={"delay1"} /></div>
                    <div className="col-3"><SVGTransitions start={"delay2"} /></div>
                    <div className="col-3"><SVGTransitions start={"delay3"} /></div>

                    <TransitionDelay delay={"0"} />
                    <TransitionDelay delay={"1"} />
                    <TransitionDelay delay={"2"} />
                    <TransitionDelay delay={"3"} />
                </div>
            </div>
        </>
    )
}