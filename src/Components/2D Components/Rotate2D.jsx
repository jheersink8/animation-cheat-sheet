import SVGTwoDimensional from './2D Component Children/SVGTwoDimensional';
import CodeTwoDimensional from './2D Component Children/CodeTwoDimensional';

export default function Rotate2D() {
  return (
    <>
      <h3 className="cardDescription col-2">Rotate</h3>
      <div className="col-10 ">
        <div className="row">

          <h4 className="col-12 cardAction">Rotate()</h4>

          <SVGTwoDimensional col={12} position={"rotate"} center={"center"}/>

          <CodeTwoDimensional col={12} position={"rotate"} value={"45deg"} />

        </div>
      </div>
    </>
  )
}
