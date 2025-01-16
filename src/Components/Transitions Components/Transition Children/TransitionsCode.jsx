function TransitionBackgroundColorCode() {
    return (
        <div className="col-3" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-property:</span>background-color;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>background-color:</span> white;</span><br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionFillColorCode() {
    return (
        <div className="col-3" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-property:</span>fill;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>fill:</span> red;</span><br></br>

                {'}'}
            </code>
        </div>
    )
}

function TransitionTransformationsCode() {
    return (
        <div className="col-3" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-property:</span>transform;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);</span><br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionAllCode() {
    return (
        <div className="col-3" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-property:</span>background-color, fill, transform;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);</span><br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionDuration({ duration }) {
    return (
        <div className="col-3" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition-property:</span>background-color, fill, transform;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-duration:</span> {duration}s;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionTimingFunction({ timing }) {
    return (
        <div className="col-3" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition-property:</span>background-color, fill, transform;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition-duration:</span> 2s;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-timing-function:</span> {timing};</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionDelay({ delay }) {
    return (
        <div className="col-3" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition-property:</span>background-color, fill, transform;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition-duration:</span> 2s;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition-timing-function:</span> ease-in-out;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-delay:</span> {delay}s;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionLongWay() {
    return (
        <div className="col-6" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-property:</span>background-color, fill, transform;</span><br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-duration:</span> 2s;</span><br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-timing-function:</span> ease-in-out;</span><br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis"><span style={{ fontWeight: "bold" }}>transition-delay:</span> 1s;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionShorthand() {
    return (
        <div className="col-6" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis">transition: background-color 2s ease-in-out 1s,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill 2s ease-in-out 1s,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform 2s ease-in-out 1s;</span><br></br>
                {'}'}
                <br></br>
                <span style={{ textDecoration: "line-through" }}>.explained later</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionCSSHover() {
    return (
        <div className="col-6" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition: </span>background-color 2s ease-in-out 0s,<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill 2s ease-in-out 0s,<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform 2s ease-in-out 0s;<br></br>
                {'}'}
                <br></br>
                .selector<span className="emphasis">:hover</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionCSSActive() {
    return (
        <div className="col-6" style={{ textAlign: "left" }}>
            <h6>CSS:</h6>
            <code style={{ color: "black", fontSize: "10px" }}>
                .selector {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>margin:</span> 50px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border:</span> 2px solid black;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>border-radius:</span> 10px;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> grey;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> blue;<br></br>
                <br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transition: </span>background-color 2s ease-in-out 0s,<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill 2s ease-in-out 0s,<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;transform 2s ease-in-out 0s;<br></br>
                {'}'}
                <br></br>
                .selector<span className="emphasis">:active</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

function TransitionJSExplination() {
    return (
        <>
            <div className="col-5 mx-4" style={{ textAlign: "left" }}>
                <h6>Explanation:</h6>
                <p>We start out with an HTML element with a class called “start,” and a button with the intent of switching the element’s class from “start” to “end.”</p>
                <p>We create a corresponding CSS style for those classes. The “start” class will be the style before the button is clicked and the “end” class will be the style after it is clicked. The transition CSS property needs to be applied to both the “start” and “end” selectors so that the transition will work when the button changes the class from “end” to “start.” </p>
                <p>Now we code the button with an event listener to run the “switchClass” function which changes the element’s class from “start” to “end” using an if statement. This is a simple,  yet effective, example of using JavaScript to trigger a transition.  </p>
            </div>
        </>
    )
}

function TransitionJSActive() {
    return (
        <>
            <div className="col-6" style={{ textAlign: "left" }}>
                <h6>HTML:</h6>
                <code style={{ color: "black", fontSize: "10px" }}>
                    <span style={{fontWeight:"bold"}}>{'<'}div </span>id="logo" <span className="emphasis">class="start"</span> style="background-color:black"<span style={{fontWeight:"bold"}}>{'>'}</span><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>{'<'}svg{'>'}</span><span style={{ fontStyle: "italic" }}>SVG-path-goes-here</span><span style={{fontWeight:"bold"}}>{'<'}/svg{'>'}</span><br></br>
                    <span style={{fontWeight:"bold"}}>{'<'}/div{'>'}</span><br></br>
                    <span style={{fontWeight:"bold"}}>{'<'}button</span> id="myButton"<span style={{fontWeight:"bold"}}>{'>'}</span>Click Me!<span style={{fontWeight:"bold"}}>{'<'}/button{'>'}</span>
                </code>
                <br></br><br></br>

                <h6>CSS:</h6>
                <code style={{ color: "black", fontSize: "10px" }}>
                    <span className="emphasis" style={{fontWeight:"bold"}}>.start</span> {'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>transform:</span> rotate(0deg);<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>fill:</span> blue;<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>transition:</span> transform 1s ease-in,<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill 1s ease-out 0.5s;<br></br>
                    {'}'}<br></br>
                    <span className="emphasis" style={{fontWeight:"bold"}}>.end </span>{'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>transform:</span> rotate(180deg);<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>fill:</span> red;<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span style={{fontWeight:"bold"}}>transition:</span> transform 1s ease-in, <br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fill 1s ease-out 0.5s;<br></br>
                    {'}'}<br></br><br></br>
                </code>

                <h6>JavaScript:</h6>
                <code style={{ color: "black", fontSize: "10px" }}>
                let myButton = document.getElementById("myButton");<br></br>
                let myElement = document.getElementById("logo");<br></br>
                <br></br>
                function switchClass() {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;if(myElement.classList.contains("start")) {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myElement.classList.add(<span className="emphasis">"end"</span>);<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myElement.classList.remove(<span className="emphasis">"start"</span>);<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{'}'} else {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myElement.classList.add(<span className="emphasis">"start"</span>);<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;myElement.classList.remove(<span className="emphasis">"end"</span>);<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br></br>
                {'}'};<br></br><br></br>
                myButton.addEventListener("click", switchClass);
                </code>
            </div>
        </>

    )
}

export { TransitionBackgroundColorCode, TransitionFillColorCode, TransitionTransformationsCode, TransitionAllCode, TransitionDuration, TransitionTimingFunction, TransitionDelay, TransitionLongWay, TransitionShorthand, TransitionCSSHover, TransitionCSSActive, TransitionJSExplination, TransitionJSActive }