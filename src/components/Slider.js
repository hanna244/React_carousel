import React, { useState, useEffect, useCallback }  from 'react'
import SliderContent  from './SliderContent'
import imageSlider  from './ImageSlider'
import Arrows  from './Arrows'
import Dots  from './Dots'
import ControlButton  from './ControlButton'
import './slider.css';

const len = imageSlider.length - 1

function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [slideTimerControl, setSlideTimerControl] = useState(true)

    // prevSlide
    const handlePrevSlide = useCallback(() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1), [activeIndex])
    
    // nextSlide
    const handleNextSlide = useCallback(() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1), [activeIndex])
    
    // slideTimer
    useEffect(()=>{
        const nextSlideExpression = activeIndex === len ? 0 : activeIndex + 1
        const slideTimer = setTimeout(() => setActiveIndex(nextSlideExpression), 2000);
        if(!slideTimerControl) {
            clearTimeout(slideTimer)
        }

        return ()=>{ clearTimeout(slideTimer) }
      }, [activeIndex, slideTimerControl]);

    return (
    <div className='slider-container'>
        <SliderContent activeIndex={activeIndex} imageSlider={imageSlider}></SliderContent>
        <Arrows 
        prevSlide={handlePrevSlide} 
        nextSlide={handleNextSlide} 
        />
        <div className='group_dotconrol'>
            <Dots
                activeIndex={activeIndex}
                imageSlider={imageSlider}
                onClick={activeIndex => setActiveIndex(activeIndex)}/>
            <ControlButton controlValue={slideTimerControl} slideControl={useCallback(() => setSlideTimerControl(!slideTimerControl), [slideTimerControl])} />
        </div>
    </div>
    )
}

export default React.memo(Slider)