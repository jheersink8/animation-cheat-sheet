export default function ThinkingThreeDimensions() {
    return (
        <>
            <div className="newGrid container mt-3">
                <div className="row">
                    <h2 className="cardTitle text-center col-12">Thinking in 3D</h2>
                    <h3 className="cardDescription col-2">Step 1:</h3>
                    <div className="col-10 ">
                        <div className="row">

                            <h4 className="col-12 cardAction">Create Parent Element to Hold Children (Objects to be in 3D Space)</h4>

                            <div className="col-12 cardContainer center d-flex">
                                <div className="parent3d ">
                                    <p>PARENT</p>
                                    <div id="object1"></div>
                                    <div id="object2"></div>
                                    <div id="object3"></div>
                                </div>
                            </div>

                            <code className="col-12 codeCSS">
                                <p>HTML</p>
                                {'<'}div class="parent"{'>'}<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="object1"{'>'}{'<'}/div{'>'}<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="object2"{'>'}{'<'}/div{'>'}<br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="object3"{'>'}{'<'}/div{'>'}<br></br>
                                {'<'}/div{'>'}
                            </code>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}