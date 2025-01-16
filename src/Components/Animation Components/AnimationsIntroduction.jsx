export default function AnimationsIntroduction() {
    return (
        <>
            <h3 className='cardDescription col-2'>Introduction</h3>
            <div className='col-10'>
                <div className='row'>
                    <h6 className='col-12 cardAction p-3' style={{textAlign: "left"}}>Transitions allows you to smoothly apply changes to CSS property values. Take, for example, the boxes below. When you hover over the one on the left, it will abruptly change from blue to red. It does NOT have the transition property applied, hence the abruptness. When you hover over the box on the right, it smoothly changes from blue to red. This smooth change is accomplished with the transition CSS property.<br></br>  <br></br>The transition property can change many CSS properties such as color, text size, element width, and (most excitingly) 2D and 3D transformations. </h6>
                    <div className='center cardContainer'>
                        <div className='transitionIntro'>
                            <div className='transitionIntroBoxWithout'>Hover over me! <br></br>I <span style={{ fontWeight: "bold" }}>don't</span> have the "Transition" property</div>
                            <div className='transitionIntroBoxWith'>Hover over me! <br></br>I <span style={{ fontWeight: "bold" }}>do</span> have the "Transition" property</div>
                        </div>
                    </div>
                    <div className="cardContainer">
                        <h6 style={{ padding: "20px" }}>Stated simply, transitions need four things:
                            <ul>
                                <li>A starting state</li>
                                <li>An ending state</li>
                                <li>The Transition CSS property</li>
                                <li>Something to trigger the transition’s state change </li>
                            </ul>
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}