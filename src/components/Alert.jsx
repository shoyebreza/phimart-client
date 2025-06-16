import { useState } from "react";


// eslint-disable-next-line react/prop-types
const Alert = ({color='info', children}) => {
    const [visible, setVisible] = useState(true);
    const alertStyle = {
        success: "bg-green-100 text-green-700 border-green-500",
        error: "bg-red-100 text-red-700 border-red-500",
        warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
        info: "bg-blue-100 text-blue-700 border-blue-500",
    };
    if(!visible) return null;
    return (
        <div className={`flesx items-center justify-between rounded-sm p-4 m-5 ${alertStyle[color]}`}>
            <span>{children}</span>
            <button className="text-red-500" onClick={()=> setVisible(false)}>  X </button>
        </div>
    );
};

export default Alert;