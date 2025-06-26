import { useEffect, useState } from "react";

let count =0;


const Effect = () => {
    const [users, setUsers]= useState([])
    useEffect(()=>{
        console.log('effect occur');
        setUsers("john")
    });


    return (
        <div>
            <h1>User List {++count}</h1>
        </div>
    );
};

export default Effect;