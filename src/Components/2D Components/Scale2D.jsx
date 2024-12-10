import SVGTwoDimensional from './2D Component Children/SVGTwoDimensional';
import CodeTwoDimensional from './2D Component Children/CodeTwoDimensional';

export default function Scale2D() {
  return (
    <>
      <h3 className="cardDescription col-2">Scale</h3>
      <div className="col-10 ">
        <div className="row">

          <h4 className="col-4 cardAction">ScaleX()</h4>
          <h4 className="col-4 cardAction">ScaleY()</h4>
          <h4 className="col-4 cardAction">Scale()</h4>

          <SVGTwoDimensional col={4} position={"scaleX"} center={"center"} />
          <SVGTwoDimensional col={4} position={"scaleY"} center={"center"} />
          <SVGTwoDimensional col={4} position={"scale"} center={"center"} />

          <CodeTwoDimensional col={4} position={"scaleX"} value={"1.2"} />
          <CodeTwoDimensional col={4} position={"scaleY"} value={"0.8"} />
          <CodeTwoDimensional col={4} position={"scale"} value={"1.2, 0.8"} />

        </div>
      </div>
    </>
  )
}