export default function SVGThreeDimensional({ col, center }) {
    return (
        <>
            {/* DEFINE COL HERE */}
            <div>
                <div className="grandparent3D center">

                    {/* Axis */}
                    <div className="parent3D">



                        {/* Original View */}
                        <div className="card3D cardOriginal3D">
                            <svg className="SVG3D SVGOriginal" viewBox="0 0 256 256" strokeWidth="1.4">
                                <path
                                    d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                </path>
                                <text x="130" y="105" fontSize="16" textAnchor="middle">
                                    Original Position
                                </text>
                            </svg>
                        </div>

                        <div className="axis center">
                            <div className="xAxis"></div>
                            <div className="yAxis"></div>
                            <div className="zAxis"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}