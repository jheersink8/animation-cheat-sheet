import Translate2D from './2D Components/Translate2D'
import Scale2D from './2D Components/Scale2D'
import Skew2D from './2D Components/Skew2D'
import Rotate2D from './2D Components/Rotate2D'
import Combine2D from './2D Components/Combine2D'

export default function TwoDimensionalGrid() {
    return (
        <>
            <div className="newGrid container mt-3">
                <div className="row">
                    <h2 className="cardTitle text-center col-12">Basic 2D Transformations</h2>
                    <Translate2D />
                    <Scale2D />
                    <Skew2D />
                    <Rotate2D />
                    <Combine2D />
                </div>
            </div >
        </>
    )
}