import SVGThreeDimensional from './3D Component Children/SVGThreeDimensional';
import CodeThreeDimensional from './3D Component Children/CodeThreeDimensional';
export default function Combined3D() {
    return (
        <>
            <h3 className="cardDescription col-2">Combine Transformations</h3>
            <div className="col-10 ">
                <div className="row">
                    <h4 className="col-12 cardAction">Combine</h4>

                    <SVGThreeDimensional col={12} position={"combine3d"} />

                    <CodeThreeDimensional col={12} position={"translateZ"} value={"80px"} position1={" rotateX"} value1={"(-25deg)"}/>

                </div>
            </div>
        </>
    )
};