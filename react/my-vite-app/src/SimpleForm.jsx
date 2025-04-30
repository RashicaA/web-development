import React, { Fragment } from 'react'

const SimpleForm = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    function handleEmailChange(ev) {
        setEmail(ev.target.value);
    }

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log({ name, email })

        setName('')
        setEmail('')
    }

    return (
        <React.Fragment>
            <h3>Simple Form</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' id='name' value={name} onChange={(ev) => setName(ev.target.value)} />
                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' value={email} onChange={handleEmailChange} />

                    <button type='submit'>Submit</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default SimpleForm
