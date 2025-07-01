import { useState } from "react";



const FormState = () => {

    const personObj = {name:"", age: 0 };
    const [person, setPerson] = useState({personObj});
 
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log(person);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="m-2 p-2">
                    <label htmlFor="">Name :</label>
                    <input onChange={(event)=> setPerson({...person, name: event.target.value})} 
                    value={person.name}
                    type="text" name="name" className="px-3 py-3 border-gray-500"/>
                </div>
                <div className="m-5 p-5">
                    <label htmlFor="">Age :</label>
                    <input onChange={(event)=> setPerson({...person, age: event.target.value})} 
                    value={person.age}
                    type="number" name="age" className="px-3 py-3 border-gray-500"/>
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-sm p-3">submit</button>
            </form>
        </div>
    );
};

export default FormState;