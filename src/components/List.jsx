import { useState } from "react";

// eslint-disable-next-line react/prop-types
const List = ({items=[], heading}) => {
    const [selectedIndex, setSelectedIndex]= useState(-1);
    return (
        <div>
            <h1>{heading}</h1>
            <ul className="pl-6 list-disc">
                {items.map((fruit,index)=>(
                    <li className={selectedIndex === index ? "bg-blue-500 p-3 rounded-sm" : ""}
                    onClick={()=>setSelectedIndex(index)} 
                    key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;