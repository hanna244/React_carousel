import React  from 'react'

function Arrows({prevSlide, nextSilde}) {
    return (
    <div className="arrow">
        <span className='prev' onClick={prevSlide}>
            &#10094;
        </span>
        <span className='next' onClick={nextSilde}>
            &#10095;
        </span>
    </div>
    )
}

export default Arrows