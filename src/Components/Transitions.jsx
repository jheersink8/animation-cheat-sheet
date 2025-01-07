import TransitionsIntroduction from './Transitions Components/TransitionsIntroduction';
import TransitionStep1 from './Transitions Components/TransitionStep1';
import TransitionStep2 from './Transitions Components/TransitionStep2';
import SVGTransitions from './Transitions Components/Transition Children/SVGTransitions';

export default function Transitions() {
    return (
        <>
            <div className="newGrid container mt-3">
                <div className="row">
                    <h2 className="cardTitle text-center col-12">Transitions</h2>
                    <TransitionsIntroduction />
                    <TransitionStep1 />
                    <TransitionStep2 />
                </div>
            </div >
        </>
    )

}