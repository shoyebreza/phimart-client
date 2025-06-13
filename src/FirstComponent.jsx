const FirstComponent = ()=>{

    const name = "Phitron";

    const sum = (a,b)=> a + b;

    return (
    <>
        <h1 className="test-xl font-bold text-red-500"> hello {name || "World"}</h1> 
        <p>paragraph tag</p>
        <p>Your marks is  {sum(5,34)}</p>
    </>
    );
};

export default FirstComponent;