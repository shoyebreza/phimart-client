import { useForm } from "react-hook-form";



const CartApp = () => {
    const {register, handleSubmit} = useForm();

    const cart =[
        {name : "Laptop", price : 34000},
        {name : "Mobile", price : 14000},
        {name : "Desktop", price : 54000},
        {name : "Camera", price : 24000}
    ];
    const addItem = (data)=> {
        console.log(data);
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(addItem)}>
                <input {...register('item',{required:true})} type="text" placeholder="item Name" className="border p-2 m-2 rounded w-1/2"/>
                <input {...register('price',{required:true})} type="number" placeholder="item Price" className="border p-2 m-2 rounded w-1/2"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2 m-2">Add item</button>
            </form>
            {/* cart item list */} 
            {cart.length >0 ? (
                //Todo Cart
                <ul>
                    {cart.map((item, index)=>(
                        <li key={index}>1 X {item.name} {item.price}</li>
                    ))}
                </ul>
            ) : (
                <p>No cart item</p>
            )}
        </div>
    );
};

export default CartApp;