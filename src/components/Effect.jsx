import { useEffect, useState } from "react";

let count =0;


const Effect = () => {
    const [users, setUsers]= useState([]);
    const [dependencyA, setDependencyA] = useState(0);
    const [dependencyB, setDependencyB] = useState(0);

    useEffect(()=>{
        console.log('effect occur');
        setUsers(["John"]); 
    }, [dependencyA, dependencyB]);


    return (
        <div>
            <h1>User List {++count}</h1>
            <button onClick={()=> setDependencyA(Math.random())} className="px-3 py-2 bg-blue-500 ">Click MeA</button>
            <br />
            <br />
            <button onClick={()=> setDependencyB(Math.random())} className="px-3 py-2 bg-blue-500 ">Click MeB</button>
        </div>
    );
};

export default Effect;