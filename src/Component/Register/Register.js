import React, { useRef } from 'react';

const Register = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const numRef = useRef()
    const dateRef = useRef()
    const addressRef = useRef()

    const handleRegister = event => {
        event.preventDefault()

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const number = numRef.current.value;
        const date = dateRef.current.value;
        const address = addressRef.current.value;
        const userData = {
            name,
            email,
            number,
            date,
            address,
        }
        console.log(userData)

        fetch('http://localhost:4000/users',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                alert("Your Data submit successful")
            })

    }


    return (
        <div>
            <h1>register section</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <input ref={nameRef} type="text" placeholder="Name" />
                </div>
                <div>
                    <input ref={emailRef} type="email" placeholder="abc@gmail.com" />
                </div>
                <div>
                    <input type="password" placeholder="create password" />
                </div>
                <div>
                    <input ref={numRef} type="number" placeholder="phone" />
                </div>
                <div>
                    <input ref={addressRef} type="text" placeholder="home address" />
                </div>
                <div>
                    <input ref={dateRef} type="date" />
                </div>
                <p>You can Login here <button>Login</button></p>
                <div>
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </div>
    );
};

export default Register;