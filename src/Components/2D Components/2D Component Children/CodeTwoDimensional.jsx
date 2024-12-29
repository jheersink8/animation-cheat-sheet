export default function CodeTwoDimensional({ col, position, value, position1, value1 }) {
    return (
        <code className={`col-${col} codeCSS`}>
            .selector {'{'}<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: <span className="emphasis">{position}</span>({value})<span className="emphasis">{position1}</span>{value1};<br></br>
            {'}'}
        </code>
    )
};



