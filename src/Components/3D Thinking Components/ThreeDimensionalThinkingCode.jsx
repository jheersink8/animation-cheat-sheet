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
                <p className="m-0" style={{ fontWeight: 700 }}>Explanation:</p>
                <p>Once the perspective is established on the parent, objects can move freely in a true 3D environment. </p>
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

function OtherNotes() {
    return (
        <div className="col-12 codeCSS">
            <p className="m-0" style={{ fontWeight: 700 }}>Note:</p>
            <p>You can create six sides and use rotate/translate transformations to position each side in 3D space to form a cube. If all six sides are placed inside a parent container, you can apply 3D transformations (like rotation) to the parent itself, which allows the cube to rotate as a whole, instead of modifying each side individually. </p>
            <p style={{ textDecoration: 'underline' }}>To render the cube in a 3D environment:</p>
            <p>1. The parent container must be wrapped inside a grandparent container that applies the perspective property. The perspective creates the illusion of depth, which is critical for 3D effects. </p>
            <p>2. The parent container must have transform-style: preserve-3d applied. Without it, the parent will act like a flattened 2D layer, and the children (the cube's sides) will lose their 3D positioning and appear collapsed or isolated.</p>

            <p style={{ fontWeight: 'bold' }}>TL;DR role of each element: </p>

            <p><span style={{ textDecoration: 'underline' }}>Grandparent (the 3D space)</span>: Defines the perspective.</p>

            <p><span style={{ textDecoration: 'underline' }}>Parent (the cube)</span>: Allows children to maintain 3D positioning with transform-style: preserve-3d.</p>

            <p><span style={{ textDecoration: 'underline' }}>Children (the cube’s sides)</span>: Each side has its own transform (rotate + translate) to position it correctly in 3D space.</p>

            <p className="m-0" style={{ fontWeight: 700 }}>CSS:</p>
            <code className='col-12' style={{ color: 'black' }}>
                .grandparent {'{'}<br></br>

                &nbsp;&nbsp;&nbsp;&nbsp;perspective: 1000px;<br></br>
                {'}'}
            </code>
            <br></br>
            <code className='col-12' style={{ color: 'black' }}>
                .parent {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="emphasis">transform-style: preserve-3d;</span><br></br>
                {'}'}
            </code>
            <br></br>
            <code className='col-12' style={{ color: 'black' }}>
                .child(ren) {'{'}<br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: 'green' }}>//x6 (for each side)//</span><br></br>
                &nbsp;&nbsp;&nbsp;&nbsp;transform: rotateY(XXdeg) translateZ(XXpx);<br></br>
                {'}'}
            </code>
        </div>
    )
}

export { Introduction, Step1Code, Step2Code, Step3Code, OtherNotes };