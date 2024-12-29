export default function SVGThreeDimensional({ col, position }) {
    // Color Definitions //
    let originalColor = "#5d5d5d";
    let newColor = "#f02a2a";
    let originalBackground = "rgb(196, 183, 183)";
    let newBackground = "rgba(196, 183, 183, 0.767)";

    let squareSize = 140;
    let axisPosition = (squareSize + 108) / 2;

    // Styling //
    const styles = {
        grandparent: {
            alignContent: "center",
            perspective: "1000px",
            border: "3px solid black",
            width: "95%",
            height: "400px",
            overflow: "hidden",
        },
        parent: {
            justifyContent: "center",
            transformStyle: "preserve-3d",
            transition: "transform 2s",
            transform: "rotateY(50deg) rotateX(5deg)"
        },
        original: {
            margin: "50px",
            borderRadius: "20px",
            backgroundColor: originalBackground,
            border: `4px dashed ${originalColor}`,
        },
        new: {
            margin: "50px",
            borderRadius: "20px",
            backgroundColor: newBackground,
            border: `4px dashed ${newColor}`,
            position: "absolute",
        },
        xAxis: {
            borderBottom: "1px solid red",
            height: `${axisPosition}px`,
            width: "1000px",
            position: "absolute"
        },
        yAxis: {
            borderBottom: "1px solid green",
            height: `${axisPosition}px`,
            width: "1000px",
            position: "absolute",
            transform: `rotateZ(90deg) translateY(-${axisPosition/2}px)`
        },
        zAxis: {
            borderBottom: "1px solid blue",
            height: `${axisPosition}px`,
            width: "1000px",
            position: "absolute",
            transform: "rotateY(90deg)"
        }
    };

    return (
        <div className={`cardContainer col-${col}`} style={{ justifyItems: "center" }}>
            <div style={styles.grandparent}>
                <div className="d-flex" style={styles.parent}>
                    {/* Original Position */}
                    <div style={styles.original}>
                        <svg style={{ height: `${squareSize}px`, width: `${squareSize}px` }} viewBox="0 0 256 256" strokeWidth="1.4" fill={originalColor} stroke={originalColor}>
                            <path d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z"></path>
                            <text x="130" y="105" fontSize="16" textAnchor="middle">Original Position</text>
                        </svg>
                    </div>

                    {/* New Position */}
                    <div id={position} style={styles.new}>
                        <svg style={{ height: `${squareSize}px`, width: `${squareSize}px` }} viewBox="0 0 256 256" strokeWidth="1.4" fill={newColor} stroke={newColor}>
                            <path d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z"></path>
                            <text x="130" y="105" fontSize="16" textAnchor="middle" fill="black">New Position</text>
                        </svg>
                    </div>
                    <div style={styles.xAxis}></div>
                    <div style={styles.yAxis}></div>
                    <div style={styles.zAxis}></div>
                </div>
            </div>
        </div>
    )
}