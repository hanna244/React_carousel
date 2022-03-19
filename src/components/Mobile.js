
import React, { Fragment }  from 'react'
import View from './View'
import Header from './Header'
import viewData  from '../data/ViewData'

function Mobile() {
    return (
    <Fragment>
        <header>
            <Header />
        </header>
        <main>
            <div className='wrapper_main'>
                <View viewData={viewData} />
            </div>
        </main>
    </Fragment>
    )
}

export default Mobile