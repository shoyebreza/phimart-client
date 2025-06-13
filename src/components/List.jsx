
const List = () => {
    const fruits = ['Apple','Banana','Orange','Grapes','Mango','Pineapple'];
    return (
        <div>
            <ul className="pl-6 list-disc">
                {fruits.map((fruit)=>(
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;