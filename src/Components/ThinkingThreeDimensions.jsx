import ThreeDimensionalThinkingBox from './3D Thinking Components/ThreeDimensionalThinkingBox';
import { Step1Code, Step2Code } from './3D Thinking Components/ThreeDimensionalThinkingCode';

export default function ThinkingThreeDimensions() {
    return (
        <>
            <div className="newGrid container mt-3">
                <div className="row">
                    <h2 className="cardTitle text-center col-12">Thinking in 3D</h2>


                    <h3 className="cardDescription col-2">Step 1:</h3>
                    <div className="col-10 ">
                        <div className="row">
                            <h4 className="col-12 cardAction p-3">Create Parent Element to Hold Children (Objects to be in 3D Space)</h4>
                            <ThreeDimensionalThinkingBox person={'none'} message={"PARENT (BORDER PLACED FOR VISUAL EFFECT)"} />
                            <Step1Code />
                        </div>
                    </div>

                    <h3 className="cardDescription col-2">Step 2:</h3>
                    <div className="col-10 ">
                        <div className="row">
                            <h4 className="col-12 cardAction p-3">Establish CSS Perspective to Create a True 3D Space</h4>
                            <ThreeDimensionalThinkingBox perspectiveP={'perspectiveP'} />
                            <Step2Code />
                        </div>
                    </div>

                    <h3 className="cardDescription col-2">Step 3:</h3>
                    <div className="col-10 ">
                        <div className="row">
                            <h4 className="col-12 cardAction p-3">Transition Children in True 3D Space</h4>
                            <ThreeDimensionalThinkingBox perspectiveP={'perspectiveP'} person={'none'} child1X={'child1X'} child2X={'child2X'} child3X={'child3X'}/>
                            <Step2Code />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}