export default function translateX({ col, position, value }) {
    return (
        <code className={`col-${col} codeCSS`}>
            .selector {'{'}<br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;transform: <span className="emphasis">{position}</span>({value});<br></br>
            {'}'}
        </code>
    )
};



