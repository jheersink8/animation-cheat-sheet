import SVGTwoDimensional from './2D Component Children/SVGTwoDimensional';
import CodeTwoDimensional from './2D Component Children/CodeTwoDimensional';

export default function Translate2D() {
  return (
    <>
      <h3 className="cardDescription col-2">Translate</h3>
      <div className="col-10 ">
        <div className="row">

          <h4 className="col-4 cardAction">TranslateX()</h4>
          <h4 className="col-4 cardAction">TranslateY()</h4>
          <h4 className="col-4 cardAction">Translate()</h4>

          <SVGTwoDimensional col={4} position={"translateX2d"} />
          <SVGTwoDimensional col={4} position={"translateY2d"} center={"center"} />
          <SVGTwoDimensional col={4} position={"translate2d"} />

          <CodeTwoDimensional col={4} position={"translateX"} value={"100px"} />
          <CodeTwoDimensional col={4} position={"translateY"} value={"25px"} />
          <CodeTwoDimensional col={4} position={"translate"} value={"100px, 25px"} />

        </div>
      </div>
    </>
  )
}
