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
                .selector<span className="emphasis">:focus</span> {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>background-color:</span> white;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>fill:</span> red;<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ fontWeight: "bold" }}>transform:</span> rotateX(35deg) translateY(-30px);<br></br>
                {'}'}
            </code>
        </div>
    )
}

export { TransitionBackgroundColorCode, TransitionFillColorCode, TransitionTransformationsCode, TransitionAllCode, TransitionDuration, TransitionTimingFunction, TransitionDelay, TransitionLongWay, TransitionShorthand, TransitionCSSHover, TransitionCSSActive }