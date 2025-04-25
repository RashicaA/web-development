import React from 'react';

const HelloComponent = ({ name, age }) => {

    return <>
        <div>Hello, my name is {name}</div>
        {age ? <span>and {age} years old.</span> : null}
    </>
}

export default HelloComponent;