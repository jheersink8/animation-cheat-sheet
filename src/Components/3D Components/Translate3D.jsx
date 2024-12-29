import SVGThreeDimensional from './3D Component Children/SVGThreeDimensional';
import CodeThreeDimensional from './3D Component Children/CodeThreeDimensional';
export default function Rotate3D() {
    return (
        <>
            <h3 className="cardDescription col-2">Translate</h3>
            <div className="col-10 ">
                <div className="row">
                <h4 className="col-6 cardAction">TranslateZ()</h4> 
                <h4 className="col-6 cardAction">Translate3d()</h4> 
                    
                <SVGThreeDimensional col={6} position={"translateZ3d"} />
                <SVGThreeDimensional col={6} position={"translate3d"} />

                <CodeThreeDimensional col={6} position={"translateZ"} value={"100px"}/>
                <CodeThreeDimensional col={6} position={"translate3d"} value={"-200px[x], 0px[y], 100px[z]"}/>

                </div>
            </div>
        </>
    )
};