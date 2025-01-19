import { useState } from "react";

import forest from "../../assets/images/forest.jpg";
import lava from "../../assets/images/lava.jpg";
import ocean from "../../assets/images/ocean.jpg";

export default function AnimationIntroExample() {
    const zValue = "113px";
    const animationDuration = "2.5s";

    const [triangleAngle, setTriangleAngle] = useState(0);
    const [originalAngle, setOriginalAngle] = useState(0);

    const turn = (angle) => {
        setOriginalAngle(triangleAngle);
        setTriangleAngle(triangleAngle + angle);
    };

    const styles = {
        grandparent: {
            perspective: "1000px"
        },
        imageStyle: {
            boxSizing: "border-box",
            border: "4px solid rgba(143, 34,34, 0)",
            borderRadius: "20px",
        },
        triangle: {
            transformStyle: "preserve-3d",
            height: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: `rotateY(${triangleAngle}deg)`,
            animationName: "rotateTriangle",
            animationDuration: animationDuration,
        },
        ocean: {
            position: "absolute",
            transform: `rotateY(0deg) translateZ(${zValue})`,
        },
        lava: {
            position: "absolute",
            transform: `rotateY(120deg) translateZ(${zValue})`,
        },
        forest: {
            position: "absolute",
            transform: `rotateY(-120deg) translateZ(${zValue})`,
        }
    }

    return (
        <div className="row">
            
            <style>
                {`
          @keyframes rotateTriangle {
            0% {
              transform: rotateY(${originalAngle}deg);
            }
            20% {
              transform: rotateY(${originalAngle}deg);
            }
            80% {
              transform: rotateY(${triangleAngle}deg);
            }
            100% {
              transform: rotateY(${triangleAngle}deg);
            }
          }
        `}
            </style>

            <div className="col-12" style={{ display: "flex", justifyContent: "center" }}>
                <div style={styles.grandparent}>
                    <div style={styles.triangle}>
                        {/* SIDES */}
                        <div style={styles.ocean}><img src={ocean} style={styles.imageStyle} width="400px" height="600px"></img></div>
                        <div style={styles.lava}><img src={lava} style={styles.imageStyle} width="400px" height="600px"></img></div>
                        <div style={styles.forest}><img src={forest} style={styles.imageStyle} width="400px" height="600px"></img></div>
                    </div>
                </div>
            </div>

            <div className="col-12" style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <button onClick={() => turn(-120)}>Rotate Left</button>
                <button onClick={() => turn(120)}>Rotate Right</button>
            </div>
        </div>
    )
}