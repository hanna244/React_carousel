
import React, { Fragment }  from 'react'
import viewData  from '../data/ViewData'
// import check from '../state_checkMark.svg'

function Mobile() {
    console.log();
    return (
    <Fragment>
        <div className='wrap_button'>
            {viewData.map((data) => (
                <button type='button' className={data.title === 'disabled' ? 'state_bth desabled' : 'state_bth'}>{data.lable}
                    <span className='icon_button'>
                        <img src={data.url} alt=""  className='img_g'/>
                    </span>
                </button>
            ))}
        </div>
    </Fragment>
    )
}

export default Mobile