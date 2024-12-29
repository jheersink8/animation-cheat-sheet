import SVGTwoDimensional from './2D Component Children/SVGTwoDimensional';
import CodeTwoDimensional from './2D Component Children/CodeTwoDimensional';

export default function Combine2D() {
  return (
    <>
      <h3 className="cardDescription col-2">Combine</h3>
      <div className="col-10 ">
        <div className="row">

          <h4 className="col-12 cardAction">Combine Transformations()</h4>

          <SVGTwoDimensional col={12} position={"combine2d"} center={"center"}/>

          <CodeTwoDimensional col={12} position={"translateX"} value={"65px"} position1={" rotate"} value1={"(30deg)"} />

        </div>
      </div>
    </>
  )
}
