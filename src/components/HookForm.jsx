
import { useForm } from "react-hook-form";

const HookForm = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-2 p-2">
                    <label htmlFor="">Name :</label>
                    <input { ...register('name', {required: true, minLength: 5})}
                    type="text" name="name" id="name"  className="px-3 py-3 border-gray-500"/>
                    {errors.name?.type==='required' && <span>  This field is required</span> }
                    {errors.name?.type==='minLength' && <span>  Minimun length is 5 </span> }
                </div>
                <div className="m-5 p-5">
                    <label htmlFor="">Age :</label>
                    <input { ...register('age',{required: true})}
                    type="number" name="age" className="px-3 py-3 border-gray-500"/>
                    {errors.age && <span>  This field is required</span> }
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-sm p-3">submit</button>
            </form>
        </div>
    );
};

export default HookForm;