import AnimationIntroExample from './AnimationIntroExample';

export default function AnimationsIntroduction() {
    return (
        <>
            <h3 className='cardDescription col-2'>Introduction</h3>
            <div className='col-10'>
                <div className='row'>
                    <h6 className='col-12 cardAction p-3' style={{ textAlign: "left" }}>Conceptually speaking, animations are very similar to transitions. They both allow you to apply movement to an element. However, transitions are limited to a definitive starting style and ending style. Animations, on the other hand, allow you to apply as many movements between the starting style and ending style (accomplished through something called keyframes). Animations allow for much more complex movements that just aren’t possible through transitions alone. <br></br><br></br>
                        Below is an example of an element that can be animated solely through the use of the animation property.
                    </h6>
                    <div className='center cardContainer'>
                        <div className='transitionIntro'>
                         <AnimationIntroExample />
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