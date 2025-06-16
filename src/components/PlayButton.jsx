import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";


const PlayButton = () => {

    const handleClick =()=> console.log('button');

    const [alertVisible, setAlertVisible] = useState(false);

    return (
        <div>
            {alertVisible && (
                <Alert color="success">You have clicked me</Alert>
            )}
            
            <Button handleClick={()=> setAlertVisible(true)}>Click Me</Button>
        </div>
    );
};

export default PlayButton;