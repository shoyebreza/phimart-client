import { useState } from 'react';

const Person = () => {

    const [person, setPerson] = useState({
        firstName : "John",
        lastName : "Doe",
        email : "example@email.com",
        address: {
            city: "Mirpur",
            state : "Dhaka",
        },
    });

    const handleClick = ()=>{
        const newPerson = {
            ... person, 
            firstName : "Michel",
            lastName : "Von",
            address : {
                ...person.address,
                city : "Dhanmondi",
            },
        };

        setPerson(newPerson);

    };
    return (
        <div>
            <h1>{person.firstName} {person.lastName}</h1>
            <p>{person.address.city} {person.address.state}</p>
            <button onClick={handleClick} className='px-2 py-2 bg-blue-500 text-white rounded-sm m-5'>Click Me</button>
        </div>
    );
};

export default Person;