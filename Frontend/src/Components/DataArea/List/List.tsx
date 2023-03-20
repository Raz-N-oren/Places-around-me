import { useEffect, useState } from "react";
import StoreModel from "../../../Models/StoreModel";
import storesService from "../../../Services/StoresService";
import "./List.css";

function List(): JSX.Element {

    const [stores, setStores] = useState<StoreModel[]>([]);

    useEffect(() => {

        storesService.getAllStores()
            .then(stores => setStores(stores))
            .catch(err => alert(err.message));
    }, []);

    async function deleteStore(storeId: number) {
        try {
            const ok = window.confirm("Are you sure?");
            if (!ok) return;
            
            await storesService.deleteStore(storeId);
            const index = stores.findIndex(s => s.storeId === storeId);
            stores.splice(index, 1);
            const duplicatedStores = [...stores];
            setStores(duplicatedStores);

        }
        catch (err: any) {
            alert(err.message);
        }
    }

    return (
        <div className="List">

            <h2>List of Stores</h2>

            <table>
                <thead>
                    <tr>
                        <th>Store Name</th>
                        <th>Description</th>
                        <th>Address</th>
                        <th>Geolocation</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {stores.map(s =>
                        <tr key={s.storeId}>
                            <td>{s.storeName}</td>
                            <td>{s.description}</td>
                            <td>{s.address}</td>
                            <td>{s.latitude},{s.longitude}</td>
                            <td>
                                <button onClick={() => deleteStore(s.storeId)}>❌</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default List;
