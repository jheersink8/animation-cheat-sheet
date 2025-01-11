import SVGTransitions from "./SVGTransitions";
import { TransitionTimingFunction } from "./TransitionsCode";

export default function TransitionStep2Timing() {
    return (
        <>
            {/* Transition-Timing-Function */}
            <h3 className="cardAction">Transition Timing Function</h3>
            <div className="cardContainer">
                <h6 className="col-12 p-3">The <span className="emphasis">transition-timing-function</span> CSS property determines the smoothness effects for how the transitions begin and end. The main transition timing functions are:
                    <br></br><br></br>
                    <ul>
                        <li><span style={{ fontWeight: "bold" }}>Linear (not demonstrated below):</span> same start and end</li>
                        <li><span style={{ fontWeight: "bold" }}>Ease (the default):</span> slow start, then fast, then slow end</li>
                        <li><span style={{ fontWeight: "bold" }}>Ease-in:</span> slow start</li>
                        <li><span style={{ fontWeight: "bold" }}>Ease-out:</span> slow end</li>
                        <li><span style={{ fontWeight: "bold" }}>Ease-in-out:</span> slow start and end </li>
                    </ul>
                    <span className="emphasis">Hover in and out of the border area</span> below to see the transitions in action.</h6>
                <div className="row hover">

                    <h5 className="col-3" style={{ textAlign: "center" }}>Ease</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>Ease-in</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>Ease-out</h5>
                    <h5 className="col-3" style={{ textAlign: "center" }}>Ease-in-out</h5>

                    <div className="col-3"><SVGTransitions start={"ease"} /></div>
                    <div className="col-3"><SVGTransitions start={"ease-in"} /></div>
                    <div className="col-3"><SVGTransitions start={"ease-out"} /></div>
                    <div className="col-3"><SVGTransitions start={"ease-in-out"} /></div>

                    <TransitionTimingFunction timing={"ease"} />
                    <TransitionTimingFunction timing={"ease-in"} />
                    <TransitionTimingFunction timing={"ease-out"} />
                    <TransitionTimingFunction timing={"ease-in-out"} />
                </div>
            </div>

        </>
    )
}