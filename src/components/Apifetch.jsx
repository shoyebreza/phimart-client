import { useEffect, useState } from "react";


const Apifetch = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then((data) => setUsers(data));
    }, []);
    return (
        <div>
            <p>API</p>
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

export default Apifetch;