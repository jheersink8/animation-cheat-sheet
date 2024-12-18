export default function ThreeDimensionalThinkingNote() {
    return (
        <>
            <div className="cardContainer col-6 otherHead">
                Preserve 3D Enabled
            </div>

            <div className="col-6 otherHead">
                Preserve 3D Not Enabled
            </div>

            <div className="col-6 cardContainer squareGrandparent preserve">
                <div className="square preserve">
                    <div className="squareAxis"></div>
                    <div className="squareSide top"></div>
                    <div className="squareSide bottom"></div>
                    <div className="squareSide front"></div>
                    <div className="squareSide back"></div>
                    <div className="squareSide left"></div>
                    <div className="squareSide right"></div>
                </div>
            </div>

            <div className="col-6 squareGrandparent">
                <div className="square">
                    <div className="squareAxis"></div>
                    <div className="squareSide top"></div>
                    <div className="squareSide bottom"></div>
                    <div className="squareSide front"></div>
                    <div className="squareSide back"></div>
                    <div className="squareSide left"></div>
                    <div className="squareSide right"></div>
                </div>
            </div>
        </>
    )
}