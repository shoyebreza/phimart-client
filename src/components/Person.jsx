import { useState } from 'react';

const Person = () => {

    const [person, setPerson] = useState("");

    const [visible, setVisible] = useState(false);

    const handleClick = ()=>{
        setPerson('John');
        console.log(person);
    };
    console.log(person);
    return (
        <div>
            <button onClick={handleClick} className='px-2 py-2 bg-blue-500 text-white rounded-sm m-5'>Click Me</button>
        </div>
    );
};

export default Person;