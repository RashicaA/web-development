import React from 'react'

const TemperatureInput = (props) => {
    const { temperature, onTempChange } = props;
    return (
        <div>
            <label>Enter Temperature:</label>
            <input
                type='text'
                value={temperature}
                onChange={(e) => onTempChange(e.target.value)}
            />
        </div>
    )
}

export default TemperatureInput
