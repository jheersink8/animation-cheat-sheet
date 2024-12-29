import Rotate3D from './3D Components/Rotate3D';
import Translate3D from './3D Components/Translate3D';
import Combined3D from './3D Components/Combined3D';
export default function ThreeDimensionalGrid() {

    return (
        <>
            <div className="newGrid container mt-3">
                <div className="row">
                    <h2 className="cardTitle text-center col-12">Basic 3D Transformations</h2>
                    <Rotate3D />
                    <Translate3D />
                    <Combined3D />
                </div>
            </div >
        </>
    )
}