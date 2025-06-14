import { useState } from "react";

const List = () => {
    const fruits = ['Apple','Banana','Orange','Grapes','Mango','Pineapple'];
    const [selectedIndex, setSelectedIndex]= useState(-1);
    return (
        <div>
            <ul className="pl-6 list-disc">
                {fruits.map((fruit,index)=>(
                    <li className={selectedIndex === index ? "bg-blue-500 p-3 rounded-sm m-3" : ""} 
                    onClick={()=>setSelectedIndex(index)} 
                    key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;