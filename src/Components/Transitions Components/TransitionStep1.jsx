import SVGTransitions from "./Transition Children/SVGTransitions"

export default function TransitionStep1() {
    return (
        <>
            <h3 className='cardDescription col-2'>Step 1</h3>
            <div className='col-10'>
                <div className='row'>
                    <h3 className="cardAction">Style your element's starting state and ending state</h3>

                    <div className="cardContainer">
                        <h6 className='col-12 p-3'>First, create your element that you want to apply a transition to and style it normally. This will be the starting state of the element (i.e. the way the element will look before the transition is triggered).</h6>
                        <SVGTransitions start={"startReactSVG"} />
                        <h6>CSS:</h6>
                        <code style={{ color: "black" }}>
                            .selector{'{'}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                            {'}'}
                        </code>
                    </div>

                    <div className="cardAction">
                        <h6 className='col-12 p-3' style={{textAlign: "left"}}>Next, define which CSS properties you want to change once the trigger takes place (i.e. the ending state).  In this example, we'll change the colors of the background and graphic as well as change the position of the element using 2D and 3D transformations.</h6>
                        <SVGTransitions start={"endReactSVG"} />
                        <div style={{textAlign: "left"}}>
                            <h6>CSS:</h6>
                            <code style={{ color: "black" }}>
                                <span style={{ textDecoration: "line-through" }}>.we'll focus on this selector in step 3</span> {'{'}<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                                {'}'}
                            </code>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}