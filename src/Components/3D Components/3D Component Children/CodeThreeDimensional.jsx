export default function CodeThreeDimensional({ col, position, value, position1, value1 }) {
    return (
        <code className={`col-${col} codeCSS`}>
            .parentSelector {'{'}<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;perspective: 1000px;<br></br>
            <br></br>
            .childSelector {'{'}<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: <span className="emphasis">{position}</span>({value})<span className="emphasis">{position1}</span>{value1};<br></br>
            {'}'}
        </code>
    )
}