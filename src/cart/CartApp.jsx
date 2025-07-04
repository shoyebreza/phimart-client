import { Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";



const CartApp = () => {
    const {register, handleSubmit} = useForm();
    const [cart, setCart] = useState([]);

    /* const cart =[
        {name : "Laptop", price : 34000},
        {name : "Mobile", price : 14000},
        {name : "Desktop", price : 54000},
        {name : "Camera", price : 24000}
    ]; */
    const addItem = (data)=> {
        const existingItem = cart.find((item)=> item.name ===data.name);
        if(existingItem){
            setCart(cart.map(item => item.name===data.name ? {...item, quantity: item.quantity + 1} : item))
        }else{
        setCart([
            ...cart, 
            { name: data.name, price: parseFloat(data.price), 
            quantity: 1},
        ]);
      }
    };

    // increase quantity 

    const increase = (name)=>{
        setCart(
            cart.map((item)=> 
                item.name ===name ? { ...item, quantity : item.quantity + 1 } : item
            )
        );
    };

    // decrease quantity 

    const decrease = (name)=>{
        setCart(
            cart.map((item)=> 
                item.name ===name ? { ...item, quantity : item.quantity - 1 } : item
            )
        );
    };

    //remove item 

    const remove = (name) =>{
        setCart(cart.filter(item => item.name != name));
    };


    return (
        <div className="w-1/3 mx-auto bg-gray-100 rounded-lg p-6 shadow-md">
            <form action="" onSubmit={handleSubmit(addItem)}>
                <input {...register('name',{required:true})} type="text" placeholder="item Name" className="border p-2 m-2 rounded w-full"/>
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
                            <p>{(item.price * item.quantity).toFixed(2)}</p>

                            <div className="flex items-center">
                                <button onClick={()=> decrease(item.name)} className="bg-red-500 text-white px-2 py-1 rounded">-</button>
                                <span className="mx-2"> {item.quantity} </span>
                                <button onClick={()=> increase(item.name)} className="bg-green-500 text-white px-2 py-1 rounded">+</button>
                            </div>
                            <button onClick={()=> remove(item.name)} className="text-red-500"><Trash2/></button>
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