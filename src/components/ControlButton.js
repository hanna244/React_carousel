import React, { useState, useMemo }  from 'react'

function ControlButton({slideControl, controlValue}) {
    // const [control, setControl] = useState(true)
    // useMemo(setControl(controlValue), [])

    return (
    <button className='control' onClick={slideControl} ></button>
    // <button className='control' onClick={slideControl} >{controlValue ? "슬라이드 일시정지" : "슬라이드 재생"}</button>
    )
}

export default ControlButton