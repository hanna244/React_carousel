import React, { useState }  from 'react'
import SliderContent  from './SliderContent'
import imageSlider  from './ImageSlider'
import Arrows  from './Arrows'
import Dots  from './Dots'
import './slider.css';


const len = imageSlider.length - 1

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0)

    console.log(activeIndex)

    return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}></SliderContent>
        <Arrows 
        prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)} 
        nextSlide={() => setActiveIndex(activeIndex === 1 ? len : activeIndex + 1)} 
        />
        <Dots 
            activeIndex={activeIndex} 
            imageSlider={imageSlider} 
            onClick={activeIndex => setActiveIndex(activeIndex)}/>
    </div>
    )
}

export default Slider