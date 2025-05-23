import React, { useEffect, useState } from 'react'

const DATA = [
    {
        id: 1,
        title: "Beautiful scenery",
        description: "Scenes from Mighty Himalayas",
        url: "https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id: 2,
        title: "Beautiful landscape",
        description: "Scenes from Mighty Himalayas",
        url: "https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
        id: 3,
        title: "Beautiful view",
        description: "Scenes from Mighty Himalayas",
        url: "https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },

]

const Carousel = () => {
    const [currentItem, setCurrent] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            handleNext();
        }, 2000)

        return () => clearInterval(timerId);
    }, [currentItem])

    function handleNext() {
        if (currentItem === DATA.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(curr => curr + 1)
        }
    }

    function handlePrev() {
        if (currentItem === 0) {
            setCurrent(DATA.length - 1)
        } else {
            setCurrent(curr => curr - 1)
        }
    }

    return (
        <>
            <h1>Carousel starts</h1>
            <div className='carousel'>
                <button onClick={handlePrev}>Prev</button>
                <div className='carousel-item'>
                    <img
                        height={200}
                        width={200}
                        src={DATA[currentItem].url}
                        alt={DATA[currentItem].title}
                    />
                    <h3>{DATA[currentItem].title}</h3>
                    <p>{DATA[currentItem].description}</p>
                </div>
                <button onClick={handleNext}>Next</button>
            </div>
        </>
    )
}

export default Carousel
