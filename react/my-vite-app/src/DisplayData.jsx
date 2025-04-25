import React from 'react'

function DisplayData({ fruits, person }) {
    console.log(fruits, person)
    return <div>
        <h3>Fruits info</h3>
        {/* <p>{fruits[0]}</p>
        <p>{fruits[1]}</p>
        <p>{fruits[2]}</p> */}

        {/* {fruits.map((fruit, i) => {
            return (
                <div>{fruit}</div>
            )
        })} */}

        {/* same as above!! */}
        {fruits.map((fruit, i) => <div>{fruit}</div>)}



        <h3>Person info:</h3>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
    </div>
}

export default DisplayData;