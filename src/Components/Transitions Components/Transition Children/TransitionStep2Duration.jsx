import SVGTransitions from "./SVGTransitions";
import { TransitionDuration } from "./TransitionsCode";

export default function TransitionStep2Duration() {
    return (
        <>
            {/* Transition-Duration */}
            <h3 className="cardAction">Transition Duration</h3>
            <div className="cardContainer">
                <h6 className="col-12 p-3">The <span className="emphasis">transition-duration</span> CSS property determines how long the transition will last. Below, we have our transition lasting 1, 2, 3, and 4 seconds long. <span className="emphasis">Hover in and out of the border area</span> below to see the transitions in action.</h6>
                <div className="row hover">

                    <h5 className="col-3" style={{ textAlign: "center" }}>1 Second</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>2 Seconds</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>3 Seconds</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>4 Seconds</h5>

                    <div className="col-3"><SVGTransitions start={"duration1"} /></div>
                    <div className="col-3"><SVGTransitions start={"duration2"} /></div>
                    <div className="col-3"><SVGTransitions start={"duration3"} /></div>
                    <div className="col-3"><SVGTransitions start={"duration4"} /></div>

                    <TransitionDuration duration={"1"} />
                    <TransitionDuration duration={"2"} />
                    <TransitionDuration duration={"3"} />
                    <TransitionDuration duration={"4"} />
                </div>
            </div>

        </>
    )
}