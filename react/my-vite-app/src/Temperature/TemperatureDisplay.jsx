import React, { useState } from 'react'

const TemperatureDisplay = (props) => {
    const { temperature } = props;
    const fahrenTemp = (temperature * 9 / 5) + 32;
    return (
        <div>
            <p>Temperature in Celsius: {temperature}</p>
            <p>Temperature in Fahrenheit: {fahrenTemp}</p>
        </div>
    )
}

export default TemperatureDisplay
