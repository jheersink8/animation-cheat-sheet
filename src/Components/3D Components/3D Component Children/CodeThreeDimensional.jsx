export default function CodeThreeDimensional({ col, position, value }) {
    return (
        <code className={`col-${col} codeCSS`}>
            .parentSelector {'{'}<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;perspective: 1000px;<br></br>
            <br></br>
            .childSelector {'{'}<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: <span className="emphasis">{position}</span>({value});<br></br>
            {'}'}
        </code>
    )
}