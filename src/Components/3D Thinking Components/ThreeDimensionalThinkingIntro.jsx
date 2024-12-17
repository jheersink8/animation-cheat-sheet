export default function ThreeDimensionalThinkingIntro() {
    return (
        <div className="cardContainer">
            <div className="d-flex hoverArea">
                <div className='col-6 d-flex justify-content-center'>
                    <div className='elementwith2D'>I'm in 2D Space.</div>
                </div>

                <div className='col-6 d-flex justify-content-center' style={{ perspective: '1000px' }}>
                    <div className='elementwith3D'>I'm in 3D Space.</div>
                </div>
            </div>
        </div>
    )
}