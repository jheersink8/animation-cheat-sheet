import SVGThreeDimensional from './3D Component Children/SVGThreeDimensional';

export default function Rotate3D() {
    return (
        <>
            <h3 className="cardDescription col-2">Rotate</h3>
            <div className="col-10 ">
                <div className="row">
                    <h4 className="col-12 cardAction">Rotate()</h4>
                    <SVGThreeDimensional />
                </div>
            </div>
        </>
    )
}