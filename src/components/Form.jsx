

const Form = () => {
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('submit');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="m-2 p-2">
                    <label htmlFor="">Name :</label>
                    <input type="text" name="name" className="px-3 py-3 border-gray-500"/>
                </div>
                <div className="m-5 p-5">
                    <label htmlFor="">Age :</label>
                    <input type="number" name="age" className="px-3 py-3 border-gray-500"/>
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-sm p-3">submit</button>
            </form>
        </div>
    );
};

export default Form;