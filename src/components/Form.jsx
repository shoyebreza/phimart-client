import { useRef } from "react";


const Form = () => {
    const nameRef = useRef(null);
    const ageRef = useRef(null);

    const person = {name:"", age:0 };

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(nameRef.current !== null) person.name = nameRef.current.value;
        if(ageRef.current !== null) person.age = parseInt(ageRef.current.value);
        console.log(person);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="m-2 p-2">
                    <label htmlFor="">Name :</label>
                    <input type="text" name="name" ref={nameRef} className="px-3 py-3 border-gray-500"/>
                </div>
                <div className="m-5 p-5">
                    <label htmlFor="">Age :</label>
                    <input type="number" name="age" ref={ageRef} className="px-3 py-3 border-gray-500"/>
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-sm p-3">submit</button>
            </form>
        </div>
    );
};

export default Form;