import React, { useState } from 'react'

const SimpleForm = () => {
    const [formData, setFormData] = useState({ firstname: '', email: '' })

    function handleChange(event) {
        console.log(event.target)
        const { name, value } = event.target;

        // setFormData({ [name]: value }) // buggy, overriding previous values with new update. 

        setFormData(function (oldFormData) {
            console.log("prev", oldFormData);
            console.log({ name, value })
            return { ...oldFormData, [name]: value }

        })
        // OR this is same
        // setFormData( (oldFormData) => {
        //     console.log("prev", oldFormData);
        //     console.log({ name, value })
        //     return { ...oldFormData, [name]: value }

        // })

        console.log(formData)

    }

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log({ name, email })

        setName('')
        setEmail('')
    }

    return (
        <>
            <h3>Advanced Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='firstname' id='name' value={formData.firstname} onChange={handleChange} />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' name='email' id='email' value={formData.email} onChange={handleChange} />

                    <button type='submit'>Submit</button>
                </div>
            </form>
        </>
    )
}

export default SimpleForm
