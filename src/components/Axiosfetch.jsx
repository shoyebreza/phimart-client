import axios from "axios";
import { useEffect, useState } from "react";


const Axiosfetch = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((data)=> setUsers(data.data))
        .catch((err)=> setError(err.message));
    }, []);
    return (
        <div>
            <p>AXIOS API</p>
            {error && <p className="bg-red-100 text-red-500">{error}</p> }
            <ul className="list-disc m-5">
                {
                    users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Axiosfetch;