
const List = () => {
    const fruits = ['Apple','Banana','Orange','Grapes','Mango','Pineapple'];
    let selectedIndex = -1;
    const handleItemPrint = (index)=> {
        selectedIndex = index;
    };
    
    return (
        <div>
            <ul className="pl-6 list-disc">
                {fruits.map((fruit,index)=>(
                    <li className={selectedIndex === index ? "bg-blue-500 p-3 rounded-sm m-3" : ""} onClick={()=>handleItemPrint(index)} key={fruit}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
};

export default List;