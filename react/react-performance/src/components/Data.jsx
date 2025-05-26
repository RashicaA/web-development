import React from 'react'

const DataComponent = (props) => {
    const { data } = props;
    return (
        <div>
            <h2>Data loaded</h2>
            <p>{data}</p>
        </div>
    )
}

export default DataComponent