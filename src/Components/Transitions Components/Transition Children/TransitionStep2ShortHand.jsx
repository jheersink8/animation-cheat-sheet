import SVGTransitions from "./SVGTransitions"
import { TransitionLongWay, TransitionShorthand } from "./TransitionsCode";

export default function TransitionStep2ShortHand() {
    return (
        <>
            {/* Transition-Property Shorthand*/}
            <h3 className="cardAction">Transition Shorthand</h3>
            <div className="cardContainer">
                <h6 className="col-12 p-3">All these transition properties can be written in a simple shorthand. The shorthand is written in this syntax:<br></br><br></br>
                    .selector {'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[<span className="emphasis">transition-property</span>] [<span className="emphasis">transition-duration</span>] [<span className="emphasis">transition-timing-function</span>] [<span className="emphasis">transition-delay</span>]<br></br>
                    {'}'}<br></br><br></br>
                    Here is our full example written the long way (on the left) and then using the shorthand (on the right) and each providing the same experience. <span className="emphasis">Notice</span> that each new transition property is separated by a comma. 
                </h6>
                <div className="row hover">

                    <h5 className="col-6" style={{ textAlign: "center" }}>Transition Long Way</h5>
                    <h5 className="col-6" style={{ textAlign: "center" }}>Transition Shorthand</h5>


                    <div className="col-6"><SVGTransitions start={"shortHand"} /></div>
                    <div className="col-6"><SVGTransitions start={"shortHand"} /></div>


                    <TransitionLongWay />
                    <TransitionShorthand />

                </div>
            </div>
        </>
    )
}