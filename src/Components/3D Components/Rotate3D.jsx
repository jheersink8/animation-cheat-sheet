import SVGThreeDimensional from './3D Component Children/SVGThreeDimensional';
import CodeThreeDimensional from './3D Component Children/CodeThreeDimensional';
export default function Rotate3D() {
    return (
        <>
            <h3 className="cardDescription col-2">Rotate</h3>
            <div className="col-10 ">
                <div className="row">
                    
                    <h4 className="col-4 cardAction">RotateX()</h4>
                    <h4 className="col-4 cardAction">RotateY()</h4>
                    <h4 className="col-4 cardAction">RotateZ()</h4>

                    <SVGThreeDimensional col={4} position={"rotateX3d"} />
                    <SVGThreeDimensional col={4} position={"rotateY3d"} />
                    <SVGThreeDimensional col={4} position={"rotateZ3d"} />

                    <CodeThreeDimensional col={4} position={"rotateX"} value={"45deg"}/>
                    <CodeThreeDimensional col={4} position={"rotateY"} value={"15deg"}/>
                    <CodeThreeDimensional col={4} position={"rotateZ"} value={"-25deg"}/>

                </div>
            </div>
        </>
    )
};