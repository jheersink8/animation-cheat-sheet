import SVGTwoDimensional from './2D Component Children/SVGTwoDimensional';
import TranslateX from './2D Component Children/CodeTwoDimensional';
export default function Translate2D() {
  return (
    <>
      <h1>Two Demensional Sheet</h1>
      <div className="newGrid container">
        <div className="row">

          <h2 className="cardTitle text-center col-12">2D Transformations</h2>

          <h3 className="cardDescription col-2">Translate</h3>
          <div className="col-10 ">
            <div className="row">

              <h4 className="col-4 cardAction">TranslateX()</h4>
              <h4 className="col-4 cardAction">TranslateY()</h4>
              <h4 className="col-4 cardAction">Translate()</h4>

              <SVGTwoDimensional col={4} position={"translateX"} />
              <SVGTwoDimensional col={4} position={"translateY"} center={"center"} />
              <SVGTwoDimensional col={4} position={"translate"} />

              <TranslateX col={4} position={"translateX"} value={"100px"} />
              <TranslateX col={4} position={"translateY"} value={"25px"} />
              <TranslateX col={4} position={"translate"} value={"100px, 25px"} />

            </div>
          </div>
        </div>
      </div>








    </>
  )
}
