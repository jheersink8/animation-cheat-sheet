import Rotate3D from './3D Components/Rotate3D';
export default function ThreeDimensionalGrid() {

    return (
        <>
            <div className="newGrid container mt-3">
                <div className="row">
                    <h2 className="cardTitle text-center col-12">3D Transformations</h2>
                    <Rotate3D />
                </div>
            </div >
        </>
    )
}