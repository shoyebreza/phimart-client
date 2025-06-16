import Alert from "./Alert";
import Button from "./Button";


const PlayButton = () => {

    const handleClick =()=> console.log('button');

    return (
        <div>
            <Alert color={success}></Alert>
            <Button handleClick={handleClick} ></Button>
        </div>
    );
};

export default PlayButton;