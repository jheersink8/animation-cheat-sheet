function Step1Code() {
    return (
        <div className="col-12 codeCSS">
            <p className="m-0" style={{ fontWeight: 700 }}>HTML Structure</p>
            <code style={{ color: 'black' }}>
                {'<'}div class="<span className='emphasis'>parent</span>"{'>'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="<span className='emphasis'>child1</span>"{'>'}{'<'}/div{'>'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="<span className='emphasis'>child2</span>"{'>'}{'<'}/div{'>'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="<span className='emphasis'>child3</span>"{'>'}{'<'}/div{'>'}<br></br>
                {'<'}/div{'>'}
            </code>
        </div>
    )
}

function Step2Code() {
    return (
        <>
            <div className="col-12 codeCSS">
                <p className="m-0" style={{ fontWeight: 700 }}>Explanation:</p>
                <p>Think of the parent element as a stage. The stage is the starting point for any child elements in your 3D space. Then imagine your computer screen is your position in the audience looking at the stage. The CSS property “perspective” sets the distance between you (the viewer) and the stage. </p>


                <p className="m-0" style={{ fontWeight: 700 }}>CSS:</p>
                <code className='col-12' style={{color: 'black'}}>
                    .parent {'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis">perspective:</span> 1000px;<br></br>
                    {'}'}
                </code>
            </div>
        </>
    )
}

export { Step1Code, Step2Code };