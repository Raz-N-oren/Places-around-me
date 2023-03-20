import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import StoreModel from "../../../Models/StoreModel";
import storesService from "../../../Services/StoresService";
import getStoreLocation from "../../../Utils/UserLocation";
import "./Insert.css";

function Insert(): JSX.Element {

    const { register, handleSubmit } = useForm<StoreModel>();

    const navigate = useNavigate();

    async function send(store: StoreModel) {
        try {
            const geo = await getStoreLocation();
            store.latitude = geo.latitude;
            store.longitude = geo.longitude;
            await storesService.addStore(store);
            navigate("/list");
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="Insert">
            <h2>Add Store</h2>

            <form onSubmit={handleSubmit(send)}>

                <label>Store Name:</label>
                <input type="text" {...register("storeName")} required minLength={2} maxLength={30}/>

                <label>Description:</label>
                <input type="text" {...register("description")} required minLength={2} maxLength={1000}/>

                <label>Address:</label>
                <input type="text" {...register("address")} required minLength={2} maxLength={30}/>

                <button>Add</button>

            </form>
        </div>
    );
}

export default Insert;
