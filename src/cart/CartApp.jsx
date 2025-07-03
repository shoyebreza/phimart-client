import { useForm } from "react-hook-form";



const CartApp = () => {
    const {register, handleSubmit} = useForm();
    const addItem = (data)=> {
        console.log(data);
    };
    return (
        <div>
            <form action="" onSubmit={handleSubmit(addItem)}>
                <input {...register('item',{required:true})} type="text" placeholder="item Name" className="border p-2 m-2 rounded w-1/2"/>
                <input {...register('price',{required:true})} type="number" placeholder="item Price" className="border p-2 m-2 rounded w-1/2"/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded w-1/2">Add item</button>
            </form>
        </div>
    );
};

export default CartApp;