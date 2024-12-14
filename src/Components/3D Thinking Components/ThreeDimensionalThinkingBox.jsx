export default function ThreeDimensionalThinkingBox({ person, message, perspectiveP, child1X, child2X, child3X }) {
    return (
        <div className={`perspectiveG col-12 cardContainer center d-flex flex-row`}>

            <svg
                display={person}

                height="180px"
                width="180px"
                viewBox="0 0 24 24"
                stroke="#000000"
                strokeWidth="1"
                strokeLinecap="square"
                strokeLinejoin="miter"
                fill="none"
                color="#000000"
            >
                <path d="M4,20 C4,17 8,17 10,15 C11,14 8,14 8,9 C8,5.667 9.333,4 12,4 C14.667,4 16,5.667 16,9 C16,14 13,14 14,15 C16,17 20,17 20,20"></path>
            </svg>

            <div className="dottedLine" style={{display: person}}>
                <p className="text-center" >Perspective = 1,000px</p>
            </div>

            <div className='perspectiveG d-flex flex-column center'>
                <p id="p-parent">{message}</p>
                <div className={`parent3d d-flex ${perspectiveP}`}>
                    <div className={`text-center align-content-center child1 ${child1X}`}>Child 1</div>
                    <div className={`text-center align-content-center child2 ${child2X}`}>Child 2</div>
                    <div className={`text-center align-content-center child3 ${child3X}`}>Child 3</div>
                </div>
            </div>
        </div >
    )
}