import { useEffect } from "react";

let count =0;


const Effect = () => {
    useEffect(()=>{
        console.log('effect occur');
    });
    return (
        <div>
            <h1>User List {++count}</h1>
        </div>
    );
};

export default Effect;