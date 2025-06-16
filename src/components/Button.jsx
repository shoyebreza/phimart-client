

// eslint-disable-next-line react/prop-types
const Button = ({handleClick,children,color="info"}) => {

    const btnColors = {
        primary:'bg-blue-500',
        success:'bg-green-500',
        danger:'bg-red-500',
        info:'bg-cyan-500',
        warning:'bg-yellow-500'
      };


    return ( <button onClick={handleClick} 
        className={`m-5 px-3 py-2 text-white rounded-sm ${btnColors[color]}`}>
        {children}</button>
    );
};

export default Button;