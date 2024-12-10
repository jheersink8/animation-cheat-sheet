import SVGTwoDimensional from './2D Component Children/SVGTwoDimensional';
import CodeTwoDimensional from './2D Component Children/CodeTwoDimensional';

export default function Skew2D() {
  return (
    <>
      <h3 className="cardDescription col-2">Skew</h3>
      <div className="col-10 ">
        <div className="row">

          <h4 className="col-4 cardAction">SkewX()</h4>
          <h4 className="col-4 cardAction">SkewY()</h4>
          <h4 className="col-4 cardAction">Skew()</h4>

          <SVGTwoDimensional col={4} position={"skewX"} center={"center"} />
          <SVGTwoDimensional col={4} position={"skewY"} center={"center"} />
          <SVGTwoDimensional col={4} position={"skew"} center={"center"} />

          <CodeTwoDimensional col={4} position={"skewX"} value={"45deg"} />
          <CodeTwoDimensional col={4} position={"skewY"} value={"-20deg"} />
          <CodeTwoDimensional col={4} position={"skew"} value={"45deg, -20deg"} />

        </div>
      </div>
    </>
  )
}