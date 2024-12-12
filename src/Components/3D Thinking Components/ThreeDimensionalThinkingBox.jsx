export default function ThreeDimensionalThinkingBox() {
    return (
        <div className="col-12 cardContainer center d-flex flex-column">
            <p id="p-parent">PARENT {'('}BORDER PLACED FOR VISUAL EFFECT{')'}</p>
            <div className="parent3d d-flex ">
                <div className="text-center align-content-center" id="child1">Child 1</div>
                <div className="text-center align-content-center" id="child2">Child 2</div>
                <div className="text-center align-content-center" id="child3">Child 3</div>
            </div>
        </div>
    )
}