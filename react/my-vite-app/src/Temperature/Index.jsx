import React, { useState } from 'react'

import TemperatureDisplay from './TemperatureDisplay'
import TemperatureInput from './TemperatureInput'



const Component = () => {
    const [temperature, setTemperature] = useState(0);

    const handleTemperatureChange = (newTemp) => {
        setTemperature(newTemp)
    }

    return <>
        <TemperatureInput temperature={temperature} onTempChange={handleTemperatureChange} />
        <TemperatureDisplay temperature={temperature} />
    </>
}

export default Component;

