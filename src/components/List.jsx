
const List = () => {
    const fruits = ['Apple','Banana','Orange','Grapes','Mango','Pineapple'];
    return (
        <div>
            <ul>
                {fruits.map((fruit)=>(
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;