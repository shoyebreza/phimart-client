import { Trash2 } from "lucide-react";
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
        <div className="w-1/3 mx-auto bg-gray-100 rounded-lg p-6 shadow-md">
            <form action="" onSubmit={handleSubmit(addItem)}>
                <input {...register('item',{required:true})} type="text" placeholder="item Name" className="border p-2 m-2 rounded w-full"/>
                <input {...register('price',{required:true})} type="number" placeholder="item Price" className="border p-2 m-2 rounded w-full"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2 m-2">Add item</button>
            </form>
            {/* cart item list */} 
            {cart.length >0 ? (
                //Todo Cart
                <div>
                    {cart.map((item, index)=>(
                        <div key={index} className="flex items-center p-2 bg-white rounded mb-2 justify-between">
                            <p>{item.name}</p>
                            <p>{item.price}</p>

                            <div className="flex items-center">
                                <button className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                                <span className="mx-2"> 1 </span>
                                <button  className="bg-green-500 text-white px-2 py-1 rounded">+</button>
                            </div>
                            <button><Trash2/></button>
                        </div>
                    ))}
                    <div className="mt-4 font-black text-large"> Total Price: 100 </div>
                </div>
            ) : (
                <p>No cart item</p>
            )}
        </div>
    );
};

export default CartApp;