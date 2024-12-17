function Introduction() {
    return (
        <div className="col-12 codeCSS">
            You can apply 3D transformations to objects using a similar syntax as 2D objects. In an unaltered environment, objects can rotate, translate, and skew just like they do in 2D space. But, by default, the environment is set to two dimensions. Any 3D transformations applied to objects are rendered in a 2D space. To experience a true 3D environment, you need to establish a 3D space for your elements. <span className="emphasis">Hover over the pink area above to see this effect</span>.
        </div>
    )
}

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
                <code className='col-12' style={{ color: 'black' }}>
                    .parent {'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis">perspective:</span> 1000px;<br></br>
                    {'}'}
                </code>
            </div>
        </>
    )
}

function Step3Code() {
    return (
        <>
            <div className="col-12 codeCSS">

                <p className="m-0" style={{ fontWeight: 700 }}>CSS:</p>
                <code className='col-12' style={{ color: 'black' }}>
                    <span className="emphasis">.child1</span> {'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;transform: translateZ(-170px);<br></br>
                    {'}'}
                </code>
                <br></br>
                <code className='col-12' style={{ color: 'black' }}>
                    <span className="emphasis">.child2</span> {'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;transform: translateZ(100px);<br></br>
                    {'}'}
                </code>
                <br></br>
                <code className='col-12' style={{ color: 'black' }}>
                    <span className="emphasis">.child3</span> {'{'}<br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;transform: translateZ(80px);<br></br>
                    {'}'}
                </code>

            </div>
        </>
    )
}

export { Introduction, Step1Code, Step2Code, Step3Code };