import React  from 'react'

function SliderContent({activeIndex, imageSlider}) {
    return (
    <section>
        {imageSlider.map((slide, index) => (
            <ul className='slide-list'>
                <li
                    key={index}
                    className={index === activeIndex ? "slides active" : "inactive"}
                >
                    <img className='slide-image' src={slide.urls} alt={slide.alt} />
                    
                </li>
            </ul>
        ))}
    </section>
    )
}

export default SliderContent