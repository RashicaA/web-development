// Create a User Card component that:

import { useState } from "react";

// Accepts a user details object (name, email, age, location, picture) as prop.
// Displays user details in a card format.
// Conditionally renders "Adult" or "Minor" based on age.
// Adds a button to toggle email visibility.


const UserCard = ({ user }) => {
    const [showEmail, setShowEmail] = useState(true);

    const [arr, setArr] = useState([])

    function handleEmailToggle() {
        setShowEmail(!showEmail);
    }

    return (
        <div
            style={{
                border: "1px solid #ccc",
                padding: "20px",
                borderRadius: "8px",
                textAlign: "center",
            }}
        >
            <img
                style={{ borderRadius: "50%" }}
                src={user.picture.large}
            />
            <h2>
                Name: {user.name.first} {user.name.last}
            </h2>
            <p>
                Age: {user.dob.age} ({user.dob.age >= 18 ? 'Major' : 'Minor'})
            </p>
            <p>
                Location: {user.location.city}, {user.location.country}
            </p>

            {/* better pratice */}
            {/* {showEmail ? <p>Email: {user.email}</p> : null} */}

            {/* bad pratice, but used a lot */}
            {showEmail && <p>Email: {user.email}</p>}

            {/* goofd practice */}
            {/* {arr.length ? "data exists" : null} */}

            {/* bad pratice */}
            {/* {arr.length && "data exists"} */}
            {/* 0 */}

            <button onClick={handleEmailToggle}>
                Toggle email
            </button>
        </div>
    );
};

export default UserCard;