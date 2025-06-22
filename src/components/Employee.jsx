import { useState } from "react";


const Employee = () => {
    const empArr = [
        {name:'John', age:20},
        {name:'Doe', age:30},
    ]
    const [employee,setEmployee] = useState(empArr);
    const handleClick = ()=>{
        setEmployee(employee.map(emp => emp.name ==='John' ? {...emp, age :60} : emp))
    }
    return (
        <div>
            <ul>
                {employee.map((emp, index)=>(
                    <li key={index}> Name : {emp.name} Age : {emp.age}</li>
                ))}
            </ul>
            <button className="p-3 bg-green-500 text-white rounded-sm" onClick={handleClick}> Update </button>
        </div>
    );
};

export default Employee;