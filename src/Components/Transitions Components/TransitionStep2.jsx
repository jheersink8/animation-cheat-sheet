import SVGTransitions from "./Transition Children/SVGTransitions"
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
                            <li>transition-property</li>
                            <li>transition-duration</li>
                            <li>transition-timing-function</li>
                            <li>transition-delay</li>
                        </ul>
                        <h6 className="col-12 p-3">We'll cover each one below! </h6>
                    </div>


                    <h3 className="cardAction">Transition Property</h3>
                    <div className="cardContainer">
                        <h6 className="col-12 p-3">The <span className="emphasis">transition-property</span> defines which CSS property (or properties) you want to be affected by the transition. In our example, we want to change the background-color, the fill, and the transformation positions. Below we'll change each one individually in order to understand how the targeting is working and then change them all at once. <span className="emphasis">Note:</span> We're using the "hover" trigger in these examples even though we haven't covered how to use it yet. But don't sweat it. We'll go over triggers in step 3! </h6>
                        <div className="row">
                            <div className="col-3"><SVGTransitions start={"backgroundColorChange"}/></div>
                            <div className="col-3"><SVGTransitions start={"fillChange"}/></div>
                            <div className="col-3"><SVGTransitions start={"transformChange"}/></div>
                            <div className="col-3"><SVGTransitions /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}