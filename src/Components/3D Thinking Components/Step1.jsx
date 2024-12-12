import ThreeDimensionalThinkingBox from './ThreeDimensionalThinkingBox';


export default function Step1() {
    return (
        <>

            <h3 className="cardDescription col-2">Step 1:</h3>
            <div className="col-10 ">
                <div className="row">

                    <h4 className="col-12 cardAction p-3">Create Parent Element to Hold Children (Objects to be in 3D Space)</h4>

                    <ThreeDimensionalThinkingBox />

                    <p className="col-12 codeCSS">
                        <p>HTML</p>
                        <code style={{ color: 'black' }}>
                            {'<'}div class="<span className='emphasis'>parent</span>"{'>'}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="<span className='emphasis'>child1</span>"{'>'}{'<'}/div{'>'}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="<span className='emphasis'>child2</span>"{'>'}{'<'}/div{'>'}<br></br>
                            &nbsp;&nbsp;&nbsp;&nbsp;{'<'}div class="<span className='emphasis'>child3</span>"{'>'}{'<'}/div{'>'}<br></br>
                            {'<'}/div{'>'}
                        </code>
                    </p>

                </div>
            </div>

        </>
    )
}