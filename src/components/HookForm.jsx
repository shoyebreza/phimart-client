
import { useForm } from "react-hook-form";

const HookForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-2 p-2">
                    <label htmlFor="">Name :</label>
                    <input { ...register('name')}
                    type="text" name="name" id="name"  className="px-3 py-3 border-gray-500"/>
                </div>
                <div className="m-5 p-5">
                    <label htmlFor="">Age :</label>
                    <input { ...register('age')}
                    type="number" name="age" className="px-3 py-3 border-gray-500"/>
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-sm p-3">submit</button>
            </form>
        </div>
    );
};

export default HookForm;