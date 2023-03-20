import { useForm } from "react-hook-form";
import StoreModel from "../../../Models/StoreModel";
import "./Insert.css";

function Insert(): JSX.Element {

    const { register, handleSubmit } = useForm<StoreModel>();

    async function send(store: StoreModel) {
        try {
            
        } 
        catch (err:any) {
            alert(err.message);
        }
    }

    return (
        <div className="Insert">
            <h2>Add Store</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Store Name:</label>
                <input type="text" {...register("storeName")} />

                <label>Description:</label>
                <input type="text" {...register("description")} />

                <label>Address:</label>
                <input type="text" {...register("address")} />

                <button>Add</button>

            </form>
        </div>
    );
}

export default Insert;
